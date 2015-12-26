var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('buildjs', function() {
  run('nodejs build.js').exec().pipe(gulp.dest('output'));
});

gulp.task('default', ['buildjs'], function() {
  gulp.watch(['../source/*.js'], ['buildjs']);
});
