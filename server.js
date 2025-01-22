let fs     = require('fs');

let http   = require('http'),
    path   = require('path'),
    config = fs.existsSync('./config.json')&&require('./config.json')||{...process.env},
    mime   = require('mime-types'),
    { urlParts, parseMultipart }    = require('./utils/utils'),
    jobs   = {
      GET:function(req, res, parts, fxn) {
        /** middlewares that respond to GET requests are called here */
        fxn = fs.existsSync(fxn='.'+parts.url+'.js')&&require(fxn)
        if(parts.query) req.query = parts.params;
        fxn&&fxn(req, res);
        return !!fxn;
      },
      POST:function(req, res, parts, fxn, buffer) {
        fxn = fs.existsSync(fxn=path.join(__dirname, parts.url+'.js'))&&require(fxn), buffer=[];
        /* exit the function and server if middleware is absent since POST requests in this scope do not GET assets */
        if(!fxn) return res.end();
        req.on('data', chunk=>buffer.push(chunk)),
        req.on('end', function(data) {
            data = Buffer.concat(buffer).toString('utf-8'),
            /** create req.body and res.json because invoked modules in Vercel require them to be defined */
            req.body = /multipart/.test(req.headers['content-type'])  ? parseMultipart(req, data)
            : (/** urlParts obtains the parameters for other enctypes as used below */
            /\{|\}/.test(data) ? { data }
            : (parts = urlParts('?'+data)).params);
          fxn&&fxn(req, res)
        });
        return !!fxn/**short-circuit the control flow to let the middleware send its responses */
      }
    },
    cache  = {}; /** to store the strings of data read from files */

http.createServer((req, res, url, parts, data, asBg, isJson)=>{
  ({ url } = parts =  urlParts(req.url)),
  parts.url = url=url.replace('undefined', '187'), // provide the appropriate path in lieu of undefined for request on the contact page

  res.json=obj=>res.end(JSON.stringify(obj)), // for Vercel functions
  (data = jobs[req.method.toUpperCase()])&&(data=data(req, res, parts)),
  /\/$/.test(url) && (url=path.join(url,'index.html')),
  
  data || new Promise((resolve, rej, cached)=>{
    if (data) return resolve(data); /*exit with dynamic data, remove short-circuit above to use it*/
    asBg = /background=true/.test(req.headers.referer),
    url = path.join('./', url+=(/json/.test(url)?'.json':'.html').repeat(!/\.[a-z]+/.test(url))),
    isJson = /json$/.test(url);
    /**make an exception for privacy-policy because the page.json response that hydrates it is too dissimilar */
    parts.params.slug==='privacy-policy'&&(url=url.replace('pages', 'privacy-policy'))
    /*(cached=cache[req.url])?resolve(cached):*/fs.readFile(url, (err, buf)=>{
      if(err) rej(err);
      else resolve(cache[req.url]=buf)
    })
  }).then((cached, slug)=>{
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-type': mime.lookup(url) || 'application/octet-stream'
   }),
   /**modify title.rendered in the read json for slug=title */
   /pages/.test(url)&&(slug=parts.params.slug?.replace(/^[^]|-[^]/g, e=>e.toUpperCase().replace('-',' ')))&&((cached=JSON.parse(cached))[0].title.rendered=/about/i.test(slug)?'':slug, cached=JSON.stringify(cached)),
   /** return dynamic data or static file that was read */ 
    asBg&&isJson&&(cached=cached.toString('utf-8').replace(/":\s*"[^,}]+/g, '":""')),
    /**slip in a styling to hide the preloader in the iframe hack for the balls on the about page*/
    /index/.test(url)&&parts.params.background&&(cached=cached.toString('utf-8').replace('<body>', '<body><style>.c022,.c0212{display: none}</style>'))
    res.end(cached)
  }).catch((err, str)=>{
    str='::ERROR:: '+err,
    res.end(str)
  })
}).listen(config.PORT||=3000, _=>{
  console.log(`Server listening on PORT ${config.PORT}`)
})