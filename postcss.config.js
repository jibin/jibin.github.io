module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: [

        // Inline @import rules
        require("postcss-easy-import"),

        // Nest style rules inside each other
        require("postcss-nesting"),

        // Use Custom Properties in CSS
        require("postcss-custom-properties")({
            preserve: false
        }),

        // Use Custom Media Queries in CSS
        require("postcss-custom-media")({
            importFrom: {
                customMedia: {
                    '--phone-landscape': '(min-width: 576px)',
                    '--tablet': '(min-width: 768px)',
                    '--desktop': '(min-width: 992px)',
                    '--large-desktop': '(min-width: 1200px)'
                }
            }
        }),

        // PostCSS plugin to reduce calc()
        require("postcss-calc")({
            precision: 10,
            preserve: true
        }),

        // Inline SVG
        require('postcss-svg')({
            svgo: { plugins: [{ cleanupAttrs: true }] },
            dirs: ['app/svg']
        }),

        // Inline url()
        require('postcss-image-inliner')({
            strict: true,
            assetPaths: [ 'app/images' ],
            maxFileSize: 0
        }),
        require('autoprefixer'),

        // CSS compression. Check cssnano.config.js file for preset.
        require('cssnano')
    ]
});