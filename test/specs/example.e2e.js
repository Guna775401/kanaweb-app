const loginPage = require('../pageobjects/login.page');

require('dotenv').config()



describe('My Login application', () => {

    it('should login with valid credentials', async () => {
    await browser.url('/')
     await browser.maximizeWindow();
     await loginPage.walletConnet(process.env.SEED1,process.env.SEED2,process.env.SEED3,process.env.SEED4,process.env.SEED5,process.env.SEED6,process.env.SEED7,process.env.SEED8,process.env.SEED9,process.env.SEED10,process.env.SEED11,process.env.SEED12,process.env.PASSWORD, process.env.PASSWORD);
     await loginPage.enterAmount(process.env.SOLAMOUNT)
     await loginPage.clickFirstRoute();
     await loginPage.clickSwapButton();
     await loginPage.clickApproveButton();
     await loginPage.verifyTransaction();

    
    });
});


