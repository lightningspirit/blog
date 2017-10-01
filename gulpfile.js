const gulp = require('gulp'); 
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

gulp.task('html:minifier', () =>
    gulp.src('_site/**/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('_site'))
);

gulp.task('js:concat', () => 
    gulp.src('_site/assets/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('_site/assets/js/'))
);

gulp.task('images:optimize', () =>
    gulp.src('_site/assets/images/*')
    .pipe(imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest('_site/assets/images/'))
);

gulp.task('default', [
    'html:minifier', 'js:concat', 'images:optimize'
]);
