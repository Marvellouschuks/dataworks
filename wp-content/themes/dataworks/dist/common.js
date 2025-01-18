(function(){
  function loop(cb) {
    let interval=setInterval(_=>cb(interval), 300)
  }

  let DOMLoaded, slice=(arg, ...n)=>[].slice.call(arg, ...n), qS=(el,str,all,res)=>(typeof str==='boolean'&&(all=str), typeof el=='string'&&(str=el,el=0), res=(el||document)['querySelector'+'All'.repeat(all)](str),all?slice(res):res);
  window.addEventListener('DOMContentLoaded', _=>{
      DOMLoaded=!0;
      let img=new Image(), loaded, a;
      loop(itrvl=>{ (a=qS('a.c0210 svg',!0)).length&&(clearInterval(itrvl), img.onload()) }),
      img.src='/wp-content/themes/dataworks/images/DataWorks.svg', img.onload=(el, news)=>{
        if(!a?.length||loaded) return;
        loaded=!0, img.style.width='150px',
        el=qS('.draped'), [].forEach.call(a, (e, i)=>{
          if(!e) return;
          e.replaceWith(img.cloneNode()), i&&el.classList.add('loaded')
        }),
        /*hide news section initially and onresize for the home page */
        (window.onresize=_=>loop(itrvl=>['[data-stage="3"]', '.c02115']
          .forEach(str=>(news=qS(str,!0)).length&&(clearInterval(itrvl), news[news.length-1].classList.add('hidden')))
        ))()
      }
    });
    /**a listener to detect URL changes for the about page*/
    let done, add, once, aside, btns;
    (aside=document.createElement('aside')).className='text-sm pointer-events-none font-sans absolute opacity-0 duration-500 ease-out right-0 -mb-5 text-gray-300 bottom-0',
    aside.innerHTML=`<p class='opacity-0 duration-300 ease-out opacity-100 relative'>High-performance compute resources for machine learning and AI model training. Burst capacity for intensive workloads. Access cutting-edge GPU clusters and distributed computing frameworks optimized for deep learning, with automated scaling to handle varying training demands and dataset sizes.</p><p class='opacity-0 duration-300 ease-out absolute top-0'>Secure hosting for business-critical applications and data processing. Guaranteed uptime with dedicated resources. Our enterprise-grade infrastructure ensures seamless scalability and compliance with industry standards, while dedicated support teams provide 24/7 monitoring and incident response.</p><p class='opacity-0 duration-300 ease-out absolute top-0'>Optimized infrastructure for blockchain operations, validator nodes, and mining. Dynamic allocation based on market conditions. Our specialized hardware configurations maximize hash rates while minimizing energy consumption, supported by redundant power systems and low-latency network connections to major crypto networks.</p>`;
    loop((path, el, toggle)=>{
      /about/.test(path=location.pathname)?done||=!about():done=0,
      path==='/'&&(/built for/i.test((el=qS('.c02132'))?.textContent)
      ? (btns||=qS(el,'button',!0), el.onclick=(ev,btn)=>(btn=ev.target).tagName=='BUTTON'&&qS(aside,'p',!0)
          .forEach((e,i)=>e.classList[i===btns.indexOf(btn)?'add':'remove']('opacity-100')), add=!0, el.lastElementChild!==aside&&(aside=el.appendChild(aside)))
      : add=0/*to allow adding to HTML once until navigating back to it*/, setTimeout(_=>aside.classList[add?'add':'remove']('opacity-90'), 100))
    });
    function about(ch){
      loop((itrvl,ch)=>{ (ch=qS('.route-container>div')?.children)?.length&&(
        clearInterval(itrvl), qS(ch[0],'div').remove(), ch[1].remove(),
        fetch('page.html').then(res=>res.text()).then(html=>ch[0].innerHTML=html)
      )})
    }
    
  })()