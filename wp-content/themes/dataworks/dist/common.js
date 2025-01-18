(function(){
  function loop(cb) {
    let interval=setInterval(_=>cb(interval), 300)
  }

  let slice=(arg, ...n)=>[].slice.call(arg, ...n), qS=(el,str,all,res)=>(typeof str==='boolean'&&(all=str), typeof el=='string'&&(str=el,el=0), res=(el||document)['querySelector'+'All'.repeat(all)](str),all?slice(res):res);
  window.addEventListener('DOMContentLoaded', _=>{
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
    let done;
    loop(itrvl=>{
      /about/.test(location.pathname)?done||=!about():done=0
    })
    let once;
    function about(ch){
      loop((itrvl,ch)=>{ (ch=qS('.route-container>div')?.children)?.length&&(
        clearInterval(itrvl), qS(ch[0],'div').remove(), ch[1].remove(),
        fetch('page.html').then(res=>res.text()).then(html=>ch[0].innerHTML=html)
      )})
    }
    
  })()