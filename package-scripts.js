const { series, concurrent, rimraf, open } = require('nps-utils');

module.exports = {
    scripts: {
        default: {
            script: concurrent.nps('styles', 'scripts', 'run'),
            description: 'Development Script'
        },
        build: {
            default: series.nps('build.del', 'build.styles', 'build.scripts'),
            del:  rimraf.nps('app/css', 'rimraf app/js'),
            styles: 'postcss app/styles/style.css -o app/css/style.css --no-map',
            scripts: {
                default:  series.nps('build.scripts.typescript', 'build.scripts.uglifyjs'),
                typescript: 'tsc --sourceMap false',
                uglifyjs: {
                    default: {
                        script: concurrent.nps(
                            'build.scripts.uglifyjs.main',
                            'build.scripts.uglifyjs.constant',
                        ),
                        description: 'Uglify Production Script'
                    },
                    main: 'uglifyjs -c -m -o app/js/main.js -- app/js/main.js',
                    constant: 'uglifyjs -c -m -o app/js/constant.js --  app/js/constant.js',
                }
                
            }
        },
        styles: 'postcss app/styles/style.css -o app/css/style.css --map --watch',
        scripts: 'tsc --sourceMap true --watch',
        run: {
            default: series.nps('run.server', 'run.browser'),
            server: 'http-server -p 8284 -d false -i false',
            browser: open.nps('http://localhost:8284/app')
        },
    }
}