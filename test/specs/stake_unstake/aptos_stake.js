
const stake_base = require('../../pageobjects/base.page/stake_base');
const aptos_stakePage = require('../../pageobjects/stake.page/aptos_stake.page');

const pontem_swap_page = require("../../pageobjects/aptos_wallets.page/pontem_swap_page");


require('dotenv').config()

describe.only('', () => {

    it(' Ditto stake decimal amount stake ', async () => {
        await browser.url('/')
        await browser.maximizeWindow();
        await pontem_swap_page.connect_pontem(process.env.MAINSEED1, process.env.MAINSEED2, process.env.MAINSEED3, process.env.MAINSEED4, process.env.MAINSEED5, process.env.MAINSEED6, process.env.MAINSEED7, process.env.MAINSEED8, process.env.MAINSEED9, process.env.MAINSEED10, process.env.MAINSEED11, process.env.MAINSEED12, process.env.PIN, process.env.CONFIRMPIN)
        await stake_base.click_stake_unstakeOption();
         await aptos_stakePage.verify_Aptos_stake_page();
         await pontem_swap_page.select_pontem();
        // await stake_base.enter_StakeAmount(process.env.DECIMALTWO);
        // await stake_base.click_StakeBtn();
    })


    it('verify Max amount is fees reduce after ', async () => {

        await stake_base.click_MaxBtn();
        await stake_base.verify_reduce_fees_Max_amount();

    })





    // it('', async () => {
    // })

    // it('', async () => {
    // })





})


describe('', () => {

    it('', async () => {


    })
})

describe('', () => {

    it('', async () => {


    })
})