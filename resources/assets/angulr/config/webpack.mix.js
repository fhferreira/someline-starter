const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//     .sass('resources/assets/sass/app.scss', 'public/css');

// less
mix.less('resources/assets/angulr/css/less/app.less', 'resources/assets/angulr/css/');

// styles
mix.combine([
    'public/bower_components/bootstrap/dist/css/bootstrap.css',
    'public/vendors/bower_components/animate.css/animate.css',
    'public/bower_components/font-awesome-4.7.0/css/font-awesome.css',
    'public/vendors/bower_components/simple-line-icons/css/simple-line-icons.css',
    'resources/assets/angulr/css/app.css',
    'resources/assets/angulr/css/font.css'
], 'public/css/theme.src.css');

// scripts
mix.combine([
    'public/vendors/bower_components/jquery/dist/jquery.min.js',
    'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'resources/assets/angulr/js/support/ui-client.js',
    'resources/assets/angulr/js/support/ui-jp.config.js',
    'resources/assets/angulr/js/support/ui-jp.js',
    'resources/assets/angulr/js/support/ui-load.js',
    'resources/assets/angulr/js/support/ui-nav.js',
    'resources/assets/angulr/js/support/ui-toggle.js',
], 'public/js/theme.src.js');

// // copy necessary fonts
mix.copy('public/fonts/**', 'public/build/fonts');
mix.copy('../../../../public/css/theme.src.css', '../../../../public/assets/css');
mix.copy('../../../../public/js/theme.src.js', '../../../../public/assets/js');
