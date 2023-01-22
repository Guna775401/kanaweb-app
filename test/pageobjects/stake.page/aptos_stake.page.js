const stake_base = require("../base.page/stake_base");

require('dotenv').config()

var fs = require('fs');


class aptosStake {


    get headerName() { return $('.Staking_table_column_staking__jkd1U'); }

    get ditto_Table_Name() { return $('.table_column_staking_items_selection'); }

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


async verify_Aptos_stake_page() {
        await stake_base.aptosDropdown.waitForDisplayed({ timeout: 5000 });
        await expect(stake_base.aptosDropdown).toBeDisplayed();

        var headers = await this.headerName.getText();
       // var platform_Headers_Name = await this.ditto_Table_Name.getText();
        (headers == process.env.HEADERS)

        //    var platform_Headers_Name1 = platform_Headers_Name.replace(/[^0-9,^.% ,]/g)
        //      (platform_Headers_Name1 == process.env.APTOSTABLE)
    }


    async() { }


    
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { } async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }
    async() { }

}

module.exports = new aptosStake();