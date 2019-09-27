const config = require('../config');
const P = require('bluebird');
const GoogleSpreadsheet = require('google-spreadsheet');

let playlistMap = {};


module.exports = {
    getPlaylistByCode: getPlaylistByCode
};


updatePlaylistMap();
setInterval(updatePlaylistMap, config.playlistSpreadsheet.cacheTtl * 1000);

function getPlaylistByCode(code){
    return P.resolve(playlistMap[code.toLowerCase()] || null);
}

function getSheet(){
    return new P((resolve, reject) => {
        let doc = new GoogleSpreadsheet(config.playlistSpreadsheet.spreadsheetId);
        let creds = require('../google-drive-access.json');
        doc.useServiceAccountAuth(creds, (err, info) => {
            if(err){
                reject(err);
            } else {
                doc.getInfo((err, info) => {
                    if(err){
                        reject(err);
                    } else {
                        for(let sheet of info.worksheets){
                            if(sheet.title == config.playlistSpreadsheet.sheetTitle){
                                resolve(sheet);
                                return;
                            }
                        }
                        reject("Cannot find sheet " + config.playlistSpreadsheet.sheetTitle);
                    }
                })
            }
        });
    });
}


function updatePlaylistMap(){
    getSheet()
        .then(sheet => {
            sheet.getCells({
                'min-row': config.playlistSpreadsheet.firstRow,
                'max-row': config.playlistSpreadsheet.lastRow,
                'min-col': config.playlistSpreadsheet.playlistCodesColumn,
                'max-col': config.playlistSpreadsheet.playlistsColumn,
                'return-empty': true
            }, function(err, cells) {
                if(err){
                    console.log('Error updating playlist spreadsheet', err);
                } else{
                    let rowsCount = config.playlistSpreadsheet.lastRow - config.playlistSpreadsheet.firstRow;
                    let map = {};
                    let playlistColumnOffset = config.playlistSpreadsheet.playlistsColumn - config.playlistSpreadsheet.playlistCodesColumn;
                    let colsPerRow = playlistColumnOffset + 1;
                    for(let row = 0; row <= rowsCount; row++){
                        let code = cells[row * colsPerRow].value.trim();
                        let playlist = cells[row * colsPerRow + playlistColumnOffset].value.trim();
                        if(code && code != '')
                            map[code.toLowerCase()] = playlist;
                    }
                    playlistMap = map;
                }
            });
        });
}