var gulp = require('gulp');

// loading packages
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('app/src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to run on file changes
gulp.task('watch', function() {
  gulp.watch('app/src/**/*.js', ['jshint']);
});

// define the default task and add watch task to it
gulp.task('default', ['jshint', 'watch']);
