const P = require('bluebird');
const config = require('../config');
const errors = require('../errors');
const BaseController = require('./base-controller');
const playlistService = require('../services/playlist');
const playlistSpreadsheetService = require('../external-services/playlist-spreadsheet');

class PlaylistController extends BaseController{
    getPlaylistByCode(req, res, next){
        let promise = playlistSpreadsheetService.getPlaylistByCode(req.params.code);
        this._respond(req, res, promise);
    }

    getPlaylist(req, res, next){
        let search = this._buildSearch(req);
        let promise = playlistService.getPlaylist(search.lat, search.long);

        this._respond(req, res, promise);
    }

    getPlaylistTest(req, res, next){
        let promise
        try{
            let search = this._buildSearch(req);
            let timestamp = new Date(search.datetime);
            promise = playlistService.getPlaylistTest(search.lat, search.long, timestamp, search.weather);
        } catch(err){
            promise = P.reject(errors.ValidationError(err));
        }

        this._respond(req, res, promise);
    }

    getClientInfo(req, res, next){
        let search = this._buildSearch(req);
        let promise = playlistService.getClientInfo(search.lat, search.long);

        this._respond(req, res, promise);
    }
}

module.exports = PlaylistController;