const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const config = require('./config').sass;
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src(config.src)
    .pipe(sass({style: 'expanded'}).on('error', sass.logError))
    .pipe(concat(config.outputName))
		.pipe(autoprefixer({
        browsers: ['> 0.1%']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.dest));
});
