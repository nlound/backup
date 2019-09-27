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