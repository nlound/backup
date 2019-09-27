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
