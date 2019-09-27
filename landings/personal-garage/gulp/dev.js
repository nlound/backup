const gulp = require('gulp');
const runSequence = require('run-sequence');
const color = require('gulp-color');

gulp.task('dev', function(callback) {
    runSequence('clean', 'sass', 'hintJs', 'copyJs', 'copyAssets' , 'copyHtml', 'watch', function() {
      setTimeout( function () {
        
        runSequence('watch', 'browser-sync',function (){
          console.log(color('HAPPY DEV!', 'BLUE'));
        }); // wait 1s for assets to copy
      },1000);
    });
  });
    