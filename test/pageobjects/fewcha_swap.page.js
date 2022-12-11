const loginPage = require("./martian_swap.page");

var fs = require('fs');

class AptosSwap {


    // Fewcha wallet

    get existingWalletBtn() {
        return $('//*[text()="Use an existing wallet"]');
    }
    get aptosBlackchainBtn() {
        return $('//*[text()="Aptos Blockchain"]');
    }
    get seedPhrase() {
        return $('//*[text()="With Recovery Phrase"]');
    }
    get password() {
        return $('input[name="password"]');
    }
    get confirmPassword() {
        return $('input[name="confirmPassword"]');
    }
    get mnemonicBtn() {
        return $('textarea[name="mnemonic"]');
    }
    get continueBtn() {
        return $('button[type="submit"]');
    }
    get finishBtn() {
        return $('button[type="button"]');
    }
    get settingsBtn() {
        return $('div[class="text-[12px]  color-light-unit"]');
    }
    get networkBtn() {
        return $('//*[text()="Network"]');
    }
    get testNetBtn() {
        return $('//*[text()="Testnet"]');
    }
    get backBtn() {
        return $('svg[class^="sc-ipEyDJ"]');
    }
    get homeBtn() {
        return $('//*[text()="Home"]');
    }
    get faucetBtn() {
        return $('//*[text()="Faucet"]');
    }
    get selectNetworkBtn() {
        return $('select[class="swap_select"]');
    }
    get selectFewcha() {
        return $('//*[text()="Fewcha"]');
    }
    get enterPasswordBtn() {
        return $('input[placeholder="Enter password"]');
    }
    get openfewchBtn() {
        return $('~');
    }
    get connectBtn() {
        return $('button[type="submit"]');
    }



    get youPayDropdown() {
        return $('div[id="token1Name"]');
    }
    get youPaySearchToken() {
        return $('input[id="token_search"]');
    }
    get youPayInputAmount() {
        return $('input[id="token1_input_val"]');
    }
    get youReceiveDropdown() {
        return $('div[id="token2Name"]');
    }
    get youReceiveSearchToken() {
        return $('input[id="token_search"]');
    }
    get youReceiveInputAmount() {
        return $('input[id="token2_input_val"]');
    }

    get bestPriceText() {
        return $('//*[text()="Best Price"]');
    }
    get swapBtn() {
        return $('button[id="swap_init_button"]');
    }
    get firstRoute() {
        return $('div[id="route1"]');
    }
    get secondRoute() {
        return $('div[id="route2"]');
    }
    get thirdRoute() {
        return $('div[id="route3"]');
    }

    // Buttons 

    get approveButtonFewcha() {
        return $('button[type="submit"]');
    }
    get result() {
        return $('div[class="Toastify__toast-body"]')
    }
    get selectBtn() {
        return $('//*[text()="Select Wallet"]');
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

    async fewchaWalletConnect(pin, confirmPin, seeds) {

        await browser.pause(5000)
        await browser.switchWindow("chrome-extension")

        await this.existingWalletBtn.click();
        await this.aptosBlackchainBtn.click();
        await this.seedPhrase.click();
        await this.password.setValue(pin);
        await this.confirmPassword.setValue(confirmPin);
        await this.continueBtn.click();
        await this.mnemonicBtn.setValue(seeds);
        await this.continueBtn.click();
        await this.finishBtn.click();

    //     await browser.newWindow('', {
    //     windowName: 'WebdriverIO window',
    //     windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
    // })

       // await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        // await this.settingsBtn.click();
        // await this.networkBtn.click();
        // await this.testNetBtn.click();
        // await this.backBtn.click();
        // await this.homeBtn.click();
        // await expect(this.faucetBtn).toBeDisplayed();


        await browser.pause(20000)
        await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        await this.selectBtn.waitForDisplayed({ timeout: 15000 });

        await this.selectBtn.click();
        await this.selectFewcha.click();
        await browser.pause(3000)
        await browser.switchWindow("Connect - Fewcha.app")
        await browser.pause(3000)
        await this.connectBtn.click();
        await browser.pause(5000)
    }

    async enterAmountFewcha(amount) {
        // await browser.pause(5000)
        await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        await this.youPayInputAmount.setValue(amount);

    }


    async selectYoupayDropdown(token1) {
        await this.youPayDropdown.click();
        await this.youPaySearchToken.setValue(token1)
    }

    async selectYouReceiveDropdown(token2) {
        await this.youReceiveDropdown.click()
        await this.youReceiveSearchToken.setValue(token2)
    }



    async selectFirstRoute() {
        await this.firstRoute.scrollIntoView();
        await this.firstRoute.click();
    }
    async clickSwapButton() {
        await browser.pause(5000)
        await this.swapBtn.scrollIntoView();
        await this.swapBtn.click();
    }


    async approveFewcha() {
        await browser.pause(10000)
        await browser.switchWindow("Transaction - Fewcha.app")
        await this.approveButtonFewcha.waitForDisplayed({ timeout: 10000 });
        await this.approveButtonFewcha.click();
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


    async verifyTransaction() {
        await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")

        await browser.pause(5000)
        var res = await this.result.getText();
        fs.appendFile('./reports/fewcha_result.txt', "Result :" + res + '\n', function (err) {
            console.log(err)
        })
    }








}
module.exports = new AptosSwap();