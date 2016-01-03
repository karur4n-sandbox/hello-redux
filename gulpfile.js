var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './index.js', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react', 'stage-2']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});
