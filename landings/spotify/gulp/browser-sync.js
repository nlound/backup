const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./config');
const nodemon = require('gulp-nodemon');

//Browser Sync & Server
gulp.task('browser-sync', ['nodemon', 'sass'],function() {
    browserSync.init(config.browserSync);
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
        script: config.nodemon.script
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
})

gulp.task('watch', function () {
    gulp.watch(config.sass.src, ['sass-watch']);
    gulp.watch(config.watch.js, ['js-watch']);
    gulp.watch(config.watch.pug, ['pug-watch']);
    gulp.watch(config.watch.json, ['json-watch']);
});

gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('pug-watch', ['pug'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['hintJs', 'concatJsProd'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('json-watch', ['copyJson'], function (done) {
    browserSync.reload();
    done();
});