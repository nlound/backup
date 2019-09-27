gaPageView(); //GA -PageView Tracking

$(function() {
    "use strict";
    
    var TBNYApp = new TBNY();
    
    TBNYApp.run();
})

/**
 * GA - PageView Tracking
 * @param {string} page 
 */
function gaPageView() {
    var pageView;

    var url = new URL(window.location.href),
        page = '';

    if (url.searchParams) {
        page = url.searchParams.get('c');
    } else {
        page = url.search.split('=')[1];
    }
    
    switch (page) {
        case 'geo1':
            pageView = {
                title: 'Central Park',
                location: 'vzw.com/streamline/?c=geo1'
            };
            break;
        case 'geo2':
            pageView = {
                title: 'Citi Field',
                location: 'vzw.com/streamline/?c=geo2'
            };
            break;
        case 'geo3':
            pageView = {
                title: 'Greenpoint Ferry Terminal',
                location: 'vzw.com/streamline/?c=geo3'
            };
            break;
        case 'geo4':
            pageView = {
                title: 'Grocery Store',
                location: 'vzw.com/streamline/?c=geo4'
            };
            break;
        default:
            pageView = {
                title: 'Landing General',
                location: 'vzw.com/streamline'
            }
            break;
    }

    ga('send', {
        hitType: 'pageview',
        title: pageView.title,
        location: pageView.location,
        page: pageView.location,
    });
}

/**
 * TBNY - Animation content
 */
function TBNYstartAnimation(callback) {

  var tlLogo = new TimelineMax({onComplete: callback});
  $('#text_1').removeClass('alpha-0');

  TweenMax.to(['.skyline', '.icon'], 0.1, { autoAlpha: 0 });
  TweenMax.to('#drawing', 3, { delay: 1.8, x: '-1000', ease: Power1.easeInOut });

  tlLogo
    .from('#red', 1, { x: '-200', autoAlpha: 0 })
    .staggerFrom('.st_white', 0.25, { autoAlpha: 0 }, 0.25)
    .from('.waves', 3, { drawSVG: '0%', ease: Power1.easeInOut }, '-=0.2')
    .from('#text_1', 1, { x: 2000, ease: Power1.easeOut }, '-=2')
    .to('.waves', 2, { css: { 'stroke-width': 2 } }, '-=2');
}

/**
 * Initilize the Skyline Animation
 * @param {string} city 
 */
