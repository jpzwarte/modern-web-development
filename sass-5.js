gulp.src('app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.postcss(processors))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('target'));
