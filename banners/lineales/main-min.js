!function(e){"use strict";function t(){i=this}function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var r,o,a,i;t.prototype={constructor:t,debug:!1,dom:{},trace:function(t){i.debug&&e.console&&e.console.log(t)},getTouch:function(){return void 0===a&&(a="ontouchstart"in e||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?!0:!1),a},getMobileOS:function(){var t=navigator.userAgent||navigator.vendor||e.opera;return t.match(/iPad/i)||t.match(/iPhone/i)||t.match(/iPod/i)?"iOS":t.match(/Android/i)||t.match(/Silk/i)?"Android":"unknown"},getBrowser:function(){if(void 0===o){var t="WebkitAppearance"in document.documentElement.style,n=!!e.opera||/opera|opr/i.test(navigator.userAgent);o=t?e.chrome?e.chrome&&e.chrome.webstore?"Chrome 14+":n?"Opera 14+":"Android 4+":"//"==/a/.__proto__?"Safari 5-":"Safari 6+ or other Webkit":n?"Opera 13-":e.sidebar?e.globalStorage?"Firefox 13-":"Firefox 14+":e.navigator.msPointerEnabled?"IE10+":document.all&&document.addEventListener&&!e.atob?"IE9":document.all&&!document.addEventListener?"IE8-":"unknown"}return o},timerStart:function(){r=(new Date).getTime()},getMilliseconds:function(){return(new Date).getTime()-r},getSeconds:function(){return.001*((new Date).getTime()-r)},timerStop:function(){var e=(new Date).getTime()-r;i.trace("seconds elapsed: "+.001*e)},preloadImages:function(e){function t(){o++;var e=.001*((new Date).getTime()-n);c.trace("image "+o+"/"+i.length+" loaded @ "+e),o===i.length&&a(r)}for(var n=(new Date).getTime(),r=[],o=0,a=function(){},i="object"!=typeof e?[e]:e,c=this,u=0;u<i.length;u++)r[u]=new Image,r[u].onload=t,r[u].onerror=t,r[u].src=i[u];return{done:function(e){a=e||a}}},qs:function(e,t){return(t||document).querySelector(e)},qsa:function(e,t){return(t||document).querySelectorAll(e)},targ:function(e){return"string"==typeof e?i.qs(e):e},makeVar:function(e,t,n){var r;return r=n?e.replace(/-(.)|_(.)/g,function(e,t,n){var r="";return t&&(r+=t.charAt(0).toUpperCase()+t.substring(1,t.length)),n&&(r+=n.toUpperCase()),r}):e.replace(/-/g,"_"),t[r]=document.getElementById(e),t[r]},makeVars:function(e,t,n,r){for(var o=e.length,a;o--;)a=i.makeVar(e[o],t,r),n.push(a)},getAllIdElements:function(e){for(var t=e.getElementsByTagName("*"),n=[],r=t.length;r--;)t[r].hasAttribute("id")&&n.push(t[r]);return n},getAllIds:function(e,t,n){for(var r=e.getElementsByTagName("*"),o=[],a="var ",c=n||"bu",u=r.length,s=0;u>s;s++)r[s].hasAttribute("id")&&(o.push(r[s].id),t&&(a+=r[s].id.replace(/-/g,"_")+" = "+c+".qs('#"+r[s].id+"')",s>-1&&(a+=",\n    ")));return t&&(a=a.replace(/,\s([^,]+)$/,"; $1"),i.trace(a)),o},makeVarsFromIds:function(e,t,n,r){var o=i.getAllIds(e||document);i.makeVars(o,t||i.dom,n||[],r)},recordStates:function(e){(!e||e.length<1)&&(e=i.getAllIdElements(document));for(var t=e.length;t--;)e[t].cl="",e[t].cl+=e[t].className},resetStates:function(e,t){(!e||e.length<1)&&(e=i.getAllIdElements(document));for(var n=e.length;n--;)void 0!==e[n].cl?e[n].className=e[n].cl:i.trace("initial state not recorded for: "+e[n].id);if(t){var r=10*e.length;setTimeout(function(){t.apply()},r)}}},NodeList.prototype.forEach=Array.prototype.forEach;var c,u;e.addEventListener?(c=function(e,t,n,r){i.targ(e).addEventListener(t,n,r||!1)},u=function(e,t,n,r){i.targ(e).removeEventListener(t,n,r||!1)}):e.attachEvent&&(c=function(t,n,r){var o=i.targ(t);o["e"+n+r]=r,o[n+r]=function(){o["e"+n+r](e.event)},o.attachEvent("on"+n,o[n+r])},u=function(e,t,n){var r=i.targ(e);r.detachEvent("on"+t,r[t+n]),r[t+n]=null}),t.prototype.addListener=c,t.prototype.removeListener=u;var s;s=e.stopPropagation?function(e){e.stopPropagation(),e.preventDefault()}:function(e){e.returnValue=!1,e.cancelBubble=!0},t.prototype.stopPropagation=s;var l;l=e.requestAnimationFrame?function(t){return e.requestAnimationFrame(t)}:e.webkitRequestAnimationFrame?function(t){return e.webkitRequestAnimationFrame(t)}:e.MozRequestAnimationFrame?function(t){return e.MozRequestAnimationFrame(t)}:function(t){return e.setTimeout(t,17)},t.prototype.requestFrame=l;var m;m=e.cancelAnimationFrame?function(t){return e.cancelAnimationFrame(t)}:e.webkitCancelAnimationFrame?function(t){return e.webkitCancelAnimationFrame(t)}:e.MozCancelAnimationFrame?function(t){return e.MozCancelAnimationFrame(t)}:function(t){return e.clearTimeout(t)},t.prototype.cancelFrame=m;var d;d=e.getComputedStyle?function(t){return e.getComputedStyle(t)}:function(e){return i.targ(e).currentStyle},t.prototype.getStyle=d;var g,f,p;"classList"in document.documentElement?(g=function(e,t){return i.targ(e).classList.contains(t)},f=function(e,t){i.targ(e).classList.add(t)},p=function(e,t){i.targ(e).classList.remove(t)}):(g=function(e,t){return n(t).test(i.targ(e).className)},f=function(e,t){g(e,t)||(i.targ(e).className=i.targ(e).className+" "+t)},p=function(e,t){i.targ(e).className=i.targ(e).className.replace(n(t)," ")}),t.prototype.addClass=f,t.prototype.removeClass=p,t.prototype.hasClass=g,t.prototype.replaceClass=function(e,t,n){i.removeClass(e,t),i.addClass(e,n)},e.BannerUtils=t}(window);
var Banner = {

        init: function() {

                'use strict';

                var bu = new BannerUtils(); // utilities class

                // Debug mode. Comment this line for final publishing
                bu.debug = true;

                // Log all IDs and create variables. Comment this line for final publishing
                //bu.getAllIds(document, true);

                // Set up variables
                var ad_content = bu.qs('#ad_content'),
                    copy1_1 = bu.qs("#copy1_1"),
                    copy1_2 = bu.qs("#copy1_2"),
                    copy1_3 = bu.qs("#copy1_3"),
                    copy2_1 = bu.qs("#copy2_1"),
                    copy2_2 = bu.qs("#copy2_2"),
                    copy2_3 = bu.qs("#copy2_3"),
                    copy3_2 = bu.qs("#copy3_2"),
                    copy3_1 = bu.qs("#copy3_1"),

                    star1 = bu.qs("#star1"),
                    star2 = bu.qs("#star2"),
                    star3 = bu.qs("#star3"),
                    star4 = bu.qs("#star4"),

                    card_1 = bu.qs("#card_1"),
                    card_2 = bu.qs("#card_2"),
                    card_3 = bu.qs("#card_3"),
                    card_4 = bu.qs("#card_4"),

                    bar1_1 = bu.qs("#bar1_1"),
                    bar1_2 = bu.qs("#bar1_2"),

                    bar2_1 = bu.qs("#bar2_1"),
                    bar2_2 = bu.qs("#bar2_2"),
                    bar2_3 = bu.qs("#bar2_3"),
                    bar2_4 = bu.qs("#bar2_4"),
                    bar2_5 = bu.qs("#bar2_5"),

                    bar3_1 = bu.qs("#bar3_1"),
                    bar3_2 = bu.qs("#bar3_2"),

                    bar4_1 = bu.qs("#bar4_1"),
                    bar4_2 = bu.qs("#bar4_2"),
                    bar4_3 = bu.qs("#bar4_3"),

                    flecha = bu.qs("#flecha"),
                    logo_laptop = bu.qs("#logo_laptop"),
                    laptop = bu.qs("#laptop"),
                    promo = bu.qs("#promo"),
                    cta = bu.qs('#cta'),
                    logo = bu.qs('#logo');



                // Set banner dimensions
                var adWidth = 300,
                    adHeight = 250;



                ////////////////////////////////////////////////////// + UTILS //////////////////////////////////////////////////////

                function removeClass (obj , classToRemove){
                    for (var i = 0 ; obj.length > i; i++){
                        bu.removeClass(obj[i] , classToRemove);
                    }
                }

                ////////////////////////////////////////////////////// ANIMATION //////////////////////////////////////////////////////

                function frameStart() {
                    bu.timerStart();
                    frame0();
                }

                // this is the first frame on your animation
                function frame0() {

                    removeClass([copy1_1, copy1_2, copy1_3, star1, bar1_1, bar1_2],"alpha-0");
                   

                    TweenMax.set(laptop,{scale: 3.5, transformOrigin: "50% 40%"});

                    var tl = new TimelineMax({ onComplete: frame1 });

                    tl
                        .from(bar1_1, 0.5, { x: "100", opacity: 0 })
                        .from(star1, 0.2, { scale:0, opacity: 0 })
                        .to(star1, 0.1, { scale:2, opacity: 0 })
                        .from(copy1_1, 0.5, { x: "-100", opacity: 0 },0)
                        .from(copy1_2, 0.5, { x: "100", opacity: 0 },"-=0.5")
                        .to(bar1_1, 0.5, { width: 0, opacity: 0 },"-=0.3")
                        .from(copy1_3, 0.5, { x: "-100", opacity: 0 },"-=0.5")
                        .from(bar1_2, 0.7, { x: "500", opacity: 0 },"-=0.5")

                        .to(copy1_1, 0.3, { delay: 0.5 , x: "-10", opacity: 0 })
                        .to(copy1_2, 0.6, { x: "10", opacity: 0 })
                        .to(copy1_3, 0.5, { x: "-10", opacity: 0 },"-=0.3")
                        .to(bar1_2, 1, { x: "200", width: 0, opacity: 0 },"-=1");

                }



                function frame1() {


                    removeClass([promo, flecha, copy2_1 ,copy2_2 ,copy2_3 ,copy3_1 ,copy3_2 ,star2 ,star3 ,card_1 ,card_2 ,card_3 ,card_4 ,bar2_1 ,bar2_2 ,bar2_3 ,bar2_4 ,bar3_1, bar3_2],"alpha-0");

                    bu.removeClass(logo_laptop, "alpha-0");

                    TweenMax.from(bar2_1, 0.5, { x: "100", opacity: 0 });
                    TweenMax.to(bar2_1, 4, { width: 0, x:"-200" });
                    TweenMax.from(bar2_4, 7, { delay:1, x: "100", opacity: 0 });
                    TweenMax.to(bar2_4, 7, { delay:1, width: 0, x:"-200" });

                    var tl = new TimelineMax({ onComplete: frame2 });
                        tl
                        .from(copy2_1, 0.5, { x: "-100", opacity: 0 })
                        .from(copy2_2, 0.5, { x: "-100", opacity: 0 })
                        .from(bar2_2, 0.2, { x: "100", opacity: 0 },"-=0.1")
                        .from(star2, 0.2, { scale:0, opacity: 0 },"-=0.2")
                        .to(bar2_2, 0.2, { width: 0})
                        .to(star2, 0.1, { scale:2, opacity: 0 })
                        .from(bar2_3, 0.5, { x: "100", opacity: 0 })
                        .from(copy2_3, 0.5, { x: "-100", opacity: 0 },"-=1.5")
                        .from([card_1,card_2,card_3,card_4], 0.5, { delay: 0.3, opacity: 0 },"-=1.5")
                        .to(card_2, 0.5, { rotation: "30" ,x: 5, y: "-5", transformOrigin: "50% 50%", ease: Expo.EaseOut},"-=0.1")
                        .to(card_3, 0.5, { rotation: "60" ,x: 10, y: "-7", transformOrigin: "50% 50%", ease: Expo.EaseOut},"-=0.1")
                        .to(card_4, 0.5, { rotation: "90" ,x: 15, y: "-9", transformOrigin: "50% 50%", ease: Expo.EaseOut},"-=0.1")
                        .to(laptop,0.75,{delay: 0.5 , scale: 0.85, transformOrigin: "50% 40%", ease: Circ.EaseInOut},"-=0.5")
                        .from([bar2_5], 0.5, { opacity: 0, x: "-200" , ease: Expo.EaseOut},"-=1.8")
                        .to(copy2_1, 0.5, { x: "-100", opacity: 0 })
                        .to(copy2_2, 0.5, { x: "100", opacity: 0 })
                        .to(copy2_3, 0.5, { x: "-100", opacity: 0 },"-=0.3")
                        .to(bar2_3, 1, { x: "-200", width: 0, opacity: 0 },"-=0.5")
                        .from(copy3_1, 0.5, { x: "-100", opacity: 0 },"-=0.5")
                        .from(copy3_2, 0.5, { x: "100", opacity: 0 },"-=0.5")

                        .from(flecha, 1, { x: "-300"})

                        .from(promo, 0.5, { x: "-10", opacity: 0 },"-=0.5")

                        .set([card_1,card_2,card_3,card_4], { opacity: 0 })
                        .from(logo_laptop, 0.2, { opacity: 0 },"-=0.5")

                        .from(bar3_1, 1, { x: "1000", width: 1000, opacity: 0 },"-=2")
                        .from(bar3_2, 1, { x: "-1000", width: 0, opacity: 0 },"-=1")
                        .to(bar3_2, 0.5, { x: "110", width: 0})
                        .from(star3, 0.5, { opacity: 0 },"-=0.3")
                        .to(bar3_1, 0.5, { width: 0})
                        .to(star3, 0.3, { opacity: 0, scale:2 },"-=0.8")
                        .to(bar2_5, 0.5, { x: "110", width: 0 ,ease: Circ.EaseInOut},"-=0.7")

                        .to(flecha, 1, { delay: 0.5, x: "300"})
                        .to(promo, 0.5, { x: "10", opacity: 0 },"-=1")

                        .to([copy3_1, copy3_2], 0.5, { opacity:0},"-=1");
                    }


                function frame2() {


                    removeClass([ copy4_1, copy4_2, copy4_3, star4, cta,  bar4_1, bar4_2 ],"alpha-0");

                    var tl2 = new TimelineMax();
                        tl2
                            .set(bar2_1, { x: "-300", y: "0", opacity: 1, width: 100})
                            .to(bar2_1, 2, { delay: 0.5, width: 0, x:"120" });

                    TweenMax.to(bar4_1, 0.5, { x: "100", width: 0, opacity: 0 });


                    TweenMax.set(bar4_2, { y: "-16"});
                    TweenMax.from(bar4_2, 0.7, { x: "220", width: 0, opacity: 0 });

                    TweenMax.set(bar2_2, { y: "100", x: 200, opacity: 1 ,width: 1000});
                    TweenMax.to(bar2_2, 1, { x:"-30" , width: 0, opacity: 0.5});

                    var tl = new TimelineMax({ onComplete: frameStop });
                       tl
                        .from(copy4_1, 0.5, { x: "-100", opacity: 0 },"-=0.5")
                        .from(copy4_2, 0.5, { x: "100", opacity: 0 },"-=0.5")
                        .from(copy4_3, 0.5, { x: "100", opacity: 0 },"-=0.5")

                        .from(bar4_1, 0.2, { x: "-300", opacity: 0 },"-=0.3")
                        .from(star4, 0.3, { opacity: 0, scale: 0 },"-=0") 
                        .to(star4, 0.5, { opacity: 0, scale: 2 },"-=0.3")
                        .from(cta, 0.5, { opacity: 0 });
                }

                function frameStop() {
                    enableRollover();
                    bu.timerStop();
                }


                ////////////////////////////////////////////////////// EVENT HANDLERS //////////////////////////////////////////////////////

                function onAdClick(e) {
                    EB.clickthrough();
                }

                function onAdHover(e) {
                    // hover state
                    TweenMax.to(cta, 0.2, {
                        boxShadow: "0px 0px 5px 1px #999999",
                        backgroundColor:"#ffffff"
                    });

                }

                function onAdOut(e) {
                    // normal state
                    TweenMax.to(cta, 0.2, {
                        boxShadow: "0px 0px 0px 0px transparent",
                        backgroundColor:"transparent"
                    });
                }

                function adClickThru() {
                    bu.addListener(ad_content, 'click', onAdClick);
                }

        function enableRollover() {
            bu.addListener(ad_content, 'mouseenter', onAdHover);
            bu.addListener(ad_content, 'mouseleave', onAdOut);
        }

        function disableRollover() {
            bu.removeListener(ad_content, 'mouseenter', onAdHover);
            bu.removeListener(ad_content, 'mouseleave', onAdOut);
        }


        ////////////////////////////////////////////////////// INIT //////////////////////////////////////////////////////

        adClickThru();
        frameStart();
    }
};

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, Banner.init);
    } else {
        Banner.init();
    }
}

window.onload = function() {
    initEB();
};