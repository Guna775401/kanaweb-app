

const stake_base = require("../base.page/stake_base");

var fs = require('fs');

class solanaStake {



    get marinadePlatformName() {
        return $('//*[text()="Marinade"]');
    }

    get lido_platform() {
        return $('tr[class="table_column_staking_items"]');
    }
    get marinade_platform() {
        return $('tr[class="table_column_staking_items_selection"]');
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


    async verify_solana_stake_page() {
        await stake_base.solanaDropdown.waitForDisplayed({ timeout: 10000 });
        await expect(stake_base.solanaDropdown).toBeDisplayed();
        await expect(this.marinade_platform).toBeDisplayed();
        await expect(this.lido_platform).toBeDisplayed();
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
    async() {

    }






}

module.exports = new solanaStake();