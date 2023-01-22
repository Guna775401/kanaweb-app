
const pontem_swap_page = require("../../pageobjects/aptos_wallets.page/pontem_swap_page");
const fewchaSwapPage = require("../../pageobjects/aptos_wallets.page/fewcha_swap.page");

const swap_basePage = require("../../pageobjects/base.page/swap_base.page");


require('dotenv').config()

describe('Aptos Swap for Pontem wallet For Mainnet', () => {

    it.only('AS1 : APT to USDT first market place swap', async () => {

        await browser.url('/')
        await browser.maximizeWindow();
        await pontem_swap_page.connect_pontem(process.env.MAINSEED1, process.env.MAINSEED2, process.env.MAINSEED3, process.env.MAINSEED4, process.env.MAINSEED5, process.env.MAINSEED6, process.env.MAINSEED7, process.env.MAINSEED8, process.env.MAINSEED9, process.env.MAINSEED10, process.env.MAINSEED11, process.env.MAINSEED12, process.env.PIN, process.env.CONFIRMPIN)
        await swap_basePage.enterAmount(process.env.DECIMALTWO);
        await pontem_swap_page.click_Pontem_SwapButton();

    });


    it('AS2 : APT to USDC first market place Swap', async () => {

        await swap_basePage.selectAPTtoUSDC(process.env.APT, process.env.USDC)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await fewchaSwapPage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS3 : APT to BTC first market place Swap', async () => {

        await swap_basePage.selectAPTtoBTC(process.env.APT, process.env.BTC)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await fewchaSwapPage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS4 : APT to Blue Move Coin first market place Swap', async () => {

        await swap_basePage.selectAPTtoBlueMoveCoin(process.env.APT, process.env.BLUEMOVECOIN)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await fewchaSwapPage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });


    // USDC to APT

    it('AS5 : USDC to APT first market place Swap', async () => {

        await swap_basePage.selectUSDCtoAPT(process.env.USDC, process.env.APT)
        await swap_basePage.enterAmount(process.env.TEN);
        //await fewchaSwapPage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS6 : USDC to USDT first market place Swap', async () => {

        await swap_basePage.selectUSDCtoUSDT(process.env.USDC, process.env.USDT)
        await swap_basePage.enterAmount(process.env.TEN);
        //await fewchaSwapPage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS7 : USDC to BTC first market place Swap', async () => {

        await swap_basePage.selectUSDCtoBTC(process.env.USDC, process.env.BTC)
        await swap_basePage.enterAmount(process.env.TEN);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS8 : USDC to Blue Move Coin first market place Swap', async () => {

        await swap_basePage.selectUSDCtoBlueMoveCoin(process.env.USDC, process.env.BLUEMOVECOIN)
        await swap_basePage.enterAmount(process.env.TEN);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    // USDT to USDC


    it('AS9 : USDT to USDC first market place Swap', async () => {

        await swap_basePage.selectUSDTtoUSDC(process.env.USDT, process.env.USDC)
        await swap_basePage.enterAmount(process.env.TEN);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS10 : USDT to APT first market place Swap', async () => {

        await swap_basePage.selectUSDTtoAPT(process.env.USDT, process.env.APT)
        await swap_basePage.enterAmount(process.env.TEN);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS11 : USDT to BTC first market place Swap', async () => {

        await swap_basePage.selectUSDTtoBTC(process.env.USDT, process.env.BTC)
        await swap_basePage.enterAmount(process.env.TEN);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS12 : USDT to Blue Move Coin first market place Swap', async () => {

        await swap_basePage.selectUSDTtoBlueMoveCoin(process.env.USDT, process.env.BLUEMOVECOIN)
        await swap_basePage.enterAmount(process.env.TEN);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });


    // BTC to 

    it('AS13 : BTC to USDC first market place Swap', async () => {

        await swap_basePage.selectBTCtoUSDC(process.env.BTC, process.env.USDC)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS14 : BTC to APT first market place Swap', async () => {

        await swap_basePage.selectBTCtoAPT(process.env.BTC, process.env.APT)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS15 : BTC to USDT first market place Swap', async () => {

        await swap_basePage.selectBTCtoUSDT(process.env.BTC, process.env.USDT)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS16 : BTC to Blue Move Coin first market place Swap', async () => {

        await swap_basePage.selectBTCtoBlueMoveCoin(process.env.BTC, process.env.BLUEMOVECOIN)
        await swap_basePage.enterAmount(process.env.DECIMALONE);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });


    // BlueMove coin 


    it('AS17 : BlueMove Coin to USDC first market place Swap', async () => {

        await swap_basePage.selectBlueMoveCointoUSDC(process.env.BLUEMOVECOIN, process.env.USDC)
        await swap_basePage.enterAmount(process.env.DECIMALTWO);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS18 : BlueMove Coin to APT first market place Swap', async () => {

        await swap_basePage.selectBlueMoveCointoAPT(process.env.BLUEMOVECOIN, process.env.APT)
        await swap_basePage.enterAmount(process.env.DECIMALTWO);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS19 : BlueMove Coin to USDT first market place Swap', async () => {

        await swap_basePage.selectBlueMoveCointoUSDT(process.env.BLUEMOVECOIN, process.env.USDT)
        await swap_basePage.enterAmount(process.env.DECIMALTWO);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });

    it('AS20 : BlueMove Coin to BTC first market place Swap', async () => {

        await swap_basePage.selectBlueMoveCointoBTC(process.env.BLUEMOVECOIN, process.env.BTC)
        await swap_basePage.enterAmount(process.env.DECIMALTWO);
        //await swap_basePage.selectFirstRoute();
        await pontem_swap_page.click_Pontem_SwapButton();

    });






});