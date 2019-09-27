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

$('#submit_app').on('click', function () {
    var url = new URL(window.location.href);
    ga('send', 'event', 'Submit Application', url, 'url');
    console.log( ga('send', 'event', 'Submit Application', url, 'url') )
});

