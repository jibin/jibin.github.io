const { series, concurrent } = require('nps-utils');

module.exports = {
    scripts: {
        default: {
            script: concurrent.nps('styles', 'scripts'),
            description: 'Development Script'
        },

        styles: {
            script: 'postcss app/styles/style.css -o app/css/style.css --map --watch',
            description: 'Postcss Development Script'
        },

        scripts: {
            script: 'tsc --sourceMap true --watch',
            description: 'Typescript Development Script'
        },

        build: {
            default: {
                script: series.nps('build.styles', 'build.scriipts'),
                description: 'Production Build Script'
            },

            styles: {
                script: 'postcss app/styles/style.css -o app/css/style.css --no-map',
                description: 'Postcss Production Build Script'
            },

            scripts: {
                script: 'tsc --sourceMap false',
                description: 'Typescript Production Script'
            }
        }

    }
}