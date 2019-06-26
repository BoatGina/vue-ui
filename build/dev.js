const path = require("path")
const resolvePath = dir => path.join(__dirname, `../../${dir}`)
const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || 8055

module.exports = {

    configureWebpack: {
        entry: './example/index.js',

        devtool: '#source-map'

    },

    // chainWebpack: config => {
    //     config.module
    //         .rule('vue')
    //         .use('vue-loader')
    //         .tap(options =>
    //             merge(options, {optimizeSSR: false})
    //         )
    //     config
    //         .resolve
    //         .alias
    //         .set('@', resolvePath('example'))
            
    //     config.module.rules.delete('svg')
    //     config.module
    //         .rule('images')
    //         .exclude
    //             .add(resolvePath('src/assets/resources'))
    //             .end()
    //         .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //         .use('url-loader')
    //         .loader('url-loader')
    //         .tap(options => merge(options, {
    //             limit: 10000
    //         }))
    //         .end()
    // },

    devServer: {
        port: DEV_SERVER_PORT,
        disableHostCheck: true
    }
}