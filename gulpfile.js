var gulp = require('gulp');

require('./tasks/css');
require('./tasks/serve');

gulp.task('default', ['serve', 'css'], function () {
    gulp.watch('src/**/*.scss', ['css']);
});
