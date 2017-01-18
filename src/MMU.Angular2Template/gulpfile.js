/// <binding />
var gulp = require("gulp");

// Delete the dist directory
var clean = require("gulp-clean");
gulp.task("clean",
    function () {
        return gulp.src("./wwwroot/")
            .pipe(clean());
    });

// Node Modules --> nm
gulp.task("nm",
    () => {
        gulp.src([
            "core-js/client/**",
            "systemjs/dist/system.src.js",
            "reflect-metadata/**",
            "rxjs/**",
            "zone.js/dist/**",
            "@angular/**",
            "jquery/dist/jquery.*js",
            "bootstrap/dist/js/bootstrap.*js",
            "ms-signalr/jquery.signalR.js",
            "ng2-bootstrap/**"
        ],
        {
            cwd: "node_modules/**"
        })
        .pipe(gulp.dest("./wwwroot/node_modules"));
    });

// TypeScript --> ts
var ts = require("gulp-typescript");

var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

// new gulp-typescript 3 syntax
gulp.task("ts",
    function () {
        var tsResult = tsProject.src().pipe(tsProject());
        return tsResult.js.pipe(gulp.dest("wwwroot/app"));
    });

// fonts
gulp.task("fonts",
    function () {
        var files = [
            "./node_modules/bootstrap/fonts/**.*"
        ];
        return gulp.src(files)
            .pipe(gulp.dest("./wwwroot/fonts"));
    });

// html
gulp.task("html",
    function () {
        var appFiles = [
            "./app/**/*.html"
        ];

        var rootFiles = [
            "./index.html",
            "./systemjs.config.js"
        ];

        return gulp.src(appFiles)
            .pipe(gulp.dest("./wwwroot/app")) &&
            gulp.src(rootFiles)
            .pipe(gulp.dest("./wwwroot"));
    });

// sass
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function () {
    var appFiles = [
        "./app/**/*.scss"
    ];

    var rootFiles = [
        "./node_modules/bootstrap/scss/**.scss"
    ];

    return gulp.src(appFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./wwwroot/app")) &&
        gulp.src(rootFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./wwwroot/styles"));

    //return gulp.src(appFiles)
    //        .pipe(sass().on('error', sass.logError))
    //        .pipe(gulp.dest("./wwwroot/app")) &&
    //        gulp.src(rootFiles)
    //        .pipe(sass().on('error', sass.logError))
    //        .pipe(gulp.dest("./wwwroot/styles"));
});

// less
var less = require("gulp-less");
gulp.task("less",
    function () {
        var appFiles = [
            "./app/**/*.less"
        ];

        var rootFiles = [
            "./node_modules/bootstrap/less/bootstrap.less"
        ];

        return gulp.src(appFiles)
            .pipe(less())
            .pipe(gulp.dest("./wwwroot/app")) &&
            gulp.src(rootFiles)
            .pipe(less())
            .pipe(gulp.dest("./wwwroot/styles"));
    });

gulp.task("init", ["html", "less", "ts", "nm", "fonts", "sass", "less"]);
gulp.task("watch", ["watch.ts", "watch.html", "watch.less", "watch.sass"]);

gulp.task("watch.ts",
    ["ts"],
    function () {
        return gulp.watch("app/**/*.ts", ["ts"]);
    });

gulp.task("watch.html",
    ["html"],
    function () {
        return gulp.watch("app/**/*.html", ["html"]);
    });

gulp.task('watch.sass', function () {
    gulp.watch("./app/**/*.scss", ["sass"]);
});

gulp.task("watch.less",
    ["less"],
    function () {
        return gulp.watch("app/**/*.less", ["less"]);
    });

gulp.task("default", ["nm", "watch"]);