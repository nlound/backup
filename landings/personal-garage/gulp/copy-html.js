const gulp = require('gulp');
const config = require('./config').html;


// Copy JSON Files
gulp.task('copyHtml', function() {
    gulp.src(config.src)
      .pipe(gulp.dest(config.dest));
});