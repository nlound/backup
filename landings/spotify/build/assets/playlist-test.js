/**
 * TBNY Spotify App - Test Page
 */
(function($) {
    "use strict";

    $(document).ready(function(){
        $('#getPlaylist').on('click', getPlaylist);
    });
    
    function getPlaylist() {
        var  data = [];

        var loc = $('#loc').val().split(',');
        var weather = $('#weather').val();
        var time = $('#datetime').val().split(' ');
        var datetime = time[0] + 'T' + time[1] + ':00.000-0400';

        data.push('lat=' + $.trim(loc[0]));
        data.push('long=' + $.trim(loc[1]));
        data.push('weather=' + weather);
        data.push('datetime=' + datetime);

        var query = data.join('&');

        $('#playlist').text('-');

        var playlistCode = data.join('_');

        $('.status').toggleClass('none');
        $('#results').addClass('none');
        
        $.get('/streamline/api/playlist/test?' + query, function(resp) {
            console.log(resp);
            $('#testLink').prop('href', 'index.html?' + query);
            $('#zipCode').text(resp.data.zipCode);
            $('#borough').text(resp.data.borough);
            $('#day').text(resp.data.weekMoment);
            $('#time').text(resp.data.dayMoment);
            $('#weatherRes').text(resp.data.weather);
            $('#playlistUrl').text(resp.data.playlistUrl);
            $('#playlistCode').text(resp.data.playlistCode);
            $('.status').toggleClass('none');
            $('#results').toggleClass('none');
        });
    } 
    
})($);
