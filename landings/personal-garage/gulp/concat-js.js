const gulp = require('gulp');
const copy = require('gulp-contrib-copy');
const concat = require('gulp-concat');
const pump = require('pump');
const config = require('./config').js;

gulp.task('concatJs', function (cb) {
    pump([
          gulp.src(config.src),
          concat(config.outputName),
          gulp.dest(config.dest)
      ],
      cb);
  });