import { browser, $, expect } from "@wdio/globals";

describe("All Menus", function () {
  before(
    "user login with the correct username and password",
    async function () {
      await browser.url("https://www.saucedemo.com/");

      const inputUsername = await $("#user-name");
      await inputUsername.setValue("standard_user");

      const inputPassword = await $('//input[@data-test="password"]');
      await inputPassword.setValue("secret_sauce");

      const loginBtn = await $("input#login-button");
      await loginBtn.click();

      const produckPage = await $('//span[@data-test="title"]');
      await expect(produckPage).toHaveText("Products");

      await browser.pause(2000);
    }
  );

  it("About Menu", async function () {
    const burgerMenu = await $("#react-burger-menu-btn");
    await burgerMenu.click();

    const aboutMenu = await $("#about_sidebar_link");
    await aboutMenu.click();

    const titleSaucelabs = await $('//img[@src="/images/logo.svg"]');
    await expect(titleSaucelabs).toBeDisplayed();

    const titleRoi = await $('//span[text()="ROI"]');
    await titleRoi.scrollIntoView({ behavior: "smooth" });
    await expect(titleRoi).toBeDisplayed();
    await browser.pause(2000);

    const titlePayback = await $('//span[text()="PAYBACK"]');
    await expect(titlePayback).toBeDisplayed();

    const titlePresent = await $('//span[text()="NET PRESENT VALUE"]');
    await expect(titlePresent).toBeDisplayed();

    const titleTimeSaving = await $(
      '//span[text()="DEVELOPER AND QA TIME SAVINGS"]'
    );
    await expect(titleTimeSaving).toBeDisplayed();

    const sauceCrossBrowser = await $('//h4[text()="Sauce Cross-Browser"]');
    await sauceCrossBrowser.scrollIntoView({ behavior: "smooth" });
    await expect(sauceCrossBrowser).toBeDisplayed();
    await browser.pause(2000);

    const sauceMobile = await $('//h4[text()="Sauce Mobile"]');
    await expect(sauceMobile).toBeDisplayed();

    const sauceMobileApp = await $(
      '//h4[text()="Sauce Mobile App Distribution"]'
    );
    await expect(sauceMobileApp).toBeDisplayed();

    const sauceError = await $('//h4[text()="Sauce Error Reporting"]');
    await expect(sauceError).toBeDisplayed();

    const sauceVisual = await $('//h4[text()="Sauce Visual"]');
    await expect(sauceVisual).toBeDisplayed();

    await browser.back();
    await browser.pause(2000);
  });

  it("Reset App State Menu", async function () {
    const addBackpack = await $("#add-to-cart-sauce-labs-backpack");
    await addBackpack.click();

    const addBike = await $("#add-to-cart-sauce-labs-bike-light");
    await addBike.click();

    const addTshirt = await $("#add-to-cart-sauce-labs-bolt-t-shirt");
    await addTshirt.click();

    const cartBadge = await $('//span[@data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText("3");

    const burgerMenu = await $("#react-burger-menu-btn");
    await burgerMenu.click();

    const resetMenu = await $("#reset_sidebar_link");
    await resetMenu.click();

    const closeBtn = await $("#react-burger-cross-btn");
    await closeBtn.click();

    const removeBackpackBtn = await $("#remove-sauce-labs-backpack");
    await expect(removeBackpackBtn).toHaveText("Remove");

    const removeBikeBtn = await $("#remove-sauce-labs-bike-light");
    await expect(removeBikeBtn).toHaveText("Remove");

    const removeTshirtBtn = await $("#remove-sauce-labs-bolt-t-shirt");
    await expect(removeTshirtBtn).toHaveText("Remove");

    const iconCart = await $('//a[@data-test="shopping-cart-link"]');
    await iconCart.click();

    const continueShoppingBtn = await $("#continue-shopping");
    await continueShoppingBtn.click();
    await browser.pause(2000);
  });

  it("Logout", async function () {
    const burgerMenu = await $("#react-burger-menu-btn");
    await burgerMenu.click();

    const logout = await $("#logout_sidebar_link");
    await logout.click();

    const inputUsername = await $("#user-name");
    await expect(inputUsername).toBeDisplayed();

    const inputPassword = await $('//input[@data-test="password"]');
    await expect(inputPassword).toBeDisplayed();

    const loginBtn = await $("input#login-button");
    await expect(loginBtn).toBeDisplayed();
  });
});
