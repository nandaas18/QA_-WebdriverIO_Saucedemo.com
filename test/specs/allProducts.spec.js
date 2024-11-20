import { browser, $, expect } from "@wdio/globals";
import allProductPage from "../pageobjects/allProduct.page";
import loginPage from "../pageobjects/login.page";

describe("PRODUCT PAGE", function () {
  before("Login", async function () {
    await allProductPage.openPage();
    await loginPage.loginProcess("standard_user", "secret_sauce");
  });

  it("Show Detail Backpack Product", async function () {
    await allProductPage.detailBackpackProduct();

    await expect(allProductPage.inventoryTitleBackpack).toHaveText(
      "Sauce Labs Backpack"
    );

    await expect(allProductPage.inventoryPriceBackpack).toHaveText("$29.99");

    await expect(allProductPage.inventoryImgBackpack).toBeDisplayed();
  });

  it("Show Detail Bike Product", async function () {
    await allProductPage.detailBikeProduct();

    await expect(allProductPage.inventoryTitleBike).toHaveText(
      "Sauce Labs Bike Light"
    );

    await expect(allProductPage.inventoryPriceBike).toHaveText("$9.99");

    await expect(allProductPage.inventoryImgBike).toBeDisplayed();
  });

  it("Show Detail Tshirt Product", async function () {
    await allProductPage.detailTshirtProduct();

    await expect(allProductPage.inventoryTitleTshirt).toHaveText(
      "Sauce Labs Bolt T-Shirt"
    );

    await expect(allProductPage.inventoryPriceTshirt).toHaveText("$15.99");

    await expect(allProductPage.inventoryImgTshirt).toBeDisplayed();
  });

  it("Show Detail Jacket Product", async function () {
    await allProductPage.detailJacketProduct();

    await expect(allProductPage.inventoryTitleJacket).toHaveText(
      "Sauce Labs Fleece Jacket"
    );

    await expect(allProductPage.inventoryPriceJacket).toHaveText("$49.99");

    await expect(allProductPage.inventoryImgJacket).toBeDisplayed();
  });

  it("Show Detail Onesie Product", async function () {
    await allProductPage.detailOnesieProduct();

    await expect(allProductPage.inventoryTitleOnesie).toHaveText(
      "Sauce Labs Onesie"
    );

    await expect(allProductPage.inventoryPriceOnesie).toHaveText("$7.99");

    await expect(allProductPage.inventoryImgOnesie).toBeDisplayed();
  });

  it("Show Detail Tshirt Red Product", async function () {
    await allProductPage.detailTshirtRedProduct();

    await expect(allProductPage.inventoryTitleTred).toHaveText(
      "Test.allTheThings() T-Shirt (Red)"
    );

    await expect(allProductPage.inventoryPriceTred).toHaveText("$15.99");

    await expect(allProductPage.inventoryImgTred).toBeDisplayed();
  });

  describe("SORT FEATURES", function () {
    before("Sort Icon", async function () {
      await allProductPage.iconSortFeatures();
    });

    it("Sort A-Z", async function () {
      await allProductPage.sortAtoZFeature();

      await expect(allProductPage.sortAtoZfirst).toHaveText(
        "Sauce Labs Backpack"
      );

      await expect(allProductPage.sortAtoZlast).toHaveText(
        "Test.allTheThings() T-Shirt (Red)"
      );
    });

    it("Sort Z-A", async function () {
      await allProductPage.sortZtoAFeature();

      await expect(allProductPage.sortZtoAfirst).toHaveText(
        "Test.allTheThings() T-Shirt (Red)"
      );

      await expect(allProductPage.sortZtoAlast).toHaveText(
        "Sauce Labs Backpack"
      );
    });

    it("Sort low-high", async function () {
      await allProductPage.sortLowtoHighFeature();

      await expect(allProductPage.sortLowtoHighFirst).toHaveText(
        "Sauce Labs Onesie"
      );

      await expect(allProductPage.sortLowtoHighLast).toHaveText(
        "Sauce Labs Fleece Jacket"
      );
    });

    it("Sort high-low", async function () {
      await allProductPage.sortHightoLowFeature();

      await expect(allProductPage.sortHightoLowFirst).toHaveText(
        "Sauce Labs Fleece Jacket"
      );

      await expect(allProductPage.sortHightoLowLast).toHaveText(
        "Sauce Labs Onesie"
      );
    });
  });

  describe("SOCIAL MEDIA", function () {
    it.only("Show Twitter Account", async function () {
      await allProductPage.twitterPage();

      await expect(browser).toHaveUrl("https://x.com/saucelabs?mx=2");
      await expect(allProductPage.twittFollowBtn);

      await browser.closeWindow();
      // await browser.switchToWindow(windowHandles[0]);
    });

    it("Show Facebook Account", async function () {
      await allProductPage.facebookPage();

      expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
    });

    it("Show Linkedin Account", async function () {
      await allProductPage.linkedinPage();
      expect(browser).toHaveUrl("https://www.linkedin.com/company/sauce-labs/");
    });
  });

  after(async function () {
    await browser.pause(2000);
  });
});
