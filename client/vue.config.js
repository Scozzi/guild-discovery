const path = require("path");

module.exports = {
    chainWebpack: config => config.resolve.symlinks(false),
    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                // Make sure *our* version of ag-grid & vue is always loaded.
                // This is needed for `yarn link / npm link` to work and prevent duplicate versions of these libs
                // being loaded
                '@ag-grid-community/core$': path.resolve(__dirname, 'node_modules/@ag-grid-community/core'),
                vue$: path.resolve(__dirname, 'node_modules/vue')
            }
        },
        performance: {
            hints: false
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, "~@/styles/global.scss")]
        }
    }
}