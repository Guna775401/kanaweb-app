


require('dotenv').config()

class BasePage {




    get settingsBtn() {
        return $('#settingButton');
    }
    get customSlippage() {
        return $('#custom_slippage');
    }
    get slippage_tolerance() {
        return $('#slippage_tolerance_val');
    }


    get refreshBtn() {
        return $('#refreshButton');
    }
    get interchangeBtn() {
        return $('#toggleToken');
    }

    get first_chain_dropdown() {
        return $('div[class=" css-1wy0on6"]');
    }
    get second_chain_dropdown() {
        return $('#chain_aptos');
    }
    get select_solana() {
        return $('img[alt="Solana"]');
    }
    get getStratedBtn() {
        return $('button[class="wallet-adapter-modal-middle-button"]');
    }

    get connectBtn() { return $('//*[text()="Connect"]'); }

    get() { return $(''); }

    get() { return $(''); }

    get() { return $(''); }


    get crosschain_select_walletBtn() {
        return $('button[class^="wallet-adapter-button"]');
    }

    get result() {
        return $('div[class="Toastify__toast-body"]')
    }
    get selectBtn() {
        return $('//*[text()="Select Wallet"]');
    }


    // Extension Elements 

    get addToChromeBtn() {
        return $('//*[text()="Add to Chrome"]');
    }

    get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }



    // Text


    get aPTText() {
        return $('//*[text()="Aptos Coin"]');
    }
    get uSDCText() {
        return $('//*[text()="USD Coin"]');
    }
    get uSDTText() {
        return $('//*[text()="Tether"]');
    }
    get bTCText() {
        return $('//*[text()="Bitcoin"]');
    }
    get blueMoveCoinText() {
        return $('//*[text()="BlueMove Coin"]');
    }

    get aptosSwapText() {
        return $('//*[text()="Aptos Swap is available only on Testnet"]');
    }
    get searchForTokenText() {
        return $('//*[text()="Search by token or Address"]');
    }

    get youPayDropdown() {
        return $('#token1Name');
    }
    get youPaySearchToken() {
        return $('input[id="token_search"]');
    }
    get youPayInputAmount() {
        return $('input[id="token1_input_val"]');
    }
    get youReceiveDropdown() {
        return $('#token2Name');
    }
    get youReceiveSearchToken() {
        return $('#token_search');
    }
    get youReceiveInputAmount() {
        return $('#token2_input_val');
    }

    get bestPriceText() {
        return $('//*[text()="Best Price"]');
    }
    get swapBtn() {
        return $('#swap_init_button');
    }
    get firstRoute() {
        return $('#route1');
    }
    get secondRoute() {
        return $('#route2');
    }
    get thirdRoute() {
        return $('#route3');
    }
    get routes_count() {
        return $('#no_of_routes');
    }

    get() {
        return $('');
    }







    async() {

    }

    async() {

    }

    async() {

    }




    // USDT
    async selectUSDTtoAPT(usdt, apt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(apt);
        await this.aPTText.click();
    }
    async selectAPTtoUSDC(apt, usdc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(apt);
        await this.aPTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdc);
        await this.uSDCText.click();
    }
    async selectAPTtoBTC(apt, btc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(apt);
        await this.aPTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(btc);
        await this.bTCText.click();
    }
    async selectAPTtoBlueMoveCoin(apt, bluemove) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(apt);
        await this.aPTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(bluemove);
        await this.blueMoveCoinText.click();
    }

    // USDC 
    async selectUSDCtoAPT(usdc, apt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdc);
        await this.uSDCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(apt);
        await this.aPTText.click();
    }

    async selectUSDCtoBTC(usdc, btc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdc);
        await this.uSDCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(btc);
        await this.bTCText.click();
    }

    async selectUSDCtoUSDT(usdc, usdt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdc);
        await this.uSDCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdt);
        await this.uSDTText.click();
    }

    async selectUSDCtoBlueMoveCoin(usdc, bluemovecoin) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdc);
        await this.uSDCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();
    }

    // USDT 
    async selectUSDTtoAPT(usdt, apt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(apt);
        await this.aPTText.click();
    }
    async selectUSDTtoBTC(usdt, btc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(btc);
        await this.bTCText.click();
    }
    async selectUSDTtoUSDC(usdt, usdc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdc);
        await this.uSDCText.click();
    }
    async selectUSDTtoBlueMoveCoin(usdt, bluemovecoin) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();
    }

    // Select BTC

    async selectBTCtoAPT(btc, apt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(btc);
        await this.bTCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(apt);
        await this.aPTText.click();
    }

    async selectBTCtoUSDT(btc, usdt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(btc);
        await this.bTCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdt);
        await this.uSDTText.click();
    }

    async selectBTCtoUSDC(btc, usdc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(btc);
        await this.bTCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdc);
        await this.uSDCText.click();
    }

    async selectBTCtoBlueMoveCoin(btc, bluemovecoin) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(btc);
        await this.bTCText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();
    }

    // BlueMove Coin

    async selectBlueMoveCointoAPT(bluemovecoin, apt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(apt);
        await this.aPTText.click();
    }

    async selectBlueMoveCointoUSDT(bluemovecoin, usdt) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdt);
        await this.uSDTText.click();
    }

    async selectBlueMoveCointoUSDC(bluemovecoin, usdc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(usdc);
        await this.uSDCText.click();
    }

    async selectBlueMoveCointoBTC(bluemovecoin, btc) {

        await (await this.youPayDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youPaySearchToken).setValue(bluemovecoin);
        await this.blueMoveCoinText.click();

        await (await this.youReceiveDropdown).click();
        await this.youPaySearchToken.click();
        await this.youPaySearchToken.clearValue();
        await (await this.youReceiveSearchToken).setValue(btc);
        await this.bTCText.click();
    }



    async clickSwapButton() {
        await browser.pause(7000)
        await this.swapBtn.scrollIntoView();
        var swaptext = await this.swapBtn.getText();

        if (swaptext == process.env.SWAPTEXT) {
            await this.swapBtn.click();

            await browser.pause(5000)
            await browser.switchWindow(process.env.PONTEMWALLET)
            await this.confirmBtn.click();

            await browser.switchWindow(process.env.MAINNETURL)

            var route = await swap_basePage.firstRoute.getText();
            await expect(this.result).toHaveText(process.env.SENDSWAPTOAST)

            await browser.pause(5000)
            var res = await this.result.getText();

            fs.appendFile('./reports/aptos_swap/pontem_result.txt', '\n' + "Route:" + route + '\n' + "Result :" + res, function (err) {
                console.log(err)
            })
        }
        else if (swaptext == process.env.NOROUTEFOUNDTEXT) {



            fs.appendFile('./reports/aptos_swap/pontem_result.txt', '\n' + "Result:" + swaptext, function (err) {
                console.log(err)


            })
        }

    }

    async enterAmount(amount) {
        await browser.pause(5000)
        await browser.switchWindow(process.env.MAINNETURL)
        await this.youPayInputAmount.setValue(amount);

    }

    async selectFirstRoute() {
        await this.firstRoute.scrollIntoView();
        await this.firstRoute.click();

    }



}

module.exports = new BasePage();
