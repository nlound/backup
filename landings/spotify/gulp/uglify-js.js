const gulp = require('gulp');
const uglify = require('gulp-uglify');
const config = require('./config').js;
const pump = require('pump');

// Uglify JS
gulp.task('uglifyJs', function (cb) {
    pump([
          gulp.src(config.src),
          uglify(),
          gulp.dest(config.dest)
      ],
      cb);
  });