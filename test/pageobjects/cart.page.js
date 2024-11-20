import { $ } from "@wdio/globals";

class cartPage {
  // Elemen selector
  get addBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get cartBadge() {
    return $('//span[@data-test="shopping-cart-badge"]');
  }

  get iconCart() {
    return $('//a[@data-test="shopping-cart-link"]');
  }

  get titleQty() {
    return $('//div[@data-test="cart-quantity-label"]');
  }

  get titleDesc() {
    return $('//div[@data-test="cart-desc-label"]');
  }

  get totalPrice() {
    return $('//div[@data-test="inventory-item-price"]');
  }

  get removeBackpackBtn() {
    return $("#remove-sauce-labs-backpack");
  }

  get removeTshirtBtn() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }

  get removeJacketBtn() {
    return $("#remove-sauce-labs-fleece-jacket");
  }

  get continueShoppingBtn() {
    return $("#continue-shopping");
  }

  get addBike() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get addTshirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  get addJacket() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }

  get addOnesie() {
    return $("#add-to-cart-sauce-labs-onesie");
  }

  get addTred() {
    return $(
      '//button[@data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    );
  }

  get totalPriceBackpack() {
    return $("(//div[@class='inventory_item_price'])[1]");
  }

  get totalPriceBike() {
    return $("(//div[@class='inventory_item_price'])[2]");
  }

  get totalPriceTshirt() {
    return $("(//div[@class='inventory_item_price'])[3]");
  }

  get totalPriceJacket() {
    return $("(//div[@class='inventory_item_price'])[4]");
  }

  get totalPriceOnesie() {
    return $("(//div[@class='inventory_item_price'])[5]");
  }

  get totalPriceTred() {
    return $("(//div[@class='inventory_item_price'])[6]");
  }

  get checkoutBtn() {
    return $(".checkout_button");
  }

  get titleCheckout() {
    return $('//span[@data-test="title"]');
  }

  get firstName() {
    return $("#first-name");
  }

  get lastName() {
    return $("#last-name");
  }

  get postalCode() {
    return $("#postal-code");
  }

  get continueBtn() {
    return $("#continue");
  }

  get checkoutPageTitle() {
    return $('//span[@data-test="title"]');
  }

  get paymentInfoLabel() {
    return $('//div[@data-test="payment-info-label"]');
  }

  get paymentInfoValue() {
    return $('//div[@data-test="payment-info-value"]');
  }

  get shippingInfoLabel() {
    return $('//div[@data-test="shipping-info-label"]');
  }

  get shippingInfoValue() {
    return $('//div[@data-test="shipping-info-value"]');
  }

  get priceTotal() {
    return $('//div[@data-test="total-info-label"]');
  }

  get subtotalLabel() {
    return $('//div[@data-test="subtotal-label"]');
  }

  get taxLabel() {
    return $('//div[@data-test="tax-label"]');
  }

  get totalLabel() {
    return $('//div[@data-test="total-label"]');
  }

  get finishBtn() {
    return $('//button[@data-test="finish"]');
  }

  get checkoutCompletePTitle() {
    return $('//span[@data-test="title"]');
  }

  get completeHeader() {
    return $('//h2[@data-test="complete-header"]');
  }

  get completeText() {
    return $('//div[@data-test="complete-text"]');
  }

  get backHomeBtn() {
    return $('//button[@data-test="back-to-products"]');
  }

  get errorMsg() {
    return $('h3[data-test="error"]');
  }

  get cancelBtn() {
    return $('//button[@data-test="cancel"]');
  }

  get errorPopup() {
    return $("#error-message");
  }

  // Page actions
  async addOneProduct() {
    await this.addBackpack.click();
    await this.iconCart.click();
    // await this.removeBackpackBtn.click();
    await browser.pause(2000);
    // await this.continueShoppingBtn.click();
    // await browser.pause(2000);
  }

  async addAllProduct() {
    await this.addBackpack.click();
    await this.addBike.click();
    await this.addTshirt.click();
    await this.addJacket.click();
    await this.addOnesie.click();
    await this.addTred.click();
    await this.iconCart.click();
    await this.totalPriceTshirt.scrollIntoView({ behavior: "smooth" });
    await this.totalPriceJacket.scrollIntoView({ behavior: "smooth" });
    await this.totalPriceOnesie.scrollIntoView({ behavior: "smooth" });
    await this.totalPriceTred.scrollIntoView({ behavior: "smooth" });
    const allPrices = await $$(".cart_list .cart_item .inventory_item_price");
    for (let i = 0; i < allPrices.length; i++) {
      console.log(await allPrices[i].getText());
    }
  }

  async checkoutAllProduct(firstName, lastName, postalCode) {
    await this.checkoutBtn.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
    await this.backHomeBtn.click();
  }

  async emptyFirstName(firstName, lastName, postalCode) {
    await this.addTshirt.click();
    await this.addJacket.click();
    await this.iconCart.click();
    await this.checkoutBtn.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueBtn.click();
    await this.cancelBtn.click();
  }

  async emptyLastName(firstName, lastName, postalCode) {
    await this.checkoutBtn.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueBtn.click();
    await this.cancelBtn.click();
  }

  async emptyPostalCode(firstName, lastName, postalCode) {
    await this.checkoutBtn.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueBtn.click();
    await this.cancelBtn.click();
  }

  async dataBlank(firstName, lastName, postalCode) {
    await this.checkoutBtn.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueBtn.click();
    await this.cancelBtn.click();
  }

  async withoutProduct() {
    await this.removeTshirtBtn.click();
    await this.removeJacketBtn.click();
    await this.checkoutBtn.click();
  }

  async openPage() {
    await browser.url("https://www.saucedemo.com/");
  }
}

export default new cartPage();
