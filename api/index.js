let fs = require('fs'), path = require('path');

module.exports = function(request, response, next) {
  let url = new URL(`http://${request.url}`);
  fs.readFile(path.join('./api/', url.pathname+'.json'), (err, buffer)=>{
    if(err) buffer="{}", console.log('::ERROR::', err);
    response.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json'
   }), response.end(buffer)
  })
}