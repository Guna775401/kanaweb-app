const pontem_swap_page = require("../../pageobjects/aptos_wallets.page/pontem_swap_page");
const fewchaSwapPage = require("../../pageobjects/aptos_wallets.page/fewcha_swap.page");

const swap_basePage = require("../../pageobjects/base.page/swap_base.page");
const martian_swapPage = require("../../pageobjects/aptos_wallets.page/martian_swap.page");


require('dotenv').config()

describe('Aptos Swap for Pontem wallet For Mainnet', () => {

    it.only('AS1 : APT to USDT first market place swap', async () => {

        await browser.url('/')
        await browser.maximizeWindow();
        await martian_swapPage.martian_WalletConnect(process.env.MAINSEED1, process.env.MAINSEED2, process.env.MAINSEED3, process.env.MAINSEED4, process.env.MAINSEED5, process.env.MAINSEED6, process.env.MAINSEED7, process.env.MAINSEED8, process.env.MAINSEED9, process.env.MAINSEED10, process.env.MAINSEED11, process.env.MAINSEED12, process.env.PIN)
        await swap_basePage.enterAmount(process.env.DECIMALTWO);
        await martian_swapPage.approveMartian();

    });






})