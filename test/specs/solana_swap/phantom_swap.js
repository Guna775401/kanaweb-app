const swap_basePage = require('../../pageobjects/base.page/swap_base.page');
const phantomPage = require('../../pageobjects/solana_wallets.page/phantom.page');


require('dotenv').config()

describe('', () => {

    it('', async () => {
        await browser.url('/')
        await browser.maximizeWindow();
        await phantomPage.connect_phantom(process.env.MAINSEED1, process.env.MAINSEED2, process.env.MAINSEED3, process.env.MAINSEED4, process.env.MAINSEED5, process.env.MAINSEED6, process.env.MAINSEED7, process.env.MAINSEED8, process.env.MAINSEED9, process.env.MAINSEED10, process.env.MAINSEED11, process.env.MAINSEED12, process.env.PIN, process.env.CONFIRMPIN)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await fewchaSwapPage.selectFirstRoute();
        //  await swap_basePage.clickSwapButton();
        // await fewchaSwapPage.approveFewcha();
        // await fewchaSwapPage.verifyTransaction();


    });

    it('', async () => {
    });



});


