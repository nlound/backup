const gulp = require('gulp');
const concat = require('gulp-concat');
const config = require('./config').js;


// Copy JS Files
gulp.task('copyJs', function() {
    gulp.src(config.src)
      .pipe(concat(config.outputName))
      .pipe(gulp.dest(config.dest));
});