import { browser, $, expect } from "@wdio/globals";

describe("CART FEATURES", function () {
  before("Login", async function () {
    // Login dulu
    await browser.url("https://www.saucedemo.com/");

    const inputUsername = await $("#user-name");
    await inputUsername.setValue("standard_user");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("secret_sauce");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();

    await browser.pause(2000);
  });

  // add 1 produck to cart
  it("Add 1 product to cart", async function () {
    const addBackpack = await $("#add-to-cart-sauce-labs-backpack");
    await addBackpack.click();

    const cartBadge = await $('//span[@data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText("1");

    const iconCart = await $('//a[@data-test="shopping-cart-link"]');
    await iconCart.click();

    const titleQty = await $('//div[@data-test="cart-quantity-label"]');
    await expect(titleQty).toHaveText("QTY");

    const titleDesc = await $('//div[@data-test="cart-desc-label"]');
    await expect(titleDesc).toHaveText("Description");

    const totalPrice = await $('//div[@data-test="inventory-item-price"]');
    await expect(totalPrice).toHaveText("$29.99");

    const removeBackpackBtn = await $("#remove-sauce-labs-backpack");
    await removeBackpackBtn.click();

    await browser.pause(2000);

    const continueShoppingBtn = await $("#continue-shopping");
    await continueShoppingBtn.click();

    await browser.pause(2000);
  });

  it("Add all product to cart", async function () {
    const addBackpack = await $("#add-to-cart-sauce-labs-backpack");
    await addBackpack.click();

    const addBike = await $("#add-to-cart-sauce-labs-bike-light");
    await addBike.click();

    const addTshirt = await $("#add-to-cart-sauce-labs-bolt-t-shirt");
    await addTshirt.click();

    const addJacket = await $("#add-to-cart-sauce-labs-fleece-jacket");
    await addJacket.click();

    const addOnesie = await $("#add-to-cart-sauce-labs-onesie");
    await addOnesie.click();

    const addTred = await $(
      '//button[@data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    );
    await addTred.click();

    const cartBadge = await $('//span[@data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText("6");

    const iconCart = await $('//a[@data-test="shopping-cart-link"]');
    await iconCart.click();

    const titleQty = await $('//div[@data-test="cart-quantity-label"]');
    await expect(titleQty).toHaveText("QTY");

    const titleDesc = await $('//div[@data-test="cart-desc-label"]');
    await expect(titleDesc).toHaveText("Description");

    const totalPriceBackpack = await $(
      "(//div[@class='inventory_item_price'])[1]"
    );
    await expect(totalPriceBackpack).toHaveText("$29.99");

    const totalPriceBike = await $("(//div[@class='inventory_item_price'])[2]");
    await expect(totalPriceBike).toHaveText("$9.99");

    const totalPriceTshirt = await $(
      "(//div[@class='inventory_item_price'])[3]"
    );
    await totalPriceTshirt.scrollIntoView({ behavior: "smooth" });

    await expect(totalPriceTshirt).toHaveText("$15.99");

    const totalPriceJacket = await $(
      "(//div[@class='inventory_item_price'])[4]"
    );
    await totalPriceJacket.scrollIntoView({ behavior: "smooth" });
    await expect(totalPriceJacket).toHaveText("$49.99");

    const totalPriceOnesie = await $(
      "(//div[@class='inventory_item_price'])[5]"
    );
    await totalPriceOnesie.scrollIntoView({ behavior: "smooth" });

    await expect(totalPriceOnesie).toHaveText("$7.99");

    const totalPriceTred = await $("(//div[@class='inventory_item_price'])[6]");
    await totalPriceTred.scrollIntoView({ behavior: "smooth" });
    await expect(totalPriceTred).toHaveText("$15.99");

    const allPrices = await $$(".cart_list .cart_item .inventory_item_price");
    for (let i = 0; i < allPrices.length; i++) {
      console.log(await allPrices[i].getText());
    }

    await browser.pause(2000);
  });

  it("Checkout all product", async function () {
    const checkoutBtn = await $(".checkout_button");
    await checkoutBtn.click();

    const titleCheckout = await $('//span[@data-test="title"]');
    await expect(titleCheckout).toHaveText("Checkout: Your Information");

    const firstName = await $("#first-name");
    await firstName.setValue("nanda");

    const lastName = await $("#last-name");
    await lastName.setValue("alfa");

    const postalCode = await $("#postal-code");
    await postalCode.setValue("223344");

    const continueBtn = await $("#continue");
    await continueBtn.click();

    const checkoutPageTitle = await $('//span[@data-test="title"]');
    await expect(checkoutPageTitle).toHaveText("Checkout: Overview");

    const paymentInfoLabel = await $('//div[@data-test="payment-info-label"]');
    await expect(paymentInfoLabel).toHaveText("Payment Information:");

    const paymentInfoValue = await $('//div[@data-test="payment-info-value"]');
    await expect(paymentInfoValue).toHaveText("SauceCard #31337");

    const shippingInfoLabel = await $(
      '//div[@data-test="shipping-info-label"]'
    );
    await expect(shippingInfoLabel).toHaveText("Shipping Information:");

    const shippingInfoValue = await $(
      '//div[@data-test="shipping-info-value"]'
    );
    await expect(shippingInfoValue).toHaveText("Free Pony Express Delivery!");

    const priceTotal = await $('//div[@data-test="total-info-label"]');
    await expect(priceTotal).toHaveText("Price Total");

    const subtotalLabel = await $('//div[@data-test="subtotal-label"]');
    await expect(subtotalLabel).toHaveText("Item total: $129.94");

    const taxLabel = await $('//div[@data-test="tax-label"]');
    await expect(taxLabel).toHaveText("Tax: $10.40");

    const totalLabel = await $('//div[@data-test="total-label"]');
    await expect(totalLabel).toHaveText("Total: $140.34");

    const finishBtn = await $('//button[@data-test="finish"]');
    await finishBtn.click();

    const checkoutCompletePTitle = await $('//span[@data-test="title"]');
    await expect(checkoutCompletePTitle).toHaveText("Checkout: Complete!");

    const completeHeader = await $('//h2[@data-test="complete-header"]');
    await expect(completeHeader).toHaveText("Thank you for your order!");

    const completeText = await $('//div[@data-test="complete-text"]');
    await expect(completeText).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );

    const backHomeBtn = await $('//button[@data-test="back-to-products"]');
    await backHomeBtn.click();
  });

  it("Prevent checkout with empty first name", async function () {
    const addTshirt = await $("#add-to-cart-sauce-labs-bolt-t-shirt");
    await addTshirt.click();

    const addJacket = await $("#add-to-cart-sauce-labs-fleece-jacket");
    await addJacket.click();

    const iconCart = await $('//a[@data-test="shopping-cart-link"]');
    await iconCart.click();

    const checkoutBtn = await $(".checkout_button");
    await checkoutBtn.click();

    const firstName = await $("#first-name");
    await firstName.setValue("");

    const lastName = await $("#last-name");
    await lastName.setValue("alfa");

    const postalCode = await $("#postal-code");
    await postalCode.setValue("11223344");

    const continueBtn = await $("#continue");
    await continueBtn.click();

    const errorMsg = await $('h3[data-test="error"]');
    await expect(errorMsg).toHaveText("Error: First Name is required");

    const cancelBtn = await $('//button[@data-test="cancel"]');
    await cancelBtn.click();
  });

  it("Prevent checkout with empty last name", async function () {
    const checkoutBtn = await $(".checkout_button");
    await checkoutBtn.click();

    const firstName = await $("#first-name");
    await firstName.setValue("nanda");

    const lastName = await $("#last-name");
    await lastName.setValue("");

    const postalCode = await $("#postal-code");
    await postalCode.setValue("11223344");

    const continueBtn = await $("#continue");
    await continueBtn.click();

    const errorMsg = await $('h3[data-test="error"]');
    await expect(errorMsg).toHaveText("Error: Last Name is required");

    const cancelBtn = await $('//button[@data-test="cancel"]');
    await cancelBtn.click();
  });

  it("Prevent checkout with empty Zip/Postal Code", async function () {
    const checkoutBtn = await $(".checkout_button");
    await checkoutBtn.click();

    const firstName = await $("#first-name");
    await firstName.setValue("nanda");

    const lastName = await $("#last-name");
    await lastName.setValue("alfa");

    const postalCode = await $("#postal-code");
    await postalCode.setValue("");

    const continueBtn = await $("#continue");
    await continueBtn.click();

    const errorMsg = await $('h3[data-test="error"]');
    await expect(errorMsg).toHaveText("Error: Postal Code is required");

    const cancelBtn = await $('//button[@data-test="cancel"]');
    await cancelBtn.click();
  });

  it("checkout by leaving the data blank", async function () {
    const checkoutBtn = await $(".checkout_button");
    await checkoutBtn.click();

    const firstName = await $("#first-name");
    await firstName.setValue("");

    const lastName = await $("#last-name");
    await lastName.setValue("");

    const postalCode = await $("#postal-code");
    await postalCode.setValue("");

    const continueBtn = await $("#continue");
    await continueBtn.click();

    const errorMsg = await $('h3[data-test="error"]');
    await expect(errorMsg).toHaveText("Error: First Name is required");

    const cancelBtn = await $('//button[@data-test="cancel"]');
    await cancelBtn.click();
  });

  it("checkout without products in the cart", async function () {
    // const iconCart = await $('//a[@data-test="shopping-cart-link"]');
    // await iconCart.click();

    // const continueShoppingBtn = await $("#continue-shopping");
    // await continueShoppingBtn.click();

    // const addBackpack = await $("#add-to-cart-sauce-labs-backpack");
    // await addBackpack.click();

    // const removeBackpackBtn = await $("#remove-sauce-labs-backpack");
    // await removeBackpackBtn.click();

    // const removeBikeBtn = await $("#remove-sauce-labs-bike-light");
    // await removeBikeBtn.click();

    const checkoutBtn = await $(".checkout_button");
    await checkoutBtn.click();

    const errorPopup = await $("#error-message");
    await expect(errorPopup).toBeDisplayed();
  });
});
