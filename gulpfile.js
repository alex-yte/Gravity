const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const order = require('gulp-order');
const concat = require('gulp-concat');

function cleanDist() {
    return src('dist', { read: false, allowEmpty: true }).pipe(clean());
}

function styles() {
    return src('./scss/**/*.scss')
        .pipe(order([
            "scss/globals/_normalize.scss",
            "scss/globals/_typography.scss",
            "scss/globals/_mediaQ.scss",
            "scss/globals/_layout.scss",
            "scss/globals/_colors.scss",
            "scss/style.scss"
        ]))
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(dest('./dist'));
}
function watchTask() {
    watch('./scss/**/*.scss', series(styles));
}

exports.default = series(cleanDist, styles, watchTask)