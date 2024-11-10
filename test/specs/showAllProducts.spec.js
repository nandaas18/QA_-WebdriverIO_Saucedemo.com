import { browser, $, expect } from "@wdio/globals";

describe("PRODUCT PAGE", function () {
  before("Login", async function () {
    // login dulu
    await browser.url("https://www.saucedemo.com/");

    const inputUsername = await $("#user-name");
    await inputUsername.setValue("standard_user");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("secret_sauce");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();
  });

  // Backpack Product
  it("Show Detail Backpack Product", async function () {
    await browser.pause(2000);
    const imgBackpackProduct = await $("#item_4_img_link");
    await imgBackpackProduct.click();

    const inventoryTitleBackpack = await $(
      '//div[@data-test="inventory-item-name"]'
    );
    await expect(inventoryTitleBackpack).toHaveText("Sauce Labs Backpack");

    const inventoryPriceBackpack = await $(
      "//div[@data-test='inventory-item-price']"
    );
    await expect(inventoryPriceBackpack).toHaveText("$29.99");

    const inventoryImgBackpack = await $(
      "//img[@data-test='item-sauce-labs-backpack-img']"
    );
    await expect(inventoryImgBackpack).toBeDisplayed();
    await browser.pause(2000);
  });

  // Bike Light Product
  it("Show Detail Bike Product", async function () {
    const backBtn = await $("#back-to-products");
    await backBtn.click();
    await browser.pause(2000);

    const imgBikeProduct = await $("#item_0_img_link");
    await imgBikeProduct.click();

    const inventoryTitleBike = await $(
      '//div[@data-test="inventory-item-name"]'
    );
    await expect(inventoryTitleBike).toHaveText("Sauce Labs Bike Light");

    const inventoryPriceBike = await $(
      "//div[@data-test='inventory-item-price']"
    );
    await expect(inventoryPriceBike).toHaveText("$9.99");

    const inventoryImgBike = await $(
      "//img[@data-test='item-sauce-labs-bike-light-img']"
    );
    await expect(inventoryImgBike).toBeDisplayed();
    await browser.pause(2000);
  });

  //   T-Shirt Product
  it("Show Detail Tshirt Product", async function () {
    const backBtn = await $("#back-to-products");
    await backBtn.click();

    await browser.pause(2000);
    const imgTshitProduct = await $(
      "//img[@data-test='inventory-item-sauce-labs-bolt-t-shirt-img']"
    );
    await imgTshitProduct.click();

    const inventoryTitleTshirt = await $(
      '//div[@data-test="inventory-item-name"]'
    );
    await expect(inventoryTitleTshirt).toHaveText("Sauce Labs Bolt T-Shirt");

    const inventoryPriceTshirt = await $(
      "//div[@data-test='inventory-item-price']"
    );
    await expect(inventoryPriceTshirt).toHaveText("$15.99");

    const inventoryImgTshirt = await $(
      "//img[@data-test='item-sauce-labs-bolt-t-shirt-img']"
    );
    await expect(inventoryImgTshirt).toBeDisplayed();
    await browser.pause(2000);
  });

  // Jacket Product
  it("Show Detail Jacket Product", async function () {
    const backBtn = await $("#back-to-products");
    await backBtn.click();

    await browser.pause(2000);
    const imgJacketProduct = await $(
      "//img[@data-test='inventory-item-sauce-labs-fleece-jacket-img']"
    );
    await imgJacketProduct.click();

    const inventoryTitleJacket = await $(
      '//div[@data-test="inventory-item-name"]'
    );
    await expect(inventoryTitleJacket).toHaveText("Sauce Labs Fleece Jacket");

    const inventoryPriceJacket = await $(
      "//div[@data-test='inventory-item-price']"
    );
    await expect(inventoryPriceJacket).toHaveText("$49.99");

    const inventoryImgJacket = await $(
      "//img[@data-test='item-sauce-labs-fleece-jacket-img']"
    );
    await expect(inventoryImgJacket).toBeDisplayed();
    await browser.pause(2000);
  });

  // Onesie Product
  it("Show Detail Onesie Product", async function () {
    const backBtn = await $("#back-to-products");
    await backBtn.click();

    await browser.pause(2000);

    const imgOnesieProduct = await $(
      "//img[@data-test='inventory-item-sauce-labs-onesie-img']"
    );
    await imgOnesieProduct.scrollIntoView({ behavior: "smooth" });
    await browser.pause(2000);
    await imgOnesieProduct.click();
    await browser.pause(2000);

    const inventoryTitleOnesie = await $(
      '//div[@data-test="inventory-item-name"]'
    );
    await expect(inventoryTitleOnesie).toHaveText("Sauce Labs Onesie");

    const inventoryPriceOnesie = await $(
      "//div[@data-test='inventory-item-price']"
    );
    await expect(inventoryPriceOnesie).toHaveText("$7.99");

    const inventoryImgOnesie = await $(
      "//img[@data-test='item-sauce-labs-onesie-img']"
    );
    await expect(inventoryImgOnesie).toBeDisplayed();
    await browser.pause(2000);
  });

  // T-Shirt (Red)
  it("Show Detail Tshirt Red Product", async function () {
    const backBtn = await $("#back-to-products");
    await backBtn.click();

    await browser.pause(2000);

    const imgTredProduct = await $(
      "//img[@data-test='inventory-item-test.allthethings()-t-shirt-(red)-img']"
    );

    await imgTredProduct.scrollIntoView({ behavior: "smooth" });
    await browser.pause(2000);
    await imgTredProduct.click();
    await browser.pause(2000);

    const inventoryTitleTred = await $(
      '//div[@data-test="inventory-item-name"]'
    );
    await expect(inventoryTitleTred).toHaveText(
      "Test.allTheThings() T-Shirt (Red)"
    );

    const inventoryPriceTred = await $(
      "//div[@data-test='inventory-item-price']"
    );
    await expect(inventoryPriceTred).toHaveText("$15.99");

    const inventoryImgTred = await $(
      "//img[@data-test='item-test.allthethings()-t-shirt-(red)-img']"
    );
    await expect(inventoryImgTred).toBeDisplayed();
    await browser.pause(2000);
  });

  describe("SORT FEATURES", function () {
    before("Sort Icon", async function () {
      const backBtn = await $("#back-to-products");
      await backBtn.click();

      const sortFeature = await $(".select_container");
      await browser.pause(2000);
      await sortFeature.click();
    });

    // Sort A-Z
    it("Sort A-Z", async function () {
      const sortAtoZ = await $(".product_sort_container option:nth-child(1)");
      await browser.pause(2000);
      await sortAtoZ.click();
      await browser.pause(2000);
    });
    it("Sort Z-A", async function () {
      const sortZtoA = await $(".product_sort_container option:nth-child(2)");
      await browser.pause(2000);
      await sortZtoA.click();
      await browser.pause(2000);
    });
    it("Sort low-high", async function () {
      const sortLowtoHigh = await $(
        ".product_sort_container option:nth-child(3)"
      );
      await browser.pause(2000);
      await sortLowtoHigh.click();
      await browser.pause(2000);
    });
    it("Sort high-low", async function () {
      const sortHightoLow = await $(
        ".product_sort_container option:nth-child(4)"
      );
      await browser.pause(2000);
      await sortHightoLow.click();
      await browser.pause(2000);
    });
  });

  describe("SOCIAL MEDIA", function () {
    it("Show Twitter Account", async function () {
      const twitterIcon = await $('//a[@data-test="social-twitter"]');
      await twitterIcon.scrollIntoView({ behavior: "smooth" });
      await twitterIcon.click();

      const windowHandles = await browser.getWindowHandles();

      // Jika ada lebih dari satu tab terbuka, beralih ke tab baru
      if (windowHandles.length > 1) {
        await browser.switchToWindow(windowHandles[1]);
      } else {
        throw new Error("Tab baru tidak terbuka setelah mengklik ikon Twitter");
      }
      await expect(browser).toHaveUrl("https://x.com/saucelabs");

      await browser.closeWindow();
      await browser.switchToWindow(windowHandles[0]);
    });

    it("Show Facebook Account", async function () {
      const facebookIcon = await $('//a[@data-test="social-facebook"]');
      await facebookIcon.scrollIntoView({ behavior: "smooth" });
      await facebookIcon.click();

      const windowHandles = await browser.getWindowHandles();

      // Jika ada lebih dari satu tab terbuka, beralih ke tab baru
      if (windowHandles.length > 1) {
        await browser.switchToWindow(windowHandles[1]);
      } else {
        throw new Error(
          "Tab baru tidak terbuka setelah mengklik ikon Facebook"
        );
      }

      expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");

      await browser.closeWindow();
      await browser.switchToWindow(windowHandles[0]);
    });

    it("Show Linkedin Account", async function () {
      const linkedinIcon = await $('//a[@data-test="social-linkedin"]');
      await linkedinIcon.scrollIntoView({ behavior: "smooth" });
      await linkedinIcon.click();

      const windowHandles = await browser.getWindowHandles();

      // Jika ada lebih dari satu tab terbuka, beralih ke tab baru
      if (windowHandles.length > 1) {
        await browser.switchToWindow(windowHandles[1]);
      } else {
        throw new Error(
          "Tab baru tidak terbuka setelah mengklik ikon Linkedin"
        );
      }

      expect(browser).toHaveUrl("https://www.linkedin.com/company/sauce-labs/");

      await browser.closeWindow();
      await browser.switchToWindow(windowHandles[0]);
    });
  });
});
