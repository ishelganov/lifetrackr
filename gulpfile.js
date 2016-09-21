var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith');
    autoprefixer = require('gulp-autoprefixer');


/**
 * Обработка ошибок сборки
 */
function wrapPipe(taskFn) {
    return function(done) {
        var onSuccess = function() {
            done();
        };
        var onError = function(err) {
            done(err);
        }
        var outStream = taskFn(onSuccess, onError);
        if(outStream && typeof outStream.on === 'function') {
            outStream.on('end', onSuccess);
        }
    }
}


gulp.task('default', function() {

});

/**
 * Собирает sass
 */
gulp.task('sass', wrapPipe(function(success, error) {
 return gulp.src('./css/scss/style.scss')
     .pipe(sass().on('error', error))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
    .pipe(cssmin().on('error', error))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
}));


gulp.task('sprite', function () {
    var spriteData = gulp.src('images/icons/*')
        .pipe(spritesmith({
        imgName: 'images/sprite.png',
        cssFormat: 'scss',
        cssName: 'css/scss/utils/sprite.scss'
    }));
    return spriteData.pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('images/icons/**/*', ['sprite','sass']);
    gulp.watch('./css/scss/**/*.scss', ['sass']);
    // gulp.watch('./image/icons/*.png', ['compass']);
});