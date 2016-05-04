var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsconfig.json');

var appSrc = 'public/',
    tsSrc = 'process/typescript/';

//Updates the html file stream
gulp.task('html', function() {
  gulp.src(appSrc + '**/*.html');
});

//Updates the css file stream
gulp.task('css', function() {
  gulp.src(appSrc + '**/*.css');
});

//copy related files to js/lib/angular2
gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/es6-shim/es6-shim.min.map',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/http.dev.js'
    ])
    .pipe(gulp.dest(appSrc + 'js/lib/angular2'));
});

//Updates the gulp file stream and pipe to ts compiler
gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

//Watch will watch if there are changes in the ts, css and html files
//and run the corrsponding task
gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(appSrc + '**/*.html', ['html']);
});


//when you type gulp run the below task asynchronously
//copylibs, typescript, watch
gulp.task('default', ['copylibs', 'typescript', 'watch']);
