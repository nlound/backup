const express = require('express');
const router = express.Router();
const playlistController = new (require('./controllers/playlist'));


router.get('/playlist', playlistController.getPlaylist.bind(playlistController));
router.get('/playlist/test', playlistController.getPlaylistTest.bind(playlistController));
router.get('/playlist/by-code/:code', playlistController.getPlaylistByCode.bind(playlistController));
router.get('/playlist/client-info', playlistController.getClientInfo.bind(playlistController));

module.exports = router;