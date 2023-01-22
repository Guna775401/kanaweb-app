


const swap_basePage = require('../base.page/swap_base.page');

var fs = require('fs');

require('dotenv').config()

const Key =  require('webdriverio')


class petraswapPage {


    get importWalletBtn() { return $('button[class="chakra-button css-d74vtl"]') }

    get import_MnemonicBtn() { return $('//*[text()="Import mnemonic"]') }

    get seeds() { return $('input[name="mnemonic-a"]') }

    get continueBtn() { return $('button[class="chakra-button css-jpbmhh"]') }

    get enterPassword() { return $('input[name="initialPassword"]') }

    get confirmPassword() { return $('input[name="confirmPassword"]') }

    get checkBox() { return $('.chakra-checkbox__control css-omfrpb') }

    get continueBtn1() { return $('.chakra-button css-jpbmhh') }

    get() { return $('') }

    get() { return $('') }

    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }



    // Petra wallet

    get selectPetraWallet() { return $('//*[text()="Petra"]') }





    async connect_Petra(seeds, pass, confirmpass) {


        await swap_basePage.selectBtn.click();
        await this.selectPetraWallet.click();
        
        await browser.pause(10000)

        await browser.switchWindow(process.env.PETRA_EXTENSION)

        await swap_basePage.addToChromeBtn.click();

        
        await browser.pause(10000)

        //await browser.keys("\ue004") //Tab


        await browser.keys("\uE007") //Enter

       // await browser.setValue('input', ['Tab'])

        // await browser.setValue('input', ['Enter'])

        // await browser.keys(Key.Home)

        // await browser.keys(Enter)

        //await (process.env.CHROMEEXTENSION).waitForDisplayed({ timeout: 15000 });


       // await browser.acceptAlert()

        await browser.pause(10000)

        await browser.switchWindow(process.env.CHROMEEXTENSION)

        await this.importWalletBtn.click();
        await this.import_MnemonicBtn.click();
        await this.seeds.setValue(seeds);
        await this.continueBtn.click();

        await this.enterPassword.setValue(pass);

        await this.confirmPassword.setValue(confirmpass);

        await this.checkBox.click();

        await this.continueBtn1.click();

        // await this.first_seed.setValue(seed1);
        // await this.second_seed.setValue(seed2);
        // await this.third_seed.setValue(seed3);
        // await this.fourth_seed.setValue(seed4);
        // await this.fivth_seed.setValue(seed5);
        // await this.sixth_seed.setValue(seed6);
        // await this.seventh_seed.setValue(seed7);
        // await this.eight_seed.setValue(seed8);
        // await this.nineth_seed.setValue(seed9);
        // await this.tenth_seed.setValue(seed10);
        // await this.leventh_seed.setValue(seed11);
        // await this.tweleth_seed.setValue(seed12);

        // await this.password.setValue(pass);
        // await this.confirm_password.setValue(confirmpass);
        // await this.importBtn.click();
        // await browser.pause(3000)

        // await browser.switchWindow(process.env.MAINNETURL)
        // await swap_basePage.selectBtn.waitForDisplayed({ timeout: 15000 });



    }

    async select_petra() {

        await swap_basePage.selectBtn.click();
        await this.selectPetraWallet.click();
        await browser.pause(3000)




        await browser.switchWindow(process.env.PONTEMWALLET)
        await browser.pause(3000)
        await this.confirmBtn.click();
        await browser.switchWindow(process.env.MAINNETURL)
        await browser.pause(2000)
    }


}
module.exports = new petraswapPage();