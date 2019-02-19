const { series, concurrent } = require('nps-utils');

module.exports = {
    scripts: {
        default: {
            script: concurrent.nps('css'),
            description: 'Development Script'
        },

        css: {
            script: 'postcss app/styles/style.css -o app/css/style.css --map --watch',
            description: 'Postcss Development Script'
        },

        build: {
            default: {
                script: series.nps('build.css'),
                description: 'Production Build Script'
            },
            css: {
                script: 'postcss app/styles/style.css -o app/css/style.css --no-map',
                description: 'Postcss Production Build Script'
            }
        }

    }
}