const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const config = require('./config').js;

// JS HINT
gulp.task('hintJs', function() {
    return gulp.src(config.src)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });