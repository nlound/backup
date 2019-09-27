const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./config');

//Browser Sync & Server
gulp.task('browser-sync', ['sass'],function() {
    setTimeout(function () { // Wait for all assets to be copyed
        browserSync.init(config.browserSync);;
    }, 500);
});


gulp.task('watch', function () {
    gulp.watch(config.sass.src, ['sass-watch']);
    gulp.watch(config.watch.js, ['js-watch']);
    gulp.watch(config.watch.html, ['html-watch']);
});

gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['copyJs'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ['copyHtml'], function (done) {
    browserSync.reload();
    done();
});