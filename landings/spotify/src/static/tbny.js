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