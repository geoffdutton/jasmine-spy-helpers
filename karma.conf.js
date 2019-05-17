
module.exports = config => {
  config.set({
    singleRun: true,
    autoWatch: false,

    files: [{ pattern: 'test/**/*.spec.js', watched: false }],

    frameworks: ['jasmine'],

    reporters: ['progress', 'coverage'],

    browsers: ['ChromeHeadless'],

    preprocessors: {
      'test/**/*.spec.js': ['rollup']
    },

    coverageReporter: {
      reporters: [
        {
          type: 'text'
        },
        {
          type: 'lcov',
          dir: 'coverage/',
          subdir: '.'
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
        sourcemap: 'inline'
      }
    }
  })
}
