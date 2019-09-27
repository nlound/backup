const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function(callback) {
   runSequence('sass', 'hintJs', 'concatJs', 'copyHtml', 'copyAssets', function() {
   });
});