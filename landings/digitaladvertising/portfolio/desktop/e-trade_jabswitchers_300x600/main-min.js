var Banner = {

  init: function() {

    'use strict';

    // Set banner vars
    var adContent = document.getElementById("ad_content"),
      adWidth = 300,
      adHeight = 600,
      tl = new TimelineMax({onComplete:adDoneHandler}),
      done = false,
      del;


    ////////////////////////////////////////////////////// HELPERS //////////////////////////////////////////////////////

    // Check for IE 9 or earlier
    function preIE10Check() {
      if (window.attachEvent && !window.navigator.msPointerEnabled) {
        console.log('IE 9 or below detected.');
        return true;
      } else {
        console.log('This browsers is not IE 9 or below. 001');
        return false;
      }
    }


    ////////////////////////////////////////////////////// ANIMATION //////////////////////////////////////////////////////

    function frameStart() {
      if(!preIE10Check()){
        frame0();
      } else {
        TweenMax.set(backup, {className:'backup'});
      }
    }

    // this is the first frame of your animation
    function frame0(){
      init();
      del = 0;

      // TweenMax.set(leftarrow,{left:-43});
      // TweenMax.set(rightarrow,{left:266});

      tl.to([frame1blocker,legal], .4, {opacity:1}, "+=4")
        .to([leftarrow,rightarrow], .5, {opacity:1, ease:Sine.easeInOut})
        .to(leftarrow, .25, {left:-33, ease:Sine.easeInOut})
        .to(rightarrow, .25, {left:270, ease:Sine.easeInOut}, "-=.25")
        .to(logo, .4, {opacity:1}, "-=.2")
        .from(text1, .4, {top:"-=10"})
        .to(text1, .4, {opacity:1}, "-=0.4")
        .to(text1, .4, {opacity:0}, "+=3")
        .to([eftext1,eftext2], .4, {opacity:1})
        .from([eftext1,eftext2], .4, {top:"-=10"}, "-=.4")
        .to(cta, .4, {opacity:1}, "-=.1")
        .from(cta, .4, {top:"-=10"}, "-=.4")
        ;
    }



    ////////////////////////////////////////////////////// EVENT HANDLERS //////////////////////////////////////////////////////

    function onAdClick(e) {
      window.open(window.clickTag);
    }

   function onAdHover(e) {
      if(done){
        TweenMax.to(ctabg, .3, {scale:1.1});
      }
    }

    function onAdOut(e) {
      TweenMax.to(ctabg, .3, {scale:1});
    }

    function adInteractionListeners() {
      if (adContent.addEventListener) {
        adContent.addEventListener('click', onAdClick, false);
        adContent.addEventListener('mouseover', onAdHover, false);
        adContent.addEventListener('mouseout', onAdOut, false);
      } else {
        adContent.attachEvent('onclick', onAdClick, false);
        adContent.attachEvent('onmouseover', onAdHover, false);
        adContent.attachEvent('onmouseout', onAdOut, false);
      }
    }

    function adDoneHandler() {
      done = true;
    }


    ////////////////////////////////////////////////////// INIT //////////////////////////////////////////////////////

    adInteractionListeners();
    frameStart();
  }
};

window.onload = function(){
  Banner.init();
};
