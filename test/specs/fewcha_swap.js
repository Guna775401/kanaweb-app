
const fewchaSwapPage = require('../pageobjects/fewcha_swap.page');



require('dotenv').config()

describe.only('Aptos Swap for Fewcha wallet', () => {

    it.only('AS1 : APT to USDT first market place swap', async () => {

        await browser.url('/')
        await browser.maximizeWindow();
        await fewchaSwapPage.fewchaWalletConnect(process.env.PIN, process.env.CONFIRMPIN, process.env.SEEDS)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
        //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it.only('AS2 : APT to USDC first market place Swap', async () => {

        await fewchaSwapPage.selectAPTtoUSDC(process.env.APT, process.env.USDC)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS3 : APT to BTC first market place Swap', async () => {

        await fewchaSwapPage.selectAPTtoBTC(process.env.APT, process.env.BTC)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS4 : APT to Blue Move Coin first market place Swap', async () => {

        await fewchaSwapPage.selectAPTtoBlueMoveCoin(process.env.APT, process.env.BLUEMOVECOIN)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });


    // USDC to APT

    it('AS5 : USDC to APT first market place Swap', async () => {

        await fewchaSwapPage.selectUSDCtoAPT(process.env.USDC, process.env.APT)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS6 : USDC to USDT first market place Swap', async () => {

        await fewchaSwapPage.selectUSDCtoUSDT(process.env.USDC, process.env.USDT)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS7 : USDC to BTC first market place Swap', async () => {

        await fewchaSwapPage.selectUSDCtoBTC(process.env.USDC, process.env.BTC)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS8 : USDC to Blue Move Coin first market place Swap', async () => {

        await fewchaSwapPage.selectUSDCtoBlueMoveCoin(process.env.USDC, process.env.BLUEMOVECOIN)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    // USDT to USDC


    it('AS9 : USDT to USDC first market place Swap', async () => {

        await fewchaSwapPage.selectUSDTtoUSDC(process.env.USDT, process.env.USDC)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS10 : USDT to APT first market place Swap', async () => {

        await fewchaSwapPage.selectUSDTtoAPT(process.env.USDT, process.env.APT)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS11 : USDT to BTC first market place Swap', async () => {

        await fewchaSwapPage.selectUSDTtoBTC(process.env.USDT, process.env.BTC)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS12 : USDT to Blue Move Coin first market place Swap', async () => {

        await fewchaSwapPage.selectUSDTtoBlueMoveCoin(process.env.USDT, process.env.BLUEMOVECOIN)
        await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });


    // BTC to 

    it('AS13 : BTC to USDC first market place Swap', async () => {

        await fewchaSwapPage.selectBTCtoUSDC(process.env.BTC, process.env.USDC)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS14 : BTC to APT first market place Swap', async () => {

        await fewchaSwapPage.selectBTCtoAPT(process.env.BTC, process.env.APT)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS15 : BTC to USDT first market place Swap', async () => {

        await fewchaSwapPage.selectBTCtoUSDT(process.env.BTC, process.env.USDT)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS16 : BTC to Blue Move Coin first market place Swap', async () => {

        await fewchaSwapPage.selectBTCtoBlueMoveCoin(process.env.BTC, process.env.BLUEMOVECOIN)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALONE);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });


    // BlueMove coin 


    it('AS17 : BlueMove Coin to USDC first market place Swap', async () => {

        await fewchaSwapPage.selectBlueMoveCointoUSDC(process.env.BLUEMOVECOIN, process.env.USDC)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALTWO);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS18 : BlueMove Coin to APT first market place Swap', async () => {

        await fewchaSwapPage.selectBlueMoveCointoAPT(process.env.BLUEMOVECOIN, process.env.APT)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALTWO);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS19 : BlueMove Coin to USDT first market place Swap', async () => {

        await fewchaSwapPage.selectBlueMoveCointoUSDT(process.env.BLUEMOVECOIN, process.env.USDT)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALTWO);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });

    it('AS20 : BlueMove Coin to BTC first market place Swap', async () => {

        await fewchaSwapPage.selectBlueMoveCointoBTC(process.env.BLUEMOVECOIN, process.env.BTC)
        await fewchaSwapPage.enterAmountFewcha(process.env.DECIMALTWO);
       //await fewchaSwapPage.selectFirstRoute();
        await fewchaSwapPage.clickSwapButton();
        await fewchaSwapPage.approveFewcha();
        await fewchaSwapPage.verifyTransaction();
    });







    // it('ETH to APT first market place swap ', async () => {

    //     await fewchaSwapPage.selectETHtoAptos(process.env.ETH, process.env.APT)
    //     await fewchaSwapPage.enterAmountFewcha(process.env.TEN);
    //    //await fewchaSwapPage.selectFirstRoute();
    //     await fewchaSwapPage.clickSwapButton();
    //     await fewchaSwapPage.approveFewcha();
    //     await fewchaSwapPage.verifyTransaction();
    // });


});





    //describe('Blocto Wallet', () => {

        // it('Blocto Swap ', async () => {

        //     await browser.url('/')
        //     await browser.maximizeWindow();
        //     await fewchaSwapPage.selectETHtoAptos(process.env.ETH, process.env.APT)
        //     // await loginPage.clickETHText();
        //     // await fewchaSwapPage.selectYouReceiveDropdown(process.env.APT)
        //     // await loginPage.clickAPTText();
        //     await fewchaSwapPage.enterAmount(process.env.SWAPAMOUNT);
        // });


   // })

//});

//describe('Martian Wallet', () => {


    // it.only('first Swap', async () => {

    //     await browser.url('/')
    //     await browser.maximizeWindow();
    //     //await fewchaSwapPage.martianWalletConnect(process.env.SEED1,process.env.SEED2,process.env.SEED3,process.env.SEED4,process.env.SEED5,process.env.SEED6,process.env.SEED7,process.env.SEED8,process.env.SEED9,process.env.SEED10,process.env.SEED11,process.env.SEED12)
    //     await fewchaSwapPage.enterAmount(process.env.SWAPAMOUNT);
    //    //await fewchaSwapPage.selectFirstRoute();
    //     await fewchaSwapPage.clickSwapButton();
    //     await fewchaSwapPage.approveMartian();
    //     await fewchaSwapPage.verifyTransaction();

    // });

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

    // it('', async () => {
    // });

//});