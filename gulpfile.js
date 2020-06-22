const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

gulp.task('purgecss', () => {
    return gulp
        .src('assets/**/*.css', 'assets/plugins/**/*.css')
        .pipe(
            purgecss({
                content: ['**/*.html','*.html'],
            })
        )
        .pipe(gulp.dest('build/css'))
})
