!function(e){"use strict";function t(){i=this}function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var r,o,a,i;t.prototype={constructor:t,debug:!1,dom:{},trace:function(t){i.debug&&e.console&&e.console.log(t)},getTouch:function(){return"undefined"==typeof a&&(a="ontouchstart"in e||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),a},getMobileOS:function(){var t,n=navigator.userAgent||navigator.vendor||e.opera;return t=n.match(/iPad/i)||n.match(/iPhone/i)||n.match(/iPod/i)?"iOS":n.match(/Android/i)||n.match(/Silk/i)?"Android":"unknown"},getBrowser:function(){if("undefined"==typeof o){var t="WebkitAppearance"in document.documentElement.style,n=!!e.opera||/opera|opr/i.test(navigator.userAgent);o=t?e.chrome?e.chrome&&e.chrome.webstore?"Chrome 14+":n?"Opera 14+":"Android 4+":"//"==/a/.__proto__?"Safari 5-":"Safari 6+ or other Webkit":n?"Opera 13-":e.sidebar?e.globalStorage?"Firefox 13-":"Firefox 14+":e.navigator.msPointerEnabled?"IE10+":document.all&&document.addEventListener&&!e.atob?"IE9":document.all&&!document.addEventListener?"IE8-":"unknown"}return o},timerStart:function(){r=(new Date).getTime()},getMilliseconds:function(){return(new Date).getTime()-r},getSeconds:function(){return.001*((new Date).getTime()-r)},timerStop:function(){var e=(new Date).getTime()-r;i.trace("seconds elapsed: "+.001*e)},preloadImages:function(e){function t(){o++;var e=.001*((new Date).getTime()-n);c.trace("image "+o+"/"+i.length+" loaded @ "+e),o===i.length&&a(r)}for(var n=(new Date).getTime(),r=[],o=0,a=function(){},i="object"!=typeof e?[e]:e,c=this,u=0;u<i.length;u++)r[u]=new Image,r[u].onload=t,r[u].onerror=t,r[u].src=i[u];return{done:function(e){a=e||a}}},qs:function(e,t){return(t||document).querySelector(e)},qsa:function(e,t){return(t||document).querySelectorAll(e)},targ:function(e){var t;return t="string"==typeof e?i.qs(e):e},makeVar:function(e,t,n){var r;return r=n?e.replace(/-(.)|_(.)/g,function(e,t,n){var r="";return t&&(r+=t.charAt(0).toUpperCase()+t.substring(1,t.length)),n&&(r+=n.toUpperCase()),r}):e.replace(/-/g,"_"),t[r]=document.getElementById(e),t[r]},makeVars:function(e,t,n,r){for(var o,a=e.length;a--;)o=i.makeVar(e[a],t,r),n.push(o)},getAllIdElements:function(e){for(var t=e.getElementsByTagName("*"),n=[],r=t.length;r--;)t[r].hasAttribute("id")&&n.push(t[r]);return n},getAllIds:function(e,t,n){for(var r=e.getElementsByTagName("*"),o=[],a="var ",c=n||"bu",u=r.length,s=0;s<u;s++)r[s].hasAttribute("id")&&(o.push(r[s].id),t&&(a+=r[s].id.replace(/-/g,"_")+" = "+c+'.qs("#'+r[s].id+'")',s>-1&&(a+=",\n    ")));return t&&(a=a.replace(/,\s([^,]+)$/,"; $1"),i.trace(a)),o},makeVarsFromIds:function(e,t,n,r){var o=i.getAllIds(e||document);i.makeVars(o,t||i.dom,n||[],r)},recordStates:function(e){(!e||e.length<1)&&(e=i.getAllIdElements(document));for(var t=e.length;t--;)e[t].cl="",e[t].cl+=e[t].className},resetStates:function(e,t){(!e||e.length<1)&&(e=i.getAllIdElements(document));for(var n=e.length;n--;)"undefined"!=typeof e[n].cl?e[n].className=e[n].cl:i.trace("initial state not recorded for: "+e[n].id);if(t){var r=10*e.length;setTimeout(function(){t.apply()},r)}}},NodeList.prototype.forEach=Array.prototype.forEach;var c,u;e.addEventListener?(c=function(e,t,n,r){i.targ(e).addEventListener(t,n,r||!1)},u=function(e,t,n,r){i.targ(e).removeEventListener(t,n,r||!1)}):e.attachEvent&&(c=function(t,n,r){var o=i.targ(t);o["e"+n+r]=r,o[n+r]=function(){o["e"+n+r](e.event)},o.attachEvent("on"+n,o[n+r])},u=function(e,t,n){var r=i.targ(e);r.detachEvent("on"+t,r[t+n]),r[t+n]=null}),t.prototype.addListener=c,t.prototype.removeListener=u;var s;s=e.stopPropagation?function(e){e.stopPropagation(),e.preventDefault()}:function(e){e.returnValue=!1,e.cancelBubble=!0},t.prototype.stopPropagation=s;var m;m=e.requestAnimationFrame?function(t){return e.requestAnimationFrame(t)}:e.webkitRequestAnimationFrame?function(t){return e.webkitRequestAnimationFrame(t)}:e.mozRequestAnimationFrame?function(t){return e.mozRequestAnimationFrame(t)}:function(t){return e.setTimeout(t,17)},t.prototype.requestFrame=m;var l;l=e.cancelAnimationFrame?function(t){return e.cancelAnimationFrame(t)}:e.webkitCancelAnimationFrame?function(t){return e.webkitCancelAnimationFrame(t)}:e.mozCancelAnimationFrame?function(t){return e.mozCancelAnimationFrame(t)}:function(t){return e.clearTimeout(t)},t.prototype.cancelFrame=l;var d;d=e.getComputedStyle?function(t){return e.getComputedStyle(t)}:function(e){return i.targ(e).currentStyle},t.prototype.getStyle=d;var f,g,p;"classList"in document.documentElement?(f=function(e,t){return i.targ(e).classList.contains(t)},g=function(e,t){i.targ(e).classList.add(t)},p=function(e,t){i.targ(e).classList.remove(t)}):(f=function(e,t){return n(t).test(i.targ(e).className)},g=function(e,t){f(e,t)||(i.targ(e).className=i.targ(e).className+" "+t)},p=function(e,t){i.targ(e).className=i.targ(e).className.replace(n(t)," ")}),t.prototype.addClass=g,t.prototype.removeClass=p,t.prototype.hasClass=f,t.prototype.replaceClass=function(e,t,n){i.removeClass(e,t),i.addClass(e,n)},e.BannerUtils=t}(window);
var Banner = {

    init: function() {

        'use strict';

        var bu = new BannerUtils(); // utilities class

        // Set up variables
        var ad_content = bu.qs('#ad_content'),
            telefono = bu.qs('#telefono'),
            tarjeta = bu.qs('#tarjeta'),
            precio = bu.qs('#precio'),
            txt1_1 = bu.qs('#txt1_1'),
            txt2_1 = bu.qs('#txt2_1'),
            txt2_2 = bu.qs('#txt2_2'),
            txt3_1 = bu.qs('#txt3_1'),
            txt3_2 = bu.qs('#txt3_2'),
            txt4_1 = bu.qs('#txt4_1'),
            txt4_2 = bu.qs('#txt4_2'),
            cta_box = bu.qs('#cta_box'),
            cta = bu.qs('#cta'),
            backup = bu.qs('#backup');

        // Check for IE 9 or earlier
        function preIE10Check() {
            if (window.attachEvent && !window.navigator.msPointerEnabled) {
                return true;
            } else {
                return false;
            }
        }


        ////////////////////////////////////////////////////// ANIMATION //////////////////////////////////////////////////////

        function frameStart() {
            if (!preIE10Check()) {
                frame0();
            } else {
                bu.addClass(backup, 'backup');
                bu.removeClass(ad_content, 'invisible');
            }
        }

        // this is the first frame on your animation
        function frame0() {
            bu.removeClass(ad_content, 'invisible');
            bu.removeClass(cta, 'alpha-0');
            TweenLite.set(cta_box, { transformOrigin: '50% 50%' });


            var tl = new TimelineMax({ onComplete: frameStop });
            tl
                .from(txt1_1, 0.25, { autoAlpha: 0 })
                .to(txt1_1, 0.25, { delay: 1.4, autoAlpha: 0 })
                .staggerFrom([txt2_1, txt2_2], 0.5, { autoAlpha: 0 }, 0.5)
                .to(txt2_2, 2, { delay: 0.1, x: 50, ease: Power1.easeIn},'-=0.55')
                .set(precio, {autoAlpha: 1})
                .from(tarjeta, 0.4, { rotation: 20, top: '-150', x: 50},'-=0.7')
                .to(tarjeta, 0.25, { x: 100},'-=0.1')
                .to(tarjeta, 0.2, { top: '-150', x:120, rotation: '-10'},'-=0.1')
                .to(txt2_2, 0.15, { x: 0 ,  ease: Back. easeOut.config( 1.7)}, '-=0.3')
                .to([txt2_1, txt2_2], 0.25, { delay: 0.25, autoAlpha: 0 })
                .to(telefono, 0.25, { scale: 1 , left: '-70', top: 15})
                .staggerFrom([txt3_1, txt3_2 , cta ], 0.7, { autoAlpha: 0 }, 0.5)
                .to([txt3_1, txt3_2], 0.25, { delay: 0.5, autoAlpha: 0 })          
                .staggerFrom([ txt4_1, txt4_2 ], 0.5, { autoAlpha: 0 }, 0.25);
        }

        function frameStop() {
            enableRollover();
        }


        ////////////////////////////////////////////////////// EVENT HANDLERS //////////////////////////////////////////////////////

        function onAdClick() {
            EB.clickthrough();
        }

        function onAdHover() {
            TweenLite.to(cta_box, 0.4, { scaleX: 1.1, ease: Elastic.easeOut.config(1, 0.3) });


        }

        function onAdOut() {
            TweenLite.to(cta_box, 0.4, { scaleX: 1, ease: Elastic.easeOut.config(1, 0.3) });
        }

        function adClickThru() {
            bu.addListener(ad_content, 'click', onAdClick);
        }

        function enableRollover() {
            bu.addListener(ad_content, 'mouseenter', onAdHover);
            bu.addListener(ad_content, 'mouseleave', onAdOut);
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