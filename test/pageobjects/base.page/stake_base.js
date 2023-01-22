const swap_basePage = require('./swap_base.page');
const stake_base = require('../../pageobjects/base.page/stake_base');
const pontem_swap_page = require("../../pageobjects/aptos_wallets.page/pontem_swap_page");

require('dotenv').config()

var fs = require('fs');

class baseStakePage {

    get header_SwapBtn() {
        return $('//*[text()="Swap"]');
    }

    get stakeSelect_WalletBtn() {
        return $('button[class="wallet-adapter-button wallet-adapter-button-trigger"]');
    }

    get aptosDropdown() {
        return $('#chain_aptos');
    }

    get solanaDropdown() {
        return $('#chain_sol');
    }
    get unStakeTab() {
        return $('li[value="unstake"]');
    }
    get stakeTab() {
        return $('li[value="stake"]');
    }
    get maxBtn() {
        return $('button[class="Staking_max_staking__admKW"]');
    }
    get stakeBtn() {
        return $('#swap_init_button');
    }
    get unStakeBtn() {
        return $('swap_init_button');
    }
    get platformHeaders() {
        return $('tr[class="Staking_table_column_staking__jkd1U"]');
    }

    get inputAmount() {
        return $('#token1_input_val');
    }
    get stake_unstake_option() {
        return $('//*[text()="Stake/Unstake"]');
    }


    get current_Balance() {
        return $('div[class="Staking_cur_balance_sec_stake__p7xnC"]');
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
    get() {
        return $('');
    } get() {
        return $('');
    }
    get() {
        return $('');
    }
    get() {
        return $('');
    }


    async enter_StakeAmount(stakeamt) {
        await this.stakeBtn.waitForDisplayed({ timeout: 10000 });
        await this.inputAmount.setValue(stakeamt)
    }

    async enter_UnStakeAmount(unstakeamt) {
        await this.unStakeBtn.waitForDisplayed({ timeout: 10000 });
        await this.inputAmount.setValue(unstakeamt)

    }



    async click_StakeBtn() {
        await this.stakeBtn.waitForDisplayed({ timeout: 10000 });
        await expect(this.stakeBtn).toBeDisplayed();
        var stakeText = await this.stakeBtn.getText();

        if (stakeText = process.env.STAKETEXT) {
            await this.stakeBtn.click();
            await browser.pause(5000)
            await browser.switchWindow(process.env.PONTEMWALLET)
            await pontem_swap_page.confirmBtn.click();

            await browser.switchWindow(process.env.MAINNETURL)
            await browser.pause(4000)
            var res = await swap_basePage.result.getText();
            fs.appendFile('./reports/aptos_stake/pontem_stake.txt', '\n' + "Result : " + res, function (err) {
                console.log(err)
            })

        }
        else {
            fs.appendFile('./reports/aptos_stake/pontem_stake.txt', '\n' + "Error : " + stakeText, function (err) {
                console.log(err)
            })
        }
    }

    async click_UnStakeBtn() {
        await this.unStakeBtn.waitForDisplayed({ timeout: 10000 });
        await expect(this.unStakeBtn).toBeDisplayed();


        var unstakeText = await this.unStakeBtn.getText();

        if (unStakeBtn = process.env.UNSTAKETEXT) {
            await this.unStakeBtn.click();
        }
        else {
            fs.appendFile('./reports/aptos_stake/pontem_stake.txt', '\n' + "Error : " + unstakeText, function (err) {
                console.log(err)
            })
        }



    }
    async click_stakeTab() {
        await this.stakeTab.waitForDisplayed({ timeout: 10000 });
        await expect(this.stakeTab).toBeDisplayed();
        await this.stakeTab.click();
    }
    async click_UnstakeTab() {
        await this.unStakeTab.waitForDisplayed({ timeout: 10000 });
        await expect(this.unStakeTab).toBeDisplayed();
        await this.unStakeTab.click();
    }

    async click_stake_unstakeOption() {

        await browser.switchWindow(process.env.MAINNETURL)
        await this.stake_unstake_option.waitForDisplayed({ timeout: 10000 });
        await this.stake_unstake_option.click();
    }

    async click_MaxBtn() {
        await this.maxBtn.waitForDisplayed({ timeout: 10000 });
        await this.maxBtn.click();
    }

    async verify_reduce_fees_Max_amount() {
        await this.current_Balance.waitForDisplayed({ timeout: 10000 });

        var maxamount = await this.inputAmount.getText();
        var currentBalance = await this.current_Balance.getText();
        
        var maxamount = maxamount.replace(maxamount + (0.1))

            (maxamount == currentBalance)

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

module.exports = new baseStakePage();