const gulp = require('gulp');
const copy = require('gulp-contrib-copy');
const concat = require('gulp-concat');
const pump = require('pump');
const config = require('./config').concatJs;
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');



gulp.task('concatJs', function (cb) {
    pump([
          gulp.src(config.src),
          concat(config.outputName),
          gulp.dest(config.dest)
      ],
      cb);
  });

  gulp.task('concatJsProd', function() {
        return gulp.src(config.src)
            .pipe(concat(config.outputName))
            .pipe(gulp.dest(config.dest))
            .pipe(rename(config.outputNameMin))
            .pipe(uglify())
            .pipe(gulp.dest(config.dest));
  });