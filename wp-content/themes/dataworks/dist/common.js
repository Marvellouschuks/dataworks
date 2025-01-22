(function(){
  function loop(cb) {
    let interval=setInterval(_=>cb(interval), 300)
  }

  let asBg=/background/.test(location.search), draped, path=location.pathname, DOMLoaded, slice=(arg, ...n)=>[].slice.call(arg, ...n), qS=(el,str,all,res)=>(typeof str==='boolean'&&(all=str), typeof el=='string'&&(str=el,el=0), res=(el||document)['querySelector'+'All'.repeat(all)](str),all?slice(res):res),
  busy, page, loader;
  function community() {
    if(busy) return;
    if(!page.parentNode) return;
    busy=!0;
    fetch('page.html').then(res=>res.text()).then(html=>{
      busy=0, loader.classList.add('opacity-0','duration-500','ease-out','pointer-events-none'),
      page.parentNode.innerHTML = html, page.remove()
    })
  }
  /**perpetual listener to setup the community page after back-forward navigations to and from it*/
  loop(_=>(loader=qS('.c022'))&&(/community/.test(location.pathname)?(page=qS('.page'))&&community()
    :asBg&&(loader.classList.add('duration-300', 'ease-out'), loader.style.opacity='0', draped?.classList.add('loaded')))),

  window.addEventListener('DOMContentLoaded', _=>{
    DOMLoaded=!0;
    let img=new Image(), loaded, a, nav_btns;
    loop(itrvl=>{ (a=qS('a.c0210 svg',!0)).length&&(clearInterval(itrvl), img.onload()) }),
    img.src='/wp-content/themes/dataworks/images/DataWorks.svg', img.onload=(news)=>{
      if(!a?.length||loaded) return;
      loaded=!0, img.style.width='150px',
      draped=qS('.draped'), [].forEach.call(a, (e, i)=>{
        if(!e) return;
        e.replaceWith(img.cloneNode()), i&&(asBg||draped.classList.add('loaded'))
      }),
      /*hide news section initially and onresize for the home page */
      (window.onresize=_=>loop(itrvl=>['.c02151'].concat(asBg?'.c02119':[])
        .forEach(str=>(news=qS(str,!0)).length
        &&(nav_btns=qS('button.c02124',!0))[3]&&(asBg?!nav_btns[3].click():!0)
        &&(clearInterval(itrvl), news[news.length-1].classList.add('hidden')))
      ))()
    }
  });
    /**a listener to detect URL changes for the about page*/
    let done, btns, reset, txts=[
      "High-performance compute resources for machine\nlearning and AI model training. Burst capacity for\nintensive workloads. Access cutting-edge GPU\nclusters and distributed computing frameworks\noptimized for deep learning, with automated scaling\nto handle varying training demands and dataset sizes.",
      "Secure hosting for business-critical applications\nand data processing. Guaranteed uptime with dedicated\nresources. Our enterprise-grade infrastructure\nensures seamless scalability and\ncompliance with industry standards, while dedicated\nsupport teams provide 24/7 monitoring and incident response.",
      "Optimized infrastructure for blockchain operations,\nvalidator nodes, and mining. Dynamic allocation based\non market conditions. Our specialized hardware\nconfigurations maximize hash rates while\nminimizing energy consumption, supported by\nredundant power systems and low-latency network connections to major crypto networks."
    ];
    loop((itrvl, el, toText)=>{
      toText=(index, clear)=>{
        if(!el) return;
        let lines=qS(el,'.line',!0),bool,
        txt=(line, flag)=>{ if(!line) return; (line=line.firstElementChild).classList.add('duration-500', 'ease-out'), line.style.transform=`translate(0px, ${flag?7:''}0%)` },
        texts=txts[index].split(/\n/), once, asTxt=cb=>texts.forEach((text,i)=>lines[i].firstElementChild.textContent=(cb&&cb(lines[i]), text));
        if(clear) return asTxt();
        texts.forEach((_,i,el)=>{
          txt(lines[i],!0),/**translate the lines out of view */
          lines[i].firstElementChild.ontransitionend=ev=>{
            if(reset) return;
            once||=!asTxt(line=>txt(line)/**translate the lines into view */)
          }
        })
      }, /about/.test(path=location.pathname)?done||=!about():done=0;
      if(path==='/') (/built for/i.test((el=qS('.c02132'))?.textContent)
        ? (reset&&toText(0, !0),/**reset after navigating to section*/ btns=qS(el,'button',!0), el.onclick=(ev,btn)=>(btn=ev.target).tagName=='BUTTON'&&toText(btns.indexOf(btn)), reset=0)
        : (reset=!0));
    });
    function about(){
      loop((itrvl,ch)=>{ (ch=qS('.route-container>div')?.children)?.length&&(
        clearInterval(itrvl), qS(ch[0],'div').remove(), ch[1].remove(),
        fetch('page.html').then(res=>res.text()).then(html=>ch[0].innerHTML=html)
      )})
    }
  })()