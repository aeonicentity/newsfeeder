var gulp = require("gulp");
var sync = require("browser-sync");
var inject = require("gulp-inject")

gulp.task('serve', ['compile', 'less', 'inject', 'move'], function(){
  sync.init({
    server: {
      baseDir: './dist/'
    },
    reloadDebounce: 2000,
    reloadDelay: 9000
  })

  gulp.watch("app/js/*.js",['compile', 'move']);
  gulp.watch("app/css/*.less", ['less', 'move']);
});
gulp.task('move', function(){
  gulp.src([
    '.tmp/index.html',
  ])
    .pipe( gulp.dest( '/dist/' ) )

})

gulp.task('less', function(){

});

gulp.task('compile', function(){
  //compiling libraries
  gulp.src([
    './node_modules/angular.min.js',
  ])
    .pipe( gulp.concat() )
    .pipe( gulp.dest( '.tmp/js/libs.js'))

  //compiling angular objects
  /*return gulp.src([
    ''
  ])*/
});

gulp.task('inject', function(){

});
