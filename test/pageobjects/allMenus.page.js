import { $ } from "@wdio/globals";

class allMenus {
  // Elemen selector
  get burgerMenu() {
    return $("#react-burger-menu-btn");
  }

  get aboutMenuBtn() {
    return $("#about_sidebar_link");
  }

  get titleRoi() {
    return $('//span[text()="ROI"]');
  }

  get titlePayback() {
    return $('//span[text()="PAYBACK"]');
  }

  get titlePresent() {
    return $('//span[text()="NET PRESENT VALUE"]');
  }

  get titleTimeSaving() {
    return $('//span[text()="DEVELOPER AND QA TIME SAVINGS"]');
  }

  get sauceCrossBrowser() {
    return $('//h4[text()="Sauce Cross-Browser"]');
  }

  get sauceMobile() {
    return $('//h4[text()="Sauce Mobile"]');
  }

  get sauceMobileApp() {
    return $('//h4[text()="Sauce Mobile App Distribution"]');
  }

  get sauceError() {
    return $('//h4[text()="Sauce Error Reporting"]');
  }

  get sauceVisual() {
    return $('//h4[text()="Sauce Visual"]');
  }

  get addBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get addBike() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get addTshirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  get cartBadge() {
    return $('//span[@data-test="shopping-cart-badge"]');
  }

  get resetMenuBtn() {
    return $("#reset_sidebar_link");
  }

  get closeBtn() {
    return $("#react-burger-cross-btn");
  }

  get removeBackpackBtn() {
    return $("#remove-sauce-labs-backpack");
  }

  get removeBikeBtn() {
    return $("#remove-sauce-labs-bike-light");
  }

  get removeTshirtBtn() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }

  get iconCart() {
    return $('//a[@data-test="shopping-cart-link"]');
  }

  get continueShoppingBtn() {
    return $("#continue-shopping");
  }

  get logout() {
    return $("#logout_sidebar_link");
  }

  // Page actions
  async aboutMenu() {
    await this.burgerMenu.click();
    await this.aboutMenuBtn.click();
    await this.titleRoi.waitForExist({ timeout: 15000 });
    await this.titleRoi.waitForDisplayed({ timeout: 15000 });
    await this.titleRoi.scrollIntoView({ behavior: "smooth" });
    await this.sauceCrossBrowser.scrollIntoView({ behavior: "smooth" });
    await browser.back();
  }

  async resetMenu() {
    await this.addBackpack.click();
    await this.addBike.click();
    await this.addTshirt.click();
    await this.cartBadge.waitForExist({ timeout: 5000 });
    await this.cartBadge.waitForDisplayed({ timeout: 5000 });
    await this.burgerMenu.click();
    await this.resetMenuBtn.click();
    await this.closeBtn.click();
    await this.iconCart.click();
    await this.continueShoppingBtn.click();
  }

  async logoutProcess() {
    await this.burgerMenu.click();
    await this.logout.click();
  }

  async openPage() {
    await browser.url("https://www.saucedemo.com/");
  }
}

export default new allMenus();
