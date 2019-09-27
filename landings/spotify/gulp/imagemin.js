const gulp = require('gulp');
const copy = require('gulp-contrib-copy');
const imagemin = require('gulp-imagemin');
const config = require('./config').imagemin;


gulp.task('imagemin', function() {
    gulp.src(config.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))
});