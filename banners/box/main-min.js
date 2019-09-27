var adWidth = 300,
ad_content = document.getElementById("ad_content");  

    function frame0() {


       var tl = new TimelineMax({ onComplete: frameStop });
       tl.set('#ad_content', { autoAlpha: 1 })
        .to('#blackCover', 1, { autoAlpha: 0})
        .from('#vsaldo',0.5,{x:-adWidth,ease:Sine.easeInOut})
        .from('#vshollo',0.5,{x:adWidth,ease:Sine.easeInOut})
        .from('#vs',.2,{scale:0,ease:Back.easeOut})
        .from('#unframed',.5,{autoAlpha:0})
        .to(['#aldovs','#unframed'],.5,{autoAlpha:0},"+=1")
        .from('#device',1,{autoAlpha:0,ease:Sine.easeOut})
        
        
        .to('#device',.5,{y:"-=60",ease:Sine.easeOut},"+=1")
       
        .from(['#streaming','#samsung_vr_logo'],.3,{autoAlpha:0},"-=.5")
        
        
        .from('#cta',.3,{autoAlpha:0},"-=.5")
        .from('#aldo',4,{x:"-=120",force3D:false},"-=8")
        .from('#hollo',4,{x:"+=120",force3D:false},"-=8")
    }

function onAdHover(e) {
      TweenMax.set('#cta',{backgroundColor:"#ccb54c"});
      TweenMax.set('#cta_path',{fill:"black"});

}

function onAdOut(e) {
      TweenMax.set('#cta',{backgroundColor:"transparent"});
      TweenMax.set('#cta_path',{fill:"white"});
}

function frameStop() {
      enableRollover();
}

function enableRollover() {
      ad_content.addEventListener('mouseenter', onAdHover);
      ad_content.addEventListener('mouseleave', onAdOut);
}

frame0();
