const gulp = require('gulp');
const runSequence = require('run-sequence');
const color = require('gulp-color');

gulp.task('dist', function() {
    runSequence('clean', 'sass', 'hintJs', 'pug', 'imagemin', function() {
      console.log(color('SUCCESSFULLY DIST!', 'YELLOW'));
    });
});