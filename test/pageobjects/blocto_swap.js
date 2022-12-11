
class bloctoSwap{
//Blocto 

get bloctoBtn() {
    return $('//*[text()="Blocto"]');
}
get addEmail() {
    return $('input[class="Input__InputComponent-bOjpRT ezwfep"]');
}
get signBtn() {
    return $('div[class^="Button__StyledSpinner-iCoEkr"]');
}



async bloctowalletConnect() {
    await loginPage.selectBtn.waitForDisplayed({ timeout: 15000 });
    await loginPage.selectBtn.click();
    await this.bloctoBtn.click();


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





}


module.exports= new bloctoSwap();