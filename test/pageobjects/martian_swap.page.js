


class martianSwap {


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

    get approveButtonMartain() {
        return $('div[class^="sc-ipEyDJ"]');
    }

// Martian Wallet

get selectMartain() {
    return $('//*[text()="Martian"]');
}

get iHaveAlreadyAccBtn() {
    return $('div[class="MuiGrid-root css-owchxn"]');
}

get seedPhraseBtn() {
    return $('/html/body/div/div[2]/main/div/div[4]/div/div[1]/p');
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
    return $('div[class="sc-hLBbgP dbAFr"]');
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
get selectBtn() {
    return $('//*[text()="Select Wallet"]');
}
get enterPass() {
    return $('input[type="password"]');
}












    async martianWalletConnect(seedPhrase1, seedPhrase2, seedPhrase3, seedPhrase4, seedPhrase5, seedPhrase6, seedPhrase7, seedPhrase8, seedPhrase9, seedPhrase10, seedPhrase11, seedPhrase12, pass) {

        //await browser.pause(15000)

        // await browser.switchWindow("chrome-extension")

        // await this.iHaveAlreadyAccBtn.click();
        //await this.seedPhraseBtn.waitForDisplayed({ timeout: 5000 });

        //        await this.seedPhraseBtn.click();

        // await this.seed1.setValue(seedPhrase1);

        // await this.seed2.setValue(seedPhrase2);
        // await this.seed3.setValue(seedPhrase3);
        // await this.seed4.setValue(seedPhrase4);
        // await this.seed5.setValue(seedPhrase5);
        // await this.seed6.setValue(seedPhrase6);
        // await this.seed7.setValue(seedPhrase7);
        // await this.seed8.setValue(seedPhrase8);
        // await this.seed9.setValue(seedPhrase9);
        // await this.seed10.setValue(seedPhrase10);
        // await this.seed11.setValue(seedPhrase11);
        // await this.seed12.setValue(seedPhrase12);

        await browser.pause(450000);

        //  await this.importWalletBtn.click();

        // await this.martianpassword.setValue(martianpass);
        // await this.martianConfirmPassword.click(martianconfirmpass);
        // await this.martianCheckBox.click();

        // await this.martianContinueBtn.click();
        // await this.martianContinueBtn1.click();
        // await this.martianFinishBtn.click();



        // await browser.switchWindow("https://develop.kana-aggregator-web.pages.dev/")
        // //await browser.pause(5000)
        // await this.selectBtn.waitForDisplayed({ timeout: 15000 });

        // await this.selectBtn.click();

        // await this.selectMartain.click();
        // await browser.pause(3000)
        // await browser.switchWindow("Martian wallet")

        // await this.enterPass.setValue(pass)

        // await this.connectBtn.click();

    }

    async approveMartian() {
        await browser.pause(10000)
        await browser.switchWindow("Martian wallet")
        await this.approveButtonMartain.waitForDisplayed({ timeout: 10000 });
        await this.approveButtonMartain.click();
    }




}

module.exports = new martianSwap();
