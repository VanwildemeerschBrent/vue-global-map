import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input:"./src/vue-global-map.vue",
    plugins:{
        preVue:[
            replace({
                'process.env.NODE_ENV':JSON.stringify('production')
            }),
            commonjs() //support for commonJS modules
        ],
        vue:{
            css:true,
            template:{
                isProduction:true
            }
        },
        postVue:[
            buble() //use buble to transpile ES2015
        ]
    },
}