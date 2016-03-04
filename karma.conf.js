'use strict';

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'jspm', 'es6-shim'],

        jspm: {
            loadFiles: [
                'components/**/!(*sandbox).js'
            ]
        },

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'components/**/!(*sandbox).html', watched: false, included: false, served: true}
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'components/**/!(*spec|*demo).js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS', 'Chrome'],

        browserNoActivityTimeout: 100000,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-jasmine',
            'karma-jspm',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-es6-shim',
            'karma-coverage'
        ],

        coverageReporter: {
            instrumenters: {isparta: require('isparta')},
            instrumenterOptions: {
                isparta: {
                    babel: {
                        stage: 0,
                        optional: [
                            'runtime',
                            'optimisation.modules.system'
                        ]
                    }
                }
            },
            instrumenter: {
                '**/*.js': 'isparta'
            },
            check: {
                global: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100
                }
            },
            reporters: [
                {type: 'text-summary'},
                {type: 'html', dir: 'coverage/'}
            ],
            watermarks: {
                statements: [100, 100],
                branches: [100, 100],
                functions: [100, 100],
                lines: [100, 100]
            }
        }
    });
};
