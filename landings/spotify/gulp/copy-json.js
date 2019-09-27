const gulp = require('gulp');
const config = require('./config').json;


// Copy JSON Files
gulp.task('copyJson', function() {
    gulp.src(config.src)
      .pipe(gulp.dest(config.dest));
});