
const loginPage = require('../pageobjects/login.page');
const aptosSwapPage = require('../pageobjects/aptos_swap.page');

require('dotenv').config()



describe('My Login application', () => {

    //     it.only('should login with valid credentials', async () => {
    //         await browser.url('/')
    //         await browser.maximizeWindow();
    //         await loginPage.walletConnet(process.env.SEED1, process.env.SEED2, process.env.SEED3, process.env.SEED4, process.env.SEED5, process.env.SEED6, process.env.SEED7, process.env.SEED8, process.env.SEED9, process.env.SEED10, process.env.SEED11, process.env.SEED12, process.env.PASSWORD, process.env.PASSWORD);
    //         await loginPage.enterAmount(process.env.SOLAMOUNT)
    //         // await loginPage.clickFirstRoute();
    //         await loginPage.clickSwapButton();
    //         await loginPage.verifyTransaction();

    //     });


    //     it('second swap', async () => {
    //         await loginPage.selectUSDHtoUSDT(process.env.USDH, process.env.USDT)
    //         await loginPage.enterAmount(process.env.SOLAMOUNT)
    //         await loginPage.clickSwapButton();
    //         await loginPage.verifyTransaction();
    //    });

    it('', async () => {
    });

});


describe.only('Aptos Swap', () => {

    // it('first Swap', async () => {

    //     await browser.url('/')
    //     await browser.maximizeWindow();
    //     await aptosSwapPage.fewchaWalletConnect(process.env.PIN, process.env.CONFIRMPIN, process.env.SEEDS)
    //     await aptosSwapPage.enterAmount(process.env.SWAPAMOUNT);
    //     await aptosSwapPage.selectFirstRoute();
    //     await aptosSwapPage.clickSwapButton();
    //     await aptosSwapPage.verifyTransaction();


    // });

    it('first Swap', async () => {

        await browser.url('/')
        await browser.maximizeWindow();
        await aptosSwapPage.martianWalletConnect(process.env.SEED1,process.env.SEED2,process.env.SEED3,process.env.SEED4,process.env.SEED5,process.env.SEED6,process.env.SEED7,process.env.SEED8,process.env.SEED9,process.env.SEED10,process.env.SEED11,process.env.SEED12,   process.env.PIN, process.env.CONFIRMPIN)
        await aptosSwapPage.enterAmount(process.env.SWAPAMOUNT);
        await aptosSwapPage.selectFirstRoute();
        await aptosSwapPage.clickSwapButton();
        await aptosSwapPage.verifyTransaction();


    });



    // it('', async () => {

    // });

    // it('', async () => {

    // });

    // it('', async () => {

    // });

    // it('', async () => {

    // });





});

