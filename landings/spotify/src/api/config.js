const config = {
    nodeEnv: process.env.NODE_ENV || 'local',
    isProduction: (process.env.NODE_ENV === 'production'),
    google:{
        apiKey: 'AIzaSyB8JNwAbhsktvKOryH9Sg_hxxQErjHm3uQ'
    },
    accuWeather: {
        apiKey: '4tH6CMijIb1YpGotbidxtKTR1ZmtYNmA',
        defaultCondition: "Clear",
        locationKey: 2083954,
        cacheTtl: 600
    },
    playlist: {
        defaultPlaylistCode: 'NY_Default',

    },
    borough: {
        defaultBorough :{
            code: 'NY',
            name: 'NYC'
        }
    },
    playlistSpreadsheet: {
        spreadsheetId: '15sNNIEfk4IbNmtXpaBmujPAWbvFabYevlwpPZgs39N4',
        cacheTtl: 300,
        sheetTitle: "Playlists",
        playlistCodesColumn: 5,
        playlistsColumn: 7,
        firstRow: 3,
        lastRow: 110
    }
};

module.exports = config;
