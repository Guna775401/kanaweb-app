

const fs = require('fs')


const extensionPhantom = fs.readFileSync('./extension/solana_extension/extension_phantom.crx')
const extensionGlow = fs.readFileSync('./extension/solana_extension/extension_glow.crx')
const extensionMartian = fs.readFileSync('./extension/aptos_extension/extension_martian.crx')
const extensionPetra = fs.readFileSync('./extension/aptos_extension/extension_petra.crx')
const extensionPontem = fs.readFileSync('./extension/aptos_extension/extension_pontem.crx')
const extensionFewcha = fs.readFileSync('./extension/aptos_extension/extension_fewcha.crx')

//const base64 = Buffer.from(extensionPhantom).toString('base64');

const base64 = Buffer.from(extensionPetra).toString('base64');

// If not working chrome driver RUn this comment ( npm install chromedriver --chromedriver-force-download )





require('dotenv').config()


exports.config = {


    specs: [
        [

            // cross chain

            // './test/specs/cross_chain/cross_chain_swap.js',

            // Aptos swap

            //'./test/specs/fewcha_swap.js',

            //   './test/specs/aptos_swap/pontem_swap.js',

               './test/specs/aptos_swap/petra_swap.js',

            // Solana swap

            //'./test/specs/**/*.js'


            //'./test/specs/solana_swap/phantom_swap.js',


            // Stake

            //    './test/specs/stake_unstake/aptos_stake.js',

            //  './test/specs/stake_unstake/solana_stake.js',




        ]
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{


        maxInstances: 5,

        browserName: 'chrome',

        // "goog:loggingPrefs": {
        //     'driver': 'INFO',
        //     'browser': 'INFO',
        //     browser: "ALL",
        // },

        acceptInsecureCerts: true,

        // 'goog:chromeOptions': {
        //     extensions: [base64],
        // },

    }],

    logLevel: 'info',

    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,


    // TestNet

    //  baseUrl: 'https://develop.kana-aggregator-web.pages.dev/',

    // Mainnet

    baseUrl: process.env.MAINNETURL,


    // Default timeout for all waitFor* commands.

    waitforTimeout: 120000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    //services: ['chromedriver'],

    outputDir: 'all-logs',



    services: [
        ['chromedriver',
            {
                logFileName: 'wdio-chromedriver.log', // default
                outputDir: 'driver-logs', // overwrites the config.outputDir
                // args: ['--silent']
            }]
    ],

    framework: 'mocha',


    reporters: ['spec'],


    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    }



}
