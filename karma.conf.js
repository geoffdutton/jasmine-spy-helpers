
module.exports = config => {
  config.set({
    files: [{ pattern: 'test/**/*.spec.js', watched: false }],

    frameworks: ['jasmine'],

    reporters: ['mocha', 'coverage'],

    browsers: ['ChromeHeadless'],

    preprocessors: {
      'test/**/*.spec.js': ['rollup']
    },

    coverageReporter: {
      reporters: [
        {
          type: 'text',
        },
        {
          type: 'lcov',
          dir: 'coverage/',
        }
      ]
    },

    rollupPreprocessor: {
      plugins: [
        require('rollup-plugin-istanbul')({
          exclude: ['test/**/*.js']
        }),
        require('rollup-plugin-babel')()
      ],
      output: {
        format: 'iife',
        name: 'mainTest',
        sourcemap: 'inline',
      }
    }
  })
}
