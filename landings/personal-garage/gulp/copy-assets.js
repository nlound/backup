const gulp = require('gulp');
const copy = require('gulp-contrib-copy');
const config = require('./config').assets;

// Copy assets Files
gulp.task('copyAssets', function() {
    gulp.src(config.src)
      .pipe(copy())
      .pipe(gulp.dest(config.dest));
  });