const swap_basePage = require("../base.page/swap_base.page");



class phantomSwap {


    get importBtn() {
        return $('button[data-testid="import-recovery-phrase-button"]');
    }


    get seed1() {
        return $('input[data-testid="secret-recovery-phrase-word-input-0"]');
    }
    get seed2() {
        return $('input[data-testid="secret-recovery-phrase-word-input-1"]');
    }
    get seed3() {
        return $('input[data-testid="secret-recovery-phrase-word-input-2"]');
    }
    get seed4() {
        return $('input[data-testid="secret-recovery-phrase-word-input-3"]');
    }
    get seed5() {
        return $('input[data-testid="secret-recovery-phrase-word-input-4"]');
    }
    get seed6() {
        return $('input[data-testid="secret-recovery-phrase-word-input-5"]');
    }

    get seed7() {
        return $('input[data-testid="secret-recovery-phrase-word-input-6"]');
    }
    get seed8() {
        return $('input[data-testid="secret-recovery-phrase-word-input-7"]');
    }
    get seed9() {
        return $('input[data-testid="secret-recovery-phrase-word-input-8"]');
    }
    get seed10() {
        return $('input[data-testid="secret-recovery-phrase-word-input-9"]');
    }
    get seed11() {
        return $('input[data-testid="secret-recovery-phrase-word-input-10"]');
    }
    get seed12() {
        return $('input[data-testid="secret-recovery-phrase-word-input-11"]');
    }


    get importWalletBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }

    get importSelectedAccBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }
    get inputPassword() {
        return $('input[data-testid="onboarding-form-password-input"]');
    }
    get confirmPassword() {
        return $('input[data-testid="onboarding-form-confirm-password-input"]');
    }

    get checkBox() {
        return $('input[data-testid="onboarding-form-terms-of-service-checkbox"]');
    }
    get continueBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }
    get secondContinueBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
    }
    get finishBtn() {
        return $('button[data-testid="onboarding-form-submit-button"]');
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
    get() {
        return $('');
    }



    get downloadBtn() { return $('div[class="flex items-center space-x-2"]') }

    get chromeBtn() { return $('//*[text()="chrome"]') }

    get addToChromeBtn() { return $('//*[text()="Add to Chrome"]') }

    get connectBtn() { return $('//*[text()="Connect"]') }


    async connect_phantom1(seed1, seed2, seed3, seed4, seed5, seed6, seed7, seed8, seed9, seed10, seed11, seed12, pass, confirmpass) {

        await browser.switchWindow("https://app.kanalabs.io/")
        
        await swap_basePage.first_chain_dropdown.click();
        await swap_basePage.select_solana.click();

        await swap_basePage.selectBtn.click();
       
        await swap_basePage.getStratedBtn.click();
        await swap_basePage.connectBtn.click();

        await browser.switchWindow("https://phantom.app/")
        await this.downloadBtn.click();
        await this.chromeBtn.click();
        await this.addToChromeBtn.click();

        await browser.pause(5000);

        
        await browser.keys("Home");
        await browser.keys("Enter");



        //await browser.newWindow('chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html')

          await browser.switchWindow(process.env.CHROMEEXTENSION)

        await this.importBtn.click();

        await this.seed1.setValue(seed1);
        await this.seed2.setValue(seed2);
        await this.seed3.setValue(seed3);
        await this.seed4.setValue(seed4);
        await this.seed5.setValue(seed5);
        await this.seed6.setValue(seed6);
        await this.seed7.setValue(seed7);
        await this.seed8.setValue(seed8);
        await this.seed9.setValue(seed9);
        await this.seed10.setValue(seed10);
        await this.seed11.setValue(seed11);
        await this.seed12.setValue(seed12);

        await this.importWalletBtn.click();
        await browser.pause(5000)

        await this.importSelectedAccBtn.click();

        await this.inputPassword.setValue(pass);
        await this.confirmPassword.setValue(confirmpass);

        await this.checkBox.click();
        await this.continueBtn.click();
        await this.secondContinueBtn.click();
        await this.finishBtn.click();

    }



    async connect_phantom(seed1, seed2, seed3, seed4, seed5, seed6, seed7, seed8, seed9, seed10, seed11, seed12, pass, confirmpass) {

        await browser.newWindow('chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html')

        //  await browser.switchWindow(process.env.CHROMEEXTENSION)

        await this.importBtn.click();

        await this.seed1.setValue(seed1);
        await this.seed2.setValue(seed2);
        await this.seed3.setValue(seed3);
        await this.seed4.setValue(seed4);
        await this.seed5.setValue(seed5);
        await this.seed6.setValue(seed6);
        await this.seed7.setValue(seed7);
        await this.seed8.setValue(seed8);
        await this.seed9.setValue(seed9);
        await this.seed10.setValue(seed10);
        await this.seed11.setValue(seed11);
        await this.seed12.setValue(seed12);

        await this.importWalletBtn.click();
        await browser.pause(5000)

        await this.importSelectedAccBtn.click();

        await this.inputPassword.setValue(pass);
        await this.confirmPassword.setValue(confirmpass);

        await this.checkBox.click();
        await this.continueBtn.click();
        await this.secondContinueBtn.click();
        await this.finishBtn.click();

    }

    async verifyTransaction(result) {
        await browser.switchWindow("https://app.kanalabs.io/")

        await browser.pause(5000)
        var res = await basePage.result.getText();
        fs.appendFile(result, "Result :" + res + '\n', function (err) {
            console.log(err)
        })
    }

    async() {

    }
    async() {

    }
    async() {

    }
    async() {

    }
    async() {

    }
    async() {

    }
    async() {

    }
    async() {

    }





}


module.exports = new phantomSwap();