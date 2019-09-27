const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('./config').clean;


// Remove files
gulp.task('clean', function () {
    return gulp.src(config.src, config.options)
      .pipe(clean());
});