let e,t;const c=document.querySelector(".slider");c.addEventListener("touchstart",t=>{console.log(e=t.changedTouches[0].clientX)}),c.addEventListener("touchend",c=>{t=c.changedTouches[0].clientX,function(){if(e-t>100){let e=document.querySelector('input[name="slide"]:checked').nextElementSibling;e&&(e.checked=!0)}else if(e-t<-100){let e=document.querySelector('input[name="slide"]:checked').previousElementSibling;e&&(e.checked=!0)}}()});
//# sourceMappingURL=index.aab0ae08.js.map