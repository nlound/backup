const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('./config').pug;


// Process PUG files
gulp.task('pug', function () {
    return gulp.src(config.src)
        .pipe(pug({
            pretty: true
        }))
        .on('error', function (error) {
            console.log('An error occurred while compiling jade.\nLook in the console for details.\n' + error);
            this.emit('end');
        })
        .pipe(gulp.dest(config.dest));
});