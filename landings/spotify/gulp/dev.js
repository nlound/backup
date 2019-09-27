const gulp = require('gulp');
const runSequence = require('run-sequence');
const color = require('gulp-color');

gulp.task('dev', function(callback) {
    runSequence('clean', 'sass', 'hintJs', 'pug', 'imagemin', 'concatJsLibs', 'concatJsProd', 'copyJs', 'copyJson', 'copyAssets','browser-sync', 'watch', function() {
      console.log(color('HAPPY DEV!', 'BLUE'));
    });
  });