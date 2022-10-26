const loginPage = require("./login.page");



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

    // Martian Wallet

    get iHaveAlreadyAccBtn() {
        return $('div[class="MuiGrid-root css-owchxn"]');
    }

    get seedPhraseBtn() {
        return $('//*[text()="Secret Phrase"]');
    }

    get seed1() {
        return $('input[name="0"]');
    }
    get seed2() {
        return $('input[name="1"]');
    }
    get seed3() {
        return $('input[name="2"]');
    }
    get seed4() {
        return $('input[name="3"]');
    }
    get seed5() {
        return $('input[name="4"]');
    }
    get seed6() {
        return $('input[name="5"]');
    }
    get seed7() {
        return $('input[name="6"]');
    }
    get seed8() {
        return $('input[name="7"]');
    }
    get seed9() {
        return $('input[name="8"]');
    }
    get seed10() {
        return $('input[name="9"]');
    }
    get seed11() {
        return $('input[name="10"]');
    }
    get seed12() {
        return $('input[name="11"]');
    }

    get importWalletBtn() {
        return $('//*[text()="Import Wallet"]');
    }

    get martianpassword() {
        return $('input[type="password"]');
    }
    get martianConfirmPassword() {
        return $('input[type="password"]');
    }

    get martianCheckBox() {
        return $('input[type="checkbox"]');
    }

    get martianContinue() {
        return $('//*[text()="Continue"]');
    }
    get aptosEnableBtn() {
        return $('/html/body/div/div[2]/main/div/div[4]/div/div[2]/div[2]/span/span[1]');
    }

    get martianContinueBtn() {
        return $('//*[text()="Continue"]');
    }
    get martianContinueBtn1() {
        return $('//*[text()="Continue"]');
    }

    get martianFinishBtn() {
        return $('//*[text()="Finish"]');
    }


async martianWalletConnect(seed1,seed2,seed3,seed4,seed5,seed6,seed7,seed8,seed9,seed10,seed11,seed12, martianpass, martianconfirmpass){
    
    await browser.switchWindow("chrome-extension")

    await this.iHaveAlreadyAccBtn.click();
    
    await this.seedPhraseBtn.click();
    await this.seed1.setValue(seed1,seed2,seed3,seed4,seed5,seed6,seed7,seed8,seed9,seed10,seed11,seed12);

    await this.importWalletBtn.click();

    await this.martianpassword.setValue(martianpass);
    await this.martianConfirmPassword.click(martianconfirmpass);
    await this.martianCheckBox.click();

    await this.martianContinueBtn.click();
    await this.martianContinueBtn1.click();
    await this.martianFinishBtn.click();

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




    // Petra Wallet




    // Kana Web

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





    get aptosSwapText() {
        const aptosswaptext = 'new UiSelector().text("Aptos Swap is available only on Testnet").className("android.widget.TextView")'
        const aptosswaptext1 = $(`android=${aptosswaptext}`)
        return aptosswaptext1;
    }
    get searchForTokenText() {
        const searchFortokenText = 'new UiSelector().text("").className("android.widget.TextView")'
        const searchFortokenText1 = $(`android=${searchFortokenText}`)
        return searchFortokenText1;
    }
    get searchForTokenText() {
        const searchFortokenText = 'new UiSelector().text("").className("android.widget.TextView")'
        const searchFortokenText1 = $(`android=${searchFortokenText}`)
        return searchFortokenText1;
    }


    async fewchaWalletConnect(pin, confirmPin, seeds) {

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

        // await this.settingsBtn.click();
        // await this.networkBtn.click();
        // await this.testNetBtn.click();
        // await this.backBtn.click();
        // await this.homeBtn.click();
        // await expect(this.faucetBtn).toBeDisplayed();


        await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        //await browser.pause(5000)
        await loginPage.selectBtn.waitForDisplayed({ timeout: 15000 });

        await loginPage.selectBtn.click();

        await this.selectFewcha.click();
        await browser.pause(3000)
        await browser.switchWindow("Connect - Fewcha.app")
        await browser.pause(3000)
        await this.connectBtn.click();
    }


    async enterAmount(amount) {
        await browser.pause(5000)
        await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        // await expect(this.aptosSwapText).toBeExisting();

        //await this.youPayDropdown.click();
        //await this.youPaySearchToken.setValue(token1)
        //await this.youReceiveDropdown.click()
        //await this.youReceiveSearchToken.setValue(token2)
        await this.youPayInputAmount.setValue(amount);
    }

    async selectFirstRoute() {
        await this.firstRoute.scrollIntoView();
        await this.firstRoute.click();
    }
    async clickSwapButton() {
        await this.swapBtn.scrollIntoView();
        await this.swapBtn.click();
    }

    async clickApproveButton() {
        await browser.switchWindow("Connect - Fewcha.app")
        await this.approveButton.waitForDisplayed({ timeout: 10000 });
        await this.approveButton.click();
    }

    async verifyTransaction() {
        await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        //await this.successSwap.waitForDisplayed({ timeout: 30000 });
        await browser.pause(10000)
        var res = await loginPage.result.getText();
        fs.appendFile('./reports/result.txt', res + '\n', function (err) {
            console.log(err)
        })
    }



}
module.exports = new AptosSwap();