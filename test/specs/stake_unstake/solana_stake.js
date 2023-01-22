
const solanaStakePage  = require('../../pageobjects/stake.page/solana_stake.page')




require('dotenv').config()




describe('Solana Marinade stake', () => {

    it('', async () => {

        await browser.url('/')
        await browser.maximizeWindow();
        await solanaStakePage.verify_solana_stake_page();

  
  
    })

    it('', async () => {

    })

    it('', async () => {

    })
    it('', async () => {

    })




})

// describe('', () => {

//     it('', async () => {


//     })
//     it('', async () => {


//     })
//     it('', async () => {


//     })

//     it('', async () => {


//     })



// })