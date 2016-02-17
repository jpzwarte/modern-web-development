var icons = gulp.src('app/images/icons/*.svg')
  .pipe($.svgmin())
  .pipe($.svgstore({ inlineSvg: true }))
  .pipe($.cheerio(function ($) {
    $('svg').attr('style', 'display:none');
  }));

gulp.src('demo-app/app/index.html')
    .pipe($.inject(icons, { ... }))

<!-- inject:svg --><!-- endinject -->
