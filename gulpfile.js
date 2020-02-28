var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', function(done) {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/sass/**/*.sass", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', () => {
        browserSync.reload();
        done();
    });

    done();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/main.sass")
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest("src/css/"))
    .pipe(plumber())
    .pipe(browserSync.stream());

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));