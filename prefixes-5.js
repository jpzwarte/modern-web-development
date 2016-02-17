var postcss = require('postcss'),
    processors = [
    require('autoprefixer')({ browsers: ['last 2 versions', 'IE >= 10'] }),
    require('css-mqpacker'),
    require('csswring')
];

return gulp.src('app.css').pipe(postcss(processors));
