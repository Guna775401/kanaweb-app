

const { ChromedriverServiceLauncher } = require('wdio-chromedriver-service');
const Page = require('./page');

var fs = require('fs');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    get selectBtn() {
        return $('//*[text()="Select Wallet"]');
        //*[text()="Select Wallet"]
        // return $('button[class^="wallet-adapter-button"]');
    }
    get getStarted() {
        return $('button[class=wallet-adapter-modal-middle-button]');
    }
    get loginPassword() {
        return $('input[data-testid="unlock-form-password-input"]');
    }
    get connectBtn() {
        return $('//*[text()="Connect"]');
    }
    get submitBtn() {
        return $('button[type="submit"]');
    }
    get phantomWallet() {
        return $('//*[text()="Phantom"]');
    }


    // Chrome Extension

    get downloadBtn() {
        return $('a[class$="noselect"]');
    }
    get chromeBtn() {
        return $('//*[text()="chrome"] ');
    }
    get addToChrome() {
        return $('//*[text()="Add to Chrome"] ');
    }
    get addExtension() {
        return $('//*[text()="Add extension"]');
    }


    // Import Account
    get importAccountBtn() {
        return $('button[data-testid="import-recovery-phrase-button"]');
    }

    get firstSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-0"]');
    }
    get seondSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-1"]');
    }
    get thirdSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-2"]');
    }
    get fourthSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-3"]');
    }
    get fivthSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-4"]');
    }
    get sixthSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-5"]');
    }
    get seventhSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-6"]');
    }
    get eighthSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-7"]');
    }
    get ninethSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-8"]');
    }
    get tenthSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-9"]');
    }
    get leventhSeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-10"]');
    }
    get twentlySeed() {
        return $(' input[data-testid="secret-recovery-phrase-word-input-11"]');
    }

    get importSubmitBtn() {
        return $('button[type="submit"]');
    }

    get ImportSelectSubmitBtn() {
        return $('button[type="submit"]');
    }

    get passwordInput() {
        return $('input[name="password"]');
    }
    get confirmPasword() {
        return $('input[name="confirmPassword"]');
    }
    get checkBox() {
        return $('input[type="checkbox"]');
    }
    get continueBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }
    get continueBtn1() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }
    get finishBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }

    // Kanaswap Web app

    get youPayToken() {
        return $('#token1Name');
    }
    get youReceiveToken() {
        return $('#token2Name');
    }
    get youPayInputAmount() {
        return $('#token1_input_val');
    }
    get youReceiveInputAmount() {
        return $('#token2_input_val');
    }

    get swapButton() {
        return $('#swap_init_button');
    }
    get searchField() {
        return $('#token_search');
    }
    get firstRoute() {
        return $('div[class="first-route"]');
    }
    get approveButton() {
        return $('button[type=submit]');
    }
    get result() {
        return $('div[id="gl4p1a8"]');
    }



    


    async walletConnet(first, second, third, fourth, fivth, sixth, seventh, eight, nineth, tenth, leventh, twelth, pwd, confirmpwd) {

        await browser.switchWindow("chrome-extension")

        await this.importAccountBtn.click();

        await this.firstSeed.setValue(first);
        await this.seondSeed.setValue(second);
        await this.thirdSeed.setValue(third);
        await this.fourthSeed.setValue(fourth);
        await this.fivthSeed.setValue(fivth);
        await this.sixthSeed.setValue(sixth);
        await this.seventhSeed.setValue(seventh);
        await this.eighthSeed.setValue(eight);
        await this.ninethSeed.setValue(nineth);
        await this.tenthSeed.setValue(tenth);
        await this.leventhSeed.setValue(leventh);
        await this.twentlySeed.setValue(twelth);

        //await browser.pause(8000)
        await this.importSubmitBtn.waitForDisplayed({ timeout: 10000 });
        await this.importSubmitBtn.click();
        await browser.pause(8000)
        await this.ImportSelectSubmitBtn.click();
        await this.passwordInput.waitForDisplayed({ timeout: 15000 });
        //await this.passwordInput.click();
        await this.passwordInput.setValue(pwd);
        //await this.confirmPasword.click();
        await this.confirmPasword.setValue(confirmpwd);
        await this.checkBox.click();
        await this.continueBtn.click();
        await this.continueBtn1.click();
        await this.finishBtn.click();

        await browser.switchWindow("kana-aggregator")
        //await browser.pause(5000)
        await this.selectBtn.waitForDisplayed({ timeout: 15000 });


        await this.selectBtn.click();
        // await this.getStarted.click();
        await this.phantomWallet.click();
        await this.connectBtn.click();
        await browser.pause(5000)
        await browser.switchWindow("Phantom Wallet")
        await this.submitBtn.click();
        await browser.switchWindow("kana-aggregator")
        //await this.passwordInput.setValue(pwd)
        //await this.submitBtn.click();
    }
    async enterAmount(amount) {
        //await browser.pause(5000)
        await browser.switchWindow("https://kana-aggregator-web.pages.dev/")
        await this.youPayInputAmount.waitForDisplayed({ timeout: 30000 });
        await this.youPayInputAmount.setValue(amount)
    }
    async clickSwapButton (){
        await this.swapButton.scrollIntoView();
        await this.swapButton.click();
    }
    async clickFirstRoute() {
        await browser.pause(15000)
        await this.firstRoute.waitForDisplayed({ timeout: 30000 });
        await this.firstRoute.scrollIntoView();
        await this.firstRoute.click();
    }
    async clickApproveButton() {
        await this.approveButton.waitForDisplayed({ timeout: 50000 });
        await this.approveButton.click();
    }

    async verifyTransaction() {

        var res = await this.result.getText();

        fs.appendFile('./reports/result.txt', res + '\n', function (err) {
            console.log(err)
        })
    }

    open() {
        return super.open('walletConnet');
    }


    // get inputPassword() {
    //     return $('#password');
    // }

    // get btnSubmit() {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login(username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open() {
    //     return super.open('login');
    // }
}

module.exports = new LoginPage();
