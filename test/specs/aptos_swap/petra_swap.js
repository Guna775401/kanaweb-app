const petra_swap_page = require('../../pageobjects/aptos_wallets.page/petra_swap_page');




require('dotenv').config()

describe('Aptos Swap for Pontem wallet For Mainnet', () => {

    it.only('AS1 : APT to USDT first market place swap', async () => {

        await browser.url('/')
        await browser.maximizeWindow();
        await petra_swap_page.connect_Petra(process.env.APTOSSEEDS, process.env.PASSWORD, process.env.PASSWORD)
      
   
   
   
    });
    
});