function TBNYanimateSkyline(city) {

  switch (city) {
    case "Queens":
      $('#queens-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    case "Brooklyn":
      //show Brooklyn
      $('#brooklyn-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    case "Manhattan":
      $('#default-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

      case "Staten Island":
      $('#default-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    case "The Bronx":
      $('#default-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    default:
      //show default city
      $('#default-skyline').removeClass('none');
      $('#tooltip-default').removeClass('none');
  }

  $('#text_2').removeClass('alpha-0');

  TweenMax.to(['.skyline', '.icon'], 0.1, {  autoAlpha: 1 });
  TweenMax.to('#drawing', 3, { x: '-1300', ease: Power1.easeInOut });

  var tlSkyline = new TimelineMax({
    onComplete: TBNYhideAnimation
  });

  tlSkyline
    .to('#text_1', 2, { x: '-1000' })
    .from('#text_2', 1, { x: 2000, ease: Power1.easeOut }, '-=2')
    .from('.skyline', 5, { drawSVG: '0%', ease: Power1.easeInOut }, 0)
    .from('.icon', 1, { drawSVG: '0%' }, '-=2');
  }

/**
 * Hides Animation Frames
 */
function TBNYhideAnimation() {
  var tl = new TimelineMax({
    onComplete: TBNYanimateshowPlaylist
  });

  tl.to('#animation', 0.5, { autoAlpha: 0});
}

/**
 * Show Playlist Frames
 */
function TBNYanimateshowPlaylist() {
  $('#animation').addClass('none');
  $('.vzn-tbny').removeClass('alpha-0');
  $('.share-bar').removeClass('none');
  $('#playlist').removeClass('none');
  $('#footer').removeClass('alpha-0');

  var tlPlaylist = new TimelineMax();

  tlPlaylist
    .from(['#playlist', '#footer','.share-bar'], 1, { autoAlpha: 0 });
  }



/**
 * TBNY - Geolocation Context
 */

var TBNYGeo = function () {

    //user location
    this.location = {
        lat: 0,
        long: 0
    }
}

/**
 * This method gets the user location
 */
TBNYGeo.prototype.getLocation = function () {
    var self = this;
    var enableLoc = false;
    //gaPageView(); //GA -PageView Tracking

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successLocationCallback, errorLocationCallback);
    }

    function successLocationCallback(position) {
        ga('send', 'event', 'Enable Location Popover', 'Enable Location (pop up)', 'enable_location_yes');
        enableLoc = true;
        //$('.bottom-title-area span').text(position.coords.latitude + ', ' + position.coords.longitude);
        getPlaylist(position.coords.latitude, position.coords.longitude);
    }

    function errorLocationCallback(error) {
        if (error.code === 1) {
            ga('send', 'event', 'Enable Location Popover', 'Don\'t Enable Location (pop up)', 'enable_location_no');
        }
        console.log('TBNYGeo: Cannot determine user location.');
        getPlaylist(0, 0);
    }

    function getPlaylist(lat, long) {
        var apiUrl = 'api/playlist?lat=' + lat + '&long=' + long; 

        $.get(apiUrl, function (resp) {
            var trackPlaylist = {
                'dimension1': resp.data.borough,
                'dimension2': resp.data.weather,
                'dimension3': resp.data.weekMoment,
                'dimension4': resp.data.dayMoment,
                'dimension5': resp.data.playlistUrl
            };

            if (enableLoc) {
                ga('send', 'event', 'Playlist Load', 'Load Playlist', 'load_playlist', trackPlaylist); //Google Analytics
            }
           
            var iframe = $('<iframe width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"/>');
            iframe.prop('src', resp.data.playlistUrl).prop('id', Math.floor((Math.random() * 10000000) + 1));
            $("#playlist").prepend(iframe);
            
            $("#city").html(resp.data.borough);
            TBNYanimateSkyline(resp.data.borough);
        });
    }
}

/**
 * This method gets the user location
 */
TBNYGeo.prototype.warningDesktop = function () {
    $('#app').remove();
    $('#error-landscape').remove();
    $('#error-desktop').removeClass('none');
}

/**
 * TODO: This method needs to be refactored, TOO Large/Complex
 */
TBNYGeo.prototype.run = function () {

    new ClipboardJS('#url-share');

    // copy to clipboard
    $('#url-share').on('click', function () {
        ga('send', 'event', 'Share Playlist Link', 'Share Playlist', 'share_playlist_copied'); //GA Analytics
        TweenMax.fromTo('#url-text-share', 4, {
            opacity: 1,
            ease: Expo.easeIn
        }, {
            autoAlpha: 0
        });
    });

    $('#info-icon').on('click', function () {
        ga('send', 'event', 'More Info Overlay', 'Open More Info', 'open_overlay');
        $('#tbny-tooltip').modal({
            onClose: function () {
                ga('send', 'event', 'More Info Overlay', 'Close More Info', 'close_overlay');
                $.modal.close();
            },
            position: [24, 24]
        });
    });

    $('#cta-track').on('click', function () {
        ga('send', 'event', 'Family Plan Anchor', 'Family Plan: Learn More', 'learn_more')
    });

    $('#logo-track').on('click', function () {
        ga('send', 'event', 'Verizon Header', 'Header', 'header_click');
    });

    $('#twitter-share').on('click', function () {
        ga('send', 'event', 'Share Playlist Link', 'Share Playlist', 'share_playlist_tw');
    });

    // Init of Facebook object
    window.fbAsyncInit = function () {
        FB.init({
            appId: '466061543818561',
            status: true,
            cookie: true,
            xfbml: true
        });
    };

    (function () {
        var e = document.createElement('script');
        e.async = true;
        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
    })();

    // facebook share
    $('#facebook-share').click(function (e) {
        ga('send', 'event', 'Share Playlist Link', 'Share Playlist', 'share_playlist_fb'); //GA Tracking
        e.preventDefault();
        FB.ui({
            method: 'share',
            href: 'https://www.verizonwireless.com/streamline/',
        });
    })

    if ($('html').hasClass('mobile')) {
        $('#app').removeClass('alpha-0');
        TBNYstartAnimation(this.getLocation);
    } else {
        this.warningDesktop(); 
    };

}


/**
 * TBNY - Test context
 */

var TBNYSocial = function() {
    $('#info-icon').addClass('none')
}

// Inherint from TBNYGeo 
TBNYSocial.prototype = Object.create(TBNYGeo.prototype);

 
/**
  * This method gets the user location
  * @override
  */
 TBNYSocial.prototype.getLocation = function() {
    var codeMapping = {
        geo1: 'NY_Show',
        geo2: 'NY_Game',
        geo3: 'NY_Commute',
        geo4: 'NY_Grocery'
    }

    var url = new URL(window.location.href),
        code,
        apiUrl,
        cParam;

    if (url.searchParams) {
        cParam = url.searchParams.get('c');
    } else {
        cParam = url.search.split('=')[1];
    }

    //gaPageView(cParam); //GA -PageView Tracking
        
    code = codeMapping[cParam] || 'NY_Default',
    apiUrl = '/streamline/api/playlist/by-code/' + code;

    $.get(apiUrl, function(resp) {
        var trackPlaylist = {
            'dimension1': 'NYC',
            'dimension5': resp.data
        };
        ga('send', 'event', 'Playlist Load', 'Load Playlist', 'load_playlist', trackPlaylist); //Google Analytics

        var iframe = $('<iframe width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"/>');
       
        iframe.prop('src', resp.data).prop('id', Math.floor((Math.random() * 10000000) + 1));
        $("#playlist").prepend(iframe);
       
        $('#city').html('NYC');
        
        //TODO: this animation will change 
        TBNYanimateSkyline(resp.data.borough); // selected borough playlist
    });
}

/**
 * TBNY - Test context
 */

var TBNYTest = function() {}

// Inherint from TBNYGeo 
TBNYTest.prototype = Object.create(TBNYGeo.prototype);

 
/**
  * This method gets the user location
  * @override
  */
TBNYTest.prototype.getLocation = function() {
    var apiUrl = '/streamline/api/playlist/test' + window.location.search;
        
    $.get(apiUrl, function(resp) {
        
        var iframe = $('<iframe width="100%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"/>');
        
        iframe.prop('src', resp.data.playlistUrl).prop('id', Math.floor((Math.random() * 10000000) + 1));
        $("#playlist").prepend(iframe);
        
        $("#city").html(resp.data.borough);
        
        TBNYanimateSkyline(resp.data.borough); // selected borough playlist
    });
}
/**
 * TBNY App Module
 */
var TBNY = function() {
    this.context = '';
}

/**
 * Set the context to TBNY App to run
 * @param {Object} context 
 */
TBNY.prototype.setContext = function(context) {
    this.context = context;
}

/**
 * This method run the TBNY App based on 
 * the provided context
 */
TBNY.prototype.run = function() {
    this.getContext();

    if (this.context && this.context.run) {
        this.context.run();
    } 
}

/**
 * Determine Application Context for Run
 */
TBNY.prototype.getContext = function() {
    var url = new URL(window.location.href);

    if (url.searchParams) {
        this.context = determineContext();
    } else {
        this.context = determineContextFallback();
    }

    function determineContext() {
        if (url.searchParams.get('lat')) {
            return new TBNYTest();    
        }

        if (url.searchParams.get('c')) {
            return new TBNYSocial();
        }
        
        return new TBNYGeo();
    }

    function determineContextFallback() {
        if (url.search.indexOf('c=') > -1) {
            return new TBNYSocial();
        }

        if (url.search.indexOf('lat=') > -1) {
            return new TBNYTest();
        }

        return new TBNYGeo();
    }
}