var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

// loading packages
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('www/js/src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// convert jsx into js files
gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./www/js/src/index.js');
  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./www/js/build'));
});

// configure which files to watch and what tasks to run on file changes
gulp.task('watch', function() {
  gulp.watch('www/js/src/**/*.js', ['jshint']);
  gulp.watch('www/js/src/**/*.jsx', ['browserify']);
});

// define the default task and add watch task to it
gulp.task('default', ['jshint', 'browserify', 'watch']);
