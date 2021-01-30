const { watch, src, dest, series } = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");

const config = {
    app: {
        scss: "./src/app/scss/**/*.scss",
    },
    dist: {
        base: "./src/",
    },
    extraBundles: ["./dist/main.css"],
};

function cssTask(done) {
    src(config.app.scss)
        .pipe(sourcemaps.init())
        .pipe(concat("style.css"))

        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(rename({ suffix: ".gulp" }))

        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write("."))

        .pipe(dest(config.dist.base));
    done();
}

function watchTask() {
    watch(config.app.scss, { interval: 1000 }, series(cssTask));
}

exports.cssTask = cssTask;
exports.watchTask = watchTask;
exports.default = cssTask;
