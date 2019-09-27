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

        data.push($('#borough').val());
        data.push($('#day').val());
        data.push($('#time').val());
        data.push($('#weather').val());

        //$('#playIframe').addClass('none');
        $('#playlist').text('-');

        var playlistCode = data.join('_');

        $('.status').toggleClass('none');

        $('#testName').text(playlistCode);

        $.get('/streamline/api/playlist/by-code/' + playlistCode, function(resp) {
            console.log(resp);
            $('#playlist').text(resp.data);
            //$('#playIframe').prop('src', resp.data);
            $('.status').toggleClass('none');
            //$('#playIframe').toggleClass('none');
        });

        console.log(playlistCode);
    } 
    
})($);
