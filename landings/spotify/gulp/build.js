const gulp = require('gulp');
const runSequence = require('run-sequence');
const color = require('gulp-color');

gulp.task('build', function(callback) {
    runSequence('clean', 'sass', 'hintJs', 'pug','imagemin', 'concatJsLibs', 'concatJsProd', 'copyJson', 'copyAssets', function() {
        console.log(color('SUCCESSFULLY BUILD!', 'YELLOW'));
    });
});