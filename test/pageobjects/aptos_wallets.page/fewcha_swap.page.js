const loginPage = require("./martian_swap.page");

var fs = require('fs');
// const basePage = require("./base.page");

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



    
    // Buttons 

    get approveButtonFewcha() {
        return $('button[type="submit"]');
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

       // await browser.switchWindow("https://app.kanalabs.io/")
        // await this.settingsBtn.click();
        // await this.networkBtn.click();
        // await this.testNetBtn.click();
        // await this.backBtn.click();
        // await this.homeBtn.click();
        // await expect(this.faucetBtn).toBeDisplayed();


        await browser.pause(20000)
        await browser.switchWindow("https://app.kanalabs.io/")
        await basePage.selectBtn.waitForDisplayed({ timeout: 15000 });

        await basePage.selectBtn.click();
        await this.selectFewcha.click();
        await browser.pause(3000)
        await browser.switchWindow("Connect - Fewcha.app")
        await browser.pause(3000)
        await this.connectBtn.click();
        await browser.pause(5000)
    }

    async enterAmountFewcha(amount) {
        // await browser.pause(5000)
        await browser.switchWindow("https://app.kanalabs.io/")
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



   
   


    async approveFewcha() {
        await browser.pause(10000)
        await browser.switchWindow("Transaction - Fewcha.app")
        await this.approveButtonFewcha.waitForDisplayed({ timeout: 10000 });
        await this.approveButtonFewcha.click();
    }



    async verifyTransaction() {
        await browser.switchWindow("https://app.kanalabs.io/")

        await browser.pause(5000)
        var res = await basePage.result.getText();
        fs.appendFile('./reports/fewcha_result.txt', "Result :" + res + '\n', function (err) {
            console.log(err)
        })
    }








}
module.exports = new AptosSwap();