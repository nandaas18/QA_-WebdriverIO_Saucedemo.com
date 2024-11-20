import { browser, $, expect } from "@wdio/globals";
import cartPage from "../pageobjects/cart.page";
import loginPage from "../pageobjects/login.page";

describe("CART FEATURES", function () {
  before("Login", async function () {
    await cartPage.openPage();
    await loginPage.loginProcess();
  });

  it("Add 1 product to cart", async function () {
    await cartPage.addOneProduct();

    await expect(cartPage.cartBadge).toHaveText("1");
    await expect(cartPage.titleQty).toHaveText("QTY");
    await expect(cartPage.titleDesc).toHaveText("Description");
    await expect(cartPage.totalPrice).toHaveText("$29.99");
  });

  it("Add all product to cart", async function () {
    await cartPage.addAllProduct();

    await expect(cartPage.cartBadge).toHaveText("6");
    await expect(cartPage.titleQty).toHaveText("QTY");
    await expect(cartPage.titleDesc).toHaveText("Description");
    await expect(cartPage.totalPriceBackpack).toHaveText("$29.99");
    await expect(cartPage.totalPriceBike).toHaveText("$9.99");
    await expect(cartPage.totalPriceTshirt).toHaveText("$15.99");
    await expect(cartPage.totalPriceJacket).toHaveText("$49.99");
    await expect(cartPage.totalPriceOnesie).toHaveText("$7.99");
    await expect(cartPage.totalPriceTred).toHaveText("$15.99");
  });

  it("Checkout all product", async function () {
    await cartPage.checkoutAllProduct("nanda", "alfa", "223344");

    await expect(cartPage.titleCheckout).toHaveText(
      "Checkout: Your Information"
    );

    await expect(cartPage.checkoutPageTitle).toHaveText("Checkout: Overview");
    await expect(cartPage.paymentInfoLabel).toHaveText("Payment Information:");
    await expect(cartPage.paymentInfoValue).toHaveText("SauceCard #31337");
    await expect(cartPage.shippingInfoLabel).toHaveText(
      "Shipping Information:"
    );
    await expect(cartPage.shippingInfoValue).toHaveText(
      "Free Pony Express Delivery!"
    );
    await expect(cartPage.priceTotal).toHaveText("Price Total");
    await expect(cartPage.subtotalLabel).toHaveText("Item total: $129.94");
    await expect(cartPage.taxLabel).toHaveText("Tax: $10.40");
    await expect(cartPage.totalLabel).toHaveText("Total: $140.34");
    await expect(cartPage.checkoutCompletePTitle).toHaveText(
      "Checkout: Complete!"
    );
    await expect(cartPage.completeHeader).toHaveText(
      "Thank you for your order!"
    );
    await expect(cartPage.completeText).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });

  it("Checkout with empty first name", async function () {
    await cartPage.emptyFirstName("", "alfa", "11223344");

    await expect(cartPage.errorMsg).toHaveText("Error: First Name is required");
  });

  it("Checkout with empty last name", async function () {
    await cartPage.emptyLastName("nanda", "", "11223344");

    await expect(cartPage.errorMsg).toHaveText("Error: Last Name is required");
  });

  it("Checkout with empty Zip/Postal Code", async function () {
    await cartPage.emptyPostalCode("nanda", "alfa");

    await expect(cartPage.errorMsg).toHaveText(
      "Error: Postal Code is required"
    );
  });

  it("Checkout by leaving the data blank", async function () {
    await cartPage.dataBlank("", "", "");

    await expect(cartPage.errorMsg).toHaveText("Error: First Name is required");
  });

  it("Checkout without products in the cart", async function () {
    await cartPage.withoutProduct();
    await expect(cartPage.errorPopup).toBeDisplayed();
  });

  after(async function () {
    await browser.pause(2000);
  });
});
