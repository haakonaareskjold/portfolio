const mix = require('laravel-mix');

mix.js('src/js/main.js', 'js')
    .sass('src/sass/main.scss', 'css')
    .copy('src/static', 'public')
    .copy('src/assets', 'public/assets')
    .setPublicPath('public')
    .sourceMaps(false, 'source-map')
    .browserSync('127.0.0.1:3000');

if (mix.inProduction()) {
    mix.version();
}