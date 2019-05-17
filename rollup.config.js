
const path = require('path')
const babel = require('rollup-plugin-babel')
const esformatter = require('rollup-plugin-esformatter')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  input: path.resolve(src, 'index.js'),
  output: {
    file: path.resolve(dist, 'jasmine-spy-helpers.js'),
    format: 'iife',
    name: 'main'
  },
  plugins: [
    // Transform code to old JavaScript.
    babel(),
    // Beautify bundle.
    esformatter()
  ]
}
