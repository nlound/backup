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
