const swap_basePage = require('../base.page/swap_base.page');


var fs = require('fs');



require('dotenv').config()

class pontemSwap {


    // pontem wallet extension open link :  chrome-extension://phkbamefinggmakgklpkljjmgibohnba/index.html#/auth/unlock?flow=import&r=/auth/reset

    get importWalletBtn() {
        return $('//*[text()="Import Wallet"]');
    }

    get first_seed() {
        return $('#first');
    }
    get second_seed() {
        return $('#second');
    }
    get third_seed() {
        return $('#third');
    }
    get fourth_seed() {
        return $('#fourth');
    }
    get fivth_seed() {
        return $('#fifth');
    }
    get sixth_seed() {
        return $('#sixth');
    }
    get seventh_seed() {
        return $('#seventh');
    }
    get eight_seed() {
        return $('#eighth');
    }
    get nineth_seed() {
        return $('#ninth');
    }
    get tenth_seed() {
        return $('#tenth');
    }
    get leventh_seed() {
        return $('#eleventh');
    }
    get tweleth_seed() {
        return $('#twelfth');
    }


    get password() {
        return $('#password');
    }
    get confirm_password() {
        return $('#confirm');
    }
    get importBtn() {
        return $('button[type="submit"]');
    }


    get enterPassword() {
        return $('#password');
    }
    get unlockBtn() {
        return $('button[type="submit"]');
    }



    get connect_pontemBtn() {
        return $('button[styledvariant="primary"]');
    }

    get selectPontemWallet() {
        return $('//*[text()="Pontem"]');
    }
    get confirmBtn() {
        return $('//*[text()="Confirm"]');
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

    get() { return $('') }

    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }
    get() { return $('') }

    get() {
        return $('')
    }


    async connect_pontem1(seed1, seed2, seed3, seed4, seed5, seed6, seed7, seed8, seed9, seed10, seed11, seed12, pass, confirmpass) {



        await browser.pause(1000)
        await browser.switchWindow(process.env.CHROMEEXTENSION)

        await this.importWalletBtn.click();
        await this.first_seed.setValue(seed1);
        await this.second_seed.setValue(seed2);
        await this.third_seed.setValue(seed3);
        await this.fourth_seed.setValue(seed4);
        await this.fivth_seed.setValue(seed5);
        await this.sixth_seed.setValue(seed6);
        await this.seventh_seed.setValue(seed7);
        await this.eight_seed.setValue(seed8);
        await this.nineth_seed.setValue(seed9);
        await this.tenth_seed.setValue(seed10);
        await this.leventh_seed.setValue(seed11);
        await this.tweleth_seed.setValue(seed12);

        await this.password.setValue(pass);
        await this.confirm_password.setValue(confirmpass);
        await this.importBtn.click();
        await browser.pause(3000)

        await browser.switchWindow(process.env.MAINNETURL)
        await swap_basePage.selectBtn.waitForDisplayed({ timeout: 15000 });

        await swap_basePage.selectBtn.click();
        await this.selectPontemWallet.click();
        await browser.pause(3000)
        await browser.switchWindow(process.env.PONTEMWALLET)
        await browser.pause(3000)
        await this.confirmBtn.click();
        await browser.switchWindow(process.env.MAINNETURL)
        await browser.pause(2000)

    }



    async connect_pontem(seed1, seed2, seed3, seed4, seed5, seed6, seed7, seed8, seed9, seed10, seed11, seed12, pass, confirmpass) {

        await browser.pause(5000)
        await browser.switchWindow(process.env.CHROMEEXTENSION)

        await this.importWalletBtn.click();
        await this.first_seed.setValue(seed1);
        await this.second_seed.setValue(seed2);
        await this.third_seed.setValue(seed3);
        await this.fourth_seed.setValue(seed4);
        await this.fivth_seed.setValue(seed5);
        await this.sixth_seed.setValue(seed6);
        await this.seventh_seed.setValue(seed7);
        await this.eight_seed.setValue(seed8);
        await this.nineth_seed.setValue(seed9);
        await this.tenth_seed.setValue(seed10);
        await this.leventh_seed.setValue(seed11);
        await this.tweleth_seed.setValue(seed12);

        await this.password.setValue(pass);
        await this.confirm_password.setValue(confirmpass);
        await this.importBtn.click();
        await browser.pause(3000)

        
    }

    async select_pontem(){

       // await browser.switchWindow(process.env.MAINNETURL)
        await swap_basePage.selectBtn.waitForDisplayed({ timeout: 15000 });

        await swap_basePage.selectBtn.click();
        await this.selectPontemWallet.click();
        await browser.pause(3000)
        await browser.switchWindow(process.env.PONTEMWALLET)
        await browser.pause(3000)
        await this.confirmBtn.click();
        await browser.pause(5000)
        await browser.switchWindow(process.env.MAINNETURL)
      }

    async approvePontem() {
        await browser.pause(5000)
        await browser.switchWindow(process.env.PONTEMWALLET)
        // await this.connect_pontemBtn.waitForDisplayed({ timeout: 10000 });
        // await this.connect_pontemBtn.click();
        await this.confirmBtn.click();
    }

    async verifyTransaction_Pontem() {
        await browser.switchWindow(process.env.MAINNETURL)

        var route = await swap_basePage.firstRoute.getText();
        await expect(swap_basePage.result).toHaveText(process.env.SENDSWAPTOAST)

        await browser.pause(5000)
        var res = await swap_basePage.result.getText();

        fs.appendFile('./reports/aptos_swap/pontem_result.txt', '\n' + "Route:" + route + '\n' + "Result :" + res, function (err) {
            console.log(err)
        })
    }




    async click_Pontem_SwapButton() {
        await browser.pause(7000)
        await swap_basePage.swapBtn.scrollIntoView();

        var swaptext = await swap_basePage.swapBtn.getText();
        var routescount = await swap_basePage.routes_count.getText();

        if (swaptext == process.env.SWAPTEXT) {

            await swap_basePage.swapBtn.click();

            await browser.pause(5000)
            await browser.switchWindow(process.env.PONTEMWALLET)
            await this.confirmBtn.click();

            await browser.switchWindow(process.env.MAINNETURL)

            var route = await swap_basePage.firstRoute.getText();
            await expect(swap_basePage.result).toHaveText(process.env.SENDSWAPTOAST)

            await browser.pause(5000)
            var res = await swap_basePage.result.getText();

            fs.appendFile('./reports/aptos_swap/pontem_result.txt', '\n' + "Route count : " + routescount + " Route Name " + route + '\n' + "Result :" + res, function (err) {
                console.log(err)
            })
        }
        else {
            var youpaytokenName = await swap_basePage.youPayDropdown.getText();
            var youreceivetokenName = await swap_basePage.youReceiveDropdown.getText();

            fs.appendFile('./reports/aptos_swap/pontem_result.txt', '\n' + "Result:" + swaptext + "Tokens Names :" + youpaytokenName + youreceivetokenName, function (err) {
                console.log(err)
            })
        }
    }


    async() {

    }



}


module.exports = new pontemSwap();