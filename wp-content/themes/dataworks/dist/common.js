(function(){
  function loop(cb, t) {
    let interval=setInterval(_=>cb(interval), t||300)
  }

  let entry, asBg=/background/.test(location.search), draped, path=location.pathname, DOMLoaded, slice=(arg, ...n)=>[].slice.call(arg, ...n), qS=(el,str,all,res)=>(typeof str==='boolean'&&(all=str), typeof el=='string'&&(str=el,el=0), res=(el||document)['querySelector'+'All'.repeat(all)](str),all?slice(res):res),
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

  function about(){
    if(busy) return;
    if(!entry[0].firstElementChild.parentNode) return;
    busy=!0, fetch('page.html').then(res=>res.text()).then(html=>{
      qS(entry[0],'div').remove(), entry[1].remove(),
      entry[busy=0].innerHTML=html
    })
  }
  let loaded, temp, lds=[], nav_btns, frame;
  /**perpetual listener to setup the pages tested for  after back-forward navigations to and from them*/
  loop(from=>{
    (temp=qS('.c0212'), (lds[0]=loader=qS('.c022'))&&[0,4].forEach((n,i)=>lds[++i]=qS(lds[0], `.c0${n+23}`)),
      /**is true when navigating to a different page */
      (from=path!==location.pathname)&&(lds=[temp]), temp&&loader) &&(/community/.test(location.pathname)
    ? (page=qS('.page'))&&community()
    : (asBg&&(loader.style.opacity='0'),
      /about/.test(location.pathname)&&((entry=qS('.route-container>div')?.children)?.length&&qS(entry[0],'div')&&about(),
      (frame=qS('iframe')?.contentDocument)&&(nav_btns=qS(frame, 'button.c02124',!0))[3]&&nav_btns[3].click(),
      loaded||(lds.forEach(ld=>ld.classList.add('persist','no-transit')), nav_btns&&nav_btns[3]&&(loaded=!qS(frame,'.c0212').classList.contains('c0211'))&&setTimeout(_=>lds.forEach(ld=>ld.classList.remove('persist','no-transit')), 1e3+(from&&800)))
    )||(loaded=0)))
  }, 0),
  window.addEventListener('DOMContentLoaded', _=>{
    DOMLoaded=!0;
    let img=new Image(), loaded, a;
    loop(itrvl=>{ (a=qS('a.c0210 svg',!0)).length&&(clearInterval(itrvl), img.onload()) }),
    img.src='/wp-content/themes/dataworks/images/DataWorks.svg', img.onload=(news)=>{
      if(!a?.length||loaded) return;
      loaded=!0, img.style.width='150px',
      draped=qS('.draped'), [].forEach.call(a, (e, i)=>{
        if(!e) return;
        e.replaceWith(img.cloneNode()), i&&draped.classList.add('loaded')
      })
    }
    /*hide news section initially and onresize for the home page */
    (window.onresize=_=>loop((itrvl, el, rmv=[])=>{
      (rmv[0]=qS('[style*="--speed"]'))&&(rmv[1]=qS('.c02119'))&&(asBg||(rmv[1]=null), rmv.forEach(n=>n&&n.classList.add('hidden'))),
      (el=qS(`.page.pageHome h2`)?.parentNode)&&!/total supply/i.test(el.textContent)&&(busy||=!!fetch('page.html').then(res=>res.text())
      .then(html=>{
        console.log('::DATA TOKEN::', el),
        el.innerHTML+=html, animations?.addRippleAnimations(), busy=0, el.nextElementSibling.remove(),
        el.parentNode.style.display='block'
      }))
    }))()
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
      };
      if(path==='/') (/built for/i.test((el=qS('.c02132'))?.textContent)
        ? (reset&&toText(0, !0),/**reset after navigating to section*/ btns=qS(el,'button',!0), el.onclick=(ev,btn)=>(btn=ev.target).tagName=='BUTTON'&&toText(btns.indexOf(btn)), reset=0)
        : (reset=!0));
    });
  })()