(function(){
  function loop(cb, t) {
    let interval=setInterval(_=>cb(interval), 200)
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
  let loaded, temp, lds=[], nav_btns, frame, _frame=document.createElement('iframe'), done=false;
  _frame.style.cssText='position: fixed;height:100%;width:100%;pointer-events:none', _frame.src='/?background=true&light=true', _frame.id='__preload',
  _frame.className='opacity-0 large:opacity-100',
  /**perpetual listener to setup the pages tested for  after back-forward navigations to and from them*/
  loop(from=>{
    asBg||(done||=(document.body?.prepend(_frame), !0)),/**preload the iframe */
    /**remove cookie banner */
    window.CybotCookiebotDialog?.remove(),
    _frame.style.display = /infrastructure/.test(location.pathname) ? (window.article&&window.article.firstElementChild!==_frame&&article.prepend(_frame), 'block'):'none',
    
    (temp=qS('.c0212'), (lds[0]=loader=qS('.c022'))&&[0,4].forEach((n,i)=>lds[++i]=qS(lds[0], `.c0${n+23}`)),
      /**is true when navigating to a different page */
      (from=path!==location.pathname)&&(lds=[temp]), temp&&loader) &&(/community/.test(location.pathname)
    ? (page=qS('.page'))&&community()
    : (asBg&&(loader.style.opacity='0', qS('header')?.classList.add('hidden')),
      /infrastructure/.test(location.pathname)&&((entry=qS('.route-container>div')?.children)?.length&&qS(entry[0],'div')&&about(),
      (frame=_frame/*qS('iframe')*/.contentDocument)&&(nav_btns=qS(frame, 'button.c02124',!0))[3]&&(nav_btns[3].click()),
      loaded||(lds.forEach(ld=>['persist','duration-300'].forEach((cl, i)=>ld.classList[i?'remove':'add'](cl))), (loaded=innerWidth>=1085?nav_btns&&nav_btns[3]&&!qS(frame,'.c0212').classList.contains('c0211'):!0)
        &&(lds.forEach(ld=>ld.classList.add('duration-300')), setTimeout(_=>lds.forEach(ld=>ld.classList.remove('persist')), 1.2e3+(from&&300))))
      )||(loaded=0)))
  }),
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
      (rmv[0]=qS('[style*="--speed"]'))&&(rmv[1]=qS('.c02119'), asBg||(rmv[1]=null), rmv.forEach(n=>n&&n.classList.add('hidden'))),
      asBg||/\//.test(location.pathname)&&(el=qS(`.page.pageHome h2`)?.parentNode)&&!/in our upcoming/i.test(el.textContent)&&(busy||=!!fetch('page.html').then(res=>res.text())
      .then(html=>{
        el.innerHTML+=html, busy=0, el.nextElementSibling?.remove(), animations.addRippleAnimations(),
        el.parentNode.style.display='block'
      }))
    }))()
  });
    /**a listener to detect URL changes for the about page*/
    let btns, reset, txts=[
      "High-performance compute resources for machine\nlearning and AI model training. Burst capacity for\nintensive workloads. Access cutting-edge GPU\nclusters and distributed computing frameworks\noptimized for deep learning, with automated scaling\nto handle varying training demands and dataset sizes.",
      "Secure hosting for business-critical applications\nand data processing. Guaranteed uptime with dedicated\nresources. Our enterprise-grade infrastructure\nensures seamless scalability and\ncompliance with industry standards, while dedicated\nsupport teams provide 24/7 monitoring and incident response.",
      "Optimized infrastructure for blockchain operations,\nvalidator nodes, and mining. Dynamic allocation based\non market conditions. Our specialized hardware\nconfigurations maximize hash rates while\nminimizing energy consumption, supported by\nredundant power systems and low-latency network connections to major crypto networks."
    ],
    first, socials = document.createElement('div'); props={className:'lg:text-left text-center socials space-x-6 -mt-10 lg:mt-10', 'innerHTML':`<a target="_blank" class="inline-block" href="javascript:void(0)"><img src="/wp-content/themes/dataworks/images/etherscan.png" class="w-7"></a>
<a target="_blank" class="inline-block" href="https://telegram.me/DataWorksEntry"><img src="/wp-content/themes/dataworks/images/telegram.png" class="w-7"></a>
<a target="_blank" class="inline-block" href="javascript:void(0)"><img src="/wp-content/themes/dataworks/images/dextools.png" class="w-7"></a>
<a target="_blank" class="inline-block" href="https://x.com/DataWorksUAE"><img src="/wp-content/themes/dataworks/images/x.png" class="w-7"></a>
`}; Object.keys(props).forEach(key=>socials[key]=props[key]), socials.style.cssText='pointer-events:all';

    loop((itrvl, el, toText,_el)=>{
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
      /**remove mouse icon button on pages where it is not needed */
      let btn_svg;
      /privacy-policy|contact-us/.test(location.pathname)&&(btn_svg=qS('button>svg',!0)).length&&btn_svg[btn_svg.length-1]?.parentNode.classList.add('hidden'),
      /**remove whitespace to the left of the form on the contact page*/
      /contact-us/.test(location.pathname)&&qS('form')?.parentNode.previousElementSibling.classList.add('hidden');
      if(location.pathname==='/') (first=_el=innerWidth>=1085?qS('.c02154')||qS('.c02134')||qS('.c02132'):qS('.c0289')||qS('.c0291'))&&((/built for/i.test((el=qS('.c02132'))?.textContent)
        ? (reset&&toText(0, !0),/**reset after navigating to section*/ btns=qS(el,'button',!0), el.onclick=(ev,btn)=>(btn=ev.target).tagName=='BUTTON'&&toText(btns.indexOf(btn)), reset=0)
        : reset=!0), window.atPageEnd=!reset,
        (first=/decentralizing/i.test(_el?.textContent))&&!_el.lastElementChild.classList.contains('socials')&&(socials=_el.appendChild(socials))),
        socials.classList[first?'add':'remove']('persist');
    });
  })()