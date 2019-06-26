
const Dev = require("./dev")
const Pro= require("./pro")
const {intersection, merge} = require('lodash')
// const path = require("path")
// const resolvePath = dir => path.join(__dirname, `../../${dir}`)

const IS_PROD = process.env.NODE_ENV === 'pro'

// let baseUrl = IS_PROD && !IS_LOCAL ? '//qn.cache.wpscdn.cn/' : '/'
// let assetsDir = IS_PROD && !IS_LOCAL ? 'kdocs' : ''

// if (IS_LOCAL) {
//     baseUrl = '/'
//     assetsDir = 'm/docs'
// }


const baseConfig = {
    // publicPath: baseUrl,
    
    // assetsDir,
    
    configureWebpack: () => ({
        resolve: {
            extensions: ['.js', '.vue', '.json', '.less']
        },
        
        optimization: {
            splitChunks: undefined
        }
    }),
    
    chainWebpack: config => {
       
    }
}

function _merge_ (configure) {
    let basic = Object.assign({}, baseConfig)
    let intersectedKeys = intersection(Object.keys(basic), Object.keys(configure))
    let merged = merge(basic, configure)
    
    intersectedKeys.forEach(key => {
        let baseValueType = typeof baseConfig[key]
        let valueType = typeof configure[key]
        
        if (baseValueType === valueType && baseValueType === 'function') {
            merged[key] = function () {
                return merge(
                    baseConfig[key].apply(baseConfig, arguments), 
                    configure[key].apply(configure, arguments)
                )
            }
        }
    })
    
    return merged
}

module.exports = _merge_(IS_PROD ? Pro : Dev)
