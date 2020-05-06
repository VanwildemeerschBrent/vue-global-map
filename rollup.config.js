import vue from 'rollup-plugin-vue'

export default {
  input: 'src/vue-global-map.vue',
  output: [
    {
      format: 'esm',
      file: 'dist/vue-global-map.esm.js',
    },
  ],
  plugins: [
    vue()
  ]
}