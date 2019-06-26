

module.exports = {

    outputDir: './lib',

    // indexPath: '',

    filenameHashing: false,

    configureWebpack: {
        entry: './src/index.js',

        output: {
            library: 'ui',
            libraryTarget: 'umd',
            filename: 'ui.umd.js',
            auxiliaryComment: 'Test Comment'
        }
    }
}