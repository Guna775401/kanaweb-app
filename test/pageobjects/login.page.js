



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
    get headerSwapButton() {
        return $('div[class="swap_first"]');
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
        return $('div[class="Toastify__toast-body"]');
    }

    get successSwap() {
        return $('//*[text()="Swap transaction success "]');
    }

    // Tokens 

    get uSDTText() {
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        return uSDTtxt;
    }
    get uSDCText() {
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        return uSDCtxt;
    }
    get sOLText() {
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        return sOLtxt;
    }
    get sRMText() {
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        return sRMtxt;
    }
    get uSTText() {
        const usttxt = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const uSTtxt = $(`android=${usttxt}`)
        return uSTtxt;
    }
    get oRCAText() {
        const orcatxt = 'new UiSelector().text("ORCA").className("android.widget.TextView")'
        const oRCAtxt = $(`android=${orcatxt}`)
        return oRCAtxt;
    }
    get soSUSHIText() {
        const sosushiItxt = 'new UiSelector().text("soSUSHI").className("android.widget.TextView")'
        const soSUSHItxt = $(`android=${sosushiItxt}`)
        return soSUSHItxt;
    }
    get mSolText() {
        const msoltxt = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
        const mSOLTxt = $(`android=${msoltxt}`)
        return mSOLTxt;
    }
    get uSDHText() {
        const usdhtxt = 'new UiSelector().text("USDH").className("android.widget.TextView")'
        const uSDHtxt = $(`android=${usdhtxt}`)
        return uSDHtxt;
    }

    get c98Text() {
        const c98txt = 'new UiSelector().text("C98").className("android.widget.TextView")'
        const c98txt1 = $(`android=${c98txt}`)
        return c98txt1;
    }
    get nINJAText() {
        const nINJAtxt = 'new UiSelector().text("NINJA").className("android.widget.TextView")'
        const nINJAtxt1 = $(`android=${nINJAtxt}`)
        return nINJAtxt1;
    }

    get uSDTetText() {
        const uSDTettxt = 'new UiSelector().text("USDTet").className("android.widget.TextView")'
        const uSDTettxt1 = $(`android=${uSDTettxt}`)
        return uSDTettxt1;
    }
    get stSolText() {
        const stSoltxt = 'new UiSelector().text("stSOL").className("android.widget.TextView")'
        const stSoltxt1 = $(`android=${stSoltxt}`)
        return stSoltxt1;
    }
    get soETHText() {
        const soETHtxt = 'new UiSelector().text("soETH").className("android.widget.TextView")'
        const soETHtxt1 = $(`android=${soETHtxt}`)
        return soETHtxt1;
    }
    get scnSOLText() {
        const scnSOLtxt = 'new UiSelector().text("scnSOL").className("android.widget.TextView")'
        const scnSOLtxt1 = $(`android=${scnSOLtxt}`)
        return scnSOLtxt1;
    }
    get mNDEText() {
        const mNDEtxt = 'new UiSelector().text("MNDE").className("android.widget.TextView")'
        const mNDEtxt1 = $(`android=${mNDEtxt}`)
        return mNDEtxt1;
    }
    get soTOMOText() {
        const soTOMOtxt = 'new UiSelector().text("soTOMO").className("android.widget.TextView")'
        const soTOMOtxt1 = $(`android=${soTOMOtxt}`)
        return soTOMOtxt1;
    }
    get gSTText() {
        const gSTtxt = 'new UiSelector().text("GST").className("android.widget.TextView")'
        const gSTtxt1 = $(`android=${gSTtxt}`)
        return gSTtxt1;
    }
    get dFLText() {
        const dFLtxt = 'new UiSelector().text("DFL").className("android.widget.TextView")'
        const dFLtxt1 = $(`android=${dFLtxt}`)
        return dFLtxt1;
    }
    get searchForTokenText() {
        const searchFortokenText = 'new UiSelector().text("Search by token or Address").className("android.widget.TextView")'
        const searchFortokenText1 = $(`android=${searchFortokenText}`)
        return searchFortokenText1;
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
        //await browser.pause(10000)
        await browser.switchWindow("https://version1.kana-aggregator-web.pages.dev/")
        await this.youPayInputAmount.waitForDisplayed({ timeout: 30000 });
        await this.youPayInputAmount.clearValue();
        await browser.pause(10000)
        await this.youPayInputAmount.setValue(amount)
    }
    async clickSwapButton() {
        // await this.firstRoute.scrollIntoView();
        await browser.pause(15000)
        await this.swapButton.scrollIntoView();
        await this.swapButton.click();
        await browser.pause(5000)
        await browser.switchWindow("Phantom Wallet")
        await this.approveButton.waitForDisplayed({ timeout: 30000 });
        await this.approveButton.click();
    }
    async clickFirstRoute() {
        //  await browser.pause(15000)
        await this.firstRoute.scrollIntoView();
        // await this.firstRoute.waitForDisplayed({ timeout: 30000 });
        await this.firstRoute.click();
    }
    async clickApproveButton() {
        await browser.pause(20000)
        await this.approveButton.waitForDisplayed({ timeout: 50000 });
        await this.approveButton.click();
    }

    async verifyTransaction() {
        await browser.switchWindow("https://version1.kana-aggregator-web.pages.dev/")

        //await this.successSwap.waitForDisplayed({ timeout: 30000 });

        await browser.pause(15000)
        var res = await this.result.getText();


        fs.appendFile('./reports/result.txt', res + '\n', function (err) {
            console.log(err)
        })
    }

    open() {
        return super.open('walletConnet');
    }



    async selectUSDCtoSOL(usdc, sol) {
        await this.youPayToken.click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await this.searchField.setValue(usdc);
        await this.uSDCText.click();

        await this.youReceiveToken.click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await this.searchField.setValue(sol);
        await this.sOLText.click();
    }

    async selectUSDCtoUSDT(usdc, usdt) {
        await this.youPayToken.click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await this.searchField.setValue(usdc);
        await this.uSDCText.click();

        await this.youReceiveToken.click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await this.searchField.setValue(usdt);
        await this.uSDTText.click();
    }

    async selectUSDTtoUSDC(usdt, usdc) {
        await this.youPayToken.click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await this.searchField.setValue(usdt);
        await this.uSDTText.click();

        await this.youReceiveToken.click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await this.searchField.setValue(usdc);
        await this.uSDCText.click();
    }




    async selectUSDTtoSOL(usdt, sol) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(sol);
        await this.sOLText.click();
    }



    async selectSRMtoSOL(srm, sol) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
         await (await this.searchField).setValue(srm);
        await this.sRMText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(sol);
        await this.sOLText.click();
    }

    async selectSRMtoUST(srm, ust) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(srm);
        await this.sRMText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(ust);
        await this.uSTText.click();
    }

    async selectUSTtoSRM(ust, srm) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(ust);
        await this.uSTText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(srm);
        await this.sRMText.click();
    }

    async selectUSDHtoUSDT(usdh, usdt) {
        await browser.pause(10000)
        await this.headerSwapButton.scrollIntoView();

        await (await this.youPayToken).click();
        await browser.pause(5000)
        //await expect(this.searchForTokenText).toBeDisplayed();
       // await expect(await this.searchForTokenText).toBeDisplayed();
        //await this.searchForTokenText.isBeDisplayed();
        await (await this.searchField).setValue(usdh);
        await this.uSDHText.click();

        await (await this. youReceiveToken).click();
       // await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(usdt);
        await this.uSDTText.click();
    }

    async seletUSDTtoUSDH(usdt, usdh) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(usdt);
        await this.uSDTText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(usdh);
        await this.uSDHText.click();
    }

    async selectSOLtomSOL(mSOL) {
        await expect(this.sOLText).toBeDisplayed();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(mSOL);
        await this.mSolText.click();
    }

    async seletMSOLtoSOL(mSOL, sol) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(mSOL);
        await this.mSolText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(sol);
        await this.sOLText.click();
    }

    async selectSoSUSHItoORCA(soSUSHI, orca) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(soSUSHI);
        await this.soSUSHIText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(orca);
        await this.oRCAText.click();
    }


    async selectORCAtosoSUSHI(orca, soSUSHI) {

        await (await this.youPayToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(orca);
        await this.oRCAText.click();

        await (await this. youReceiveToken).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.searchField).setValue(soSUSHI);
        await this.soSUSHIText.click();
    }

}

module.exports = new LoginPage();
