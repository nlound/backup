const P = require('bluebird');
const NodeCache = require( "node-cache" );

class CacheService{
    constructor(logCache=false){
        this._logCached = logCache;
        this._cache = new NodeCache();
    }
    wrapPromiseFunction(fun, ttl){
        let that = this;
        let wrapper = function(){
            let cacheKey = that._cacheKey(fun, arguments);
            let cached = that._cache.get(cacheKey);
            if(cached){
                if(that._logCached)
                    console.log('cached ' + fun.name);
                return P.resolve(cached.data);
            }  
            
            return fun(...arguments)
                .then(result => {
                    that._cache.set(cacheKey, {data: result}, ttl);
                    return result;
                });
        };
        return wrapper;
    }
    _cacheKey(fun, args){
        let values = [];
        for(let k in args){
            let value = args[k];
            if(value == null)
                values.push("null")
            else
                values.push(value.toString());
        }
        if(values.length == 0)
            return fun.name;
        return fun.name + ";" + values.join(";");
    }
}

module.exports = CacheService;

