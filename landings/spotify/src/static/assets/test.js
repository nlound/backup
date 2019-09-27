/**
 * TBNY Spotify App - Test Page
 */
(function($) {
    "use strict";

    $(document).ready(geoLocationTest);
    
    function geoLocationTest() {
        $('.status').show();

        $('#mloc').on('click', function(e) {
            e.preventDefault();
            $('#loc').toggleClass('none');
            $('#submitLoc').toggleClass('none');
        });

        $('#submitLoc').on('click', submitLocation);

        navigator.geolocation.getCurrentPosition(successLocationCallback);
    }

    function submitLocation() {
        var loc = $('#loc').val();

        if (loc.trim().length > 0) {
            var position = {
                coords: {}
            }

            var locs = loc.split(',');
            position.coords.latitude = locs[0].trim();
            position.coords.longitude = locs[1].trim();
            
            $('#status').text('Please wait ...');
            $('.status').show();

            successLocationCallback(position);
        }
    }

    function successLocationCallback(position) {
        var apiUrl = 'api/playlist/client-info?lat=' + position.coords.latitude + '&long=' + position.coords.longitude
        $('#status').text('Updating ...');
        $('#location').text('lat=' + position.coords.latitude + ' long=' + position.coords.longitude);
        $('#status').text('Requesting playlist, please wait ...');
        $.get(apiUrl, showData);
    }

    function showData(resp) {
        $('#status').text('Playlist data recieved ...');
        $('#zipCode').text(resp.data.zipCode);
        $('#borough').text(resp.data.borough);
        $('#day').text(resp.data.weekMoment);
        $('#time').text(resp.data.dayMoment);
        $('#weather').text(resp.data.weather);
        $('.status').hide();
        console.log(resp);
    }


})($);
