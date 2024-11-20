import { $, browser } from "@wdio/globals";

class detailProduct {
  // Elemen Locator
  get imgBackpackProduct() {
    return $("#item_4_img_link");
  }

  get inventoryTitleBackpack() {
    return $('//div[@data-test="inventory-item-name"]');
  }

  get inventoryPriceBackpack() {
    return $("//div[@data-test='inventory-item-price']");
  }

  get inventoryImgBackpack() {
    return $("//img[@data-test='item-sauce-labs-backpack-img']");
  }

  get backBtn() {
    return $("#back-to-products");
  }

  get imgBikeProduct() {
    return $("#item_0_img_link");
  }

  get inventoryTitleBike() {
    return $('//div[@data-test="inventory-item-name"]');
  }

  get inventoryPriceBike() {
    return $("//div[@data-test='inventory-item-price']");
  }

  get inventoryImgBike() {
    return $("//img[@data-test='item-sauce-labs-bike-light-img']");
  }

  get imgTshitProduct() {
    return $("//img[@data-test='inventory-item-sauce-labs-bolt-t-shirt-img']");
  }

  get inventoryTitleTshirt() {
    return $('//div[@data-test="inventory-item-name"]');
  }

  get inventoryPriceTshirt() {
    return $("//div[@data-test='inventory-item-price']");
  }

  get inventoryImgTshirt() {
    return $("//img[@data-test='item-sauce-labs-bolt-t-shirt-img']");
  }

  get imgJacketProduct() {
    return $("//img[@data-test='inventory-item-sauce-labs-fleece-jacket-img']");
  }

  get inventoryTitleJacket() {
    return $('//div[@data-test="inventory-item-name"]');
  }

  get inventoryPriceJacket() {
    return $("//div[@data-test='inventory-item-price']");
  }

  get inventoryImgJacket() {
    return $("//img[@data-test='item-sauce-labs-fleece-jacket-img']");
  }

  get imgOnesieProduct() {
    return $("//img[@data-test='inventory-item-sauce-labs-onesie-img']");
  }

  get inventoryTitleOnesie() {
    return $('//div[@data-test="inventory-item-name"]');
  }

  get inventoryPriceOnesie() {
    return $("//div[@data-test='inventory-item-price']");
  }

  get inventoryImgOnesie() {
    return $("//img[@data-test='item-sauce-labs-onesie-img']");
  }

  get imgTredProduct() {
    return $(
      "//img[@data-test='inventory-item-test.allthethings()-t-shirt-(red)-img']"
    );
  }

  get inventoryTitleTred() {
    return $('//div[@data-test="inventory-item-name"]');
  }

  get inventoryPriceTred() {
    return $("//div[@data-test='inventory-item-price']");
  }

  get inventoryImgTred() {
    return $("//img[@data-test='item-test.allthethings()-t-shirt-(red)-img']");
  }

  get sortFeatures() {
    return $(".select_container");
  }

  get sortAtoZ() {
    return $(".product_sort_container option:nth-child(1)");
  }

  get sortAtoZfirst() {
    return $("#item_4_title_link");
  }

  get sortAtoZlast() {
    return $("#item_3_title_link");
  }

  get sortZtoA() {
    return $(".product_sort_container option:nth-child(2)");
  }

  get sortZtoAfirst() {
    return $("#item_3_title_link");
  }

  get sortZtoAlast() {
    return $("#item_4_title_link");
  }

  get sortLowtoHigh() {
    return $(".product_sort_container option:nth-child(3)");
  }

  get sortLowtoHighFirst() {
    return $("#item_2_title_link");
  }

  get sortLowtoHighLast() {
    return $("#item_5_title_link");
  }

  get sortHightoLow() {
    return $(".product_sort_container option:nth-child(4)");
  }

  get sortHightoLowFirst() {
    return $("#item_5_title_link");
  }

  get sortHightoLowLast() {
    return $("#item_2_title_link");
  }

  get twitterIcon() {
    return $('//a[@data-test="social-twitter"]');
  }

  get twittFollowBtn() {
    return $('//button[@data-testid="16672130-follow"]');
  }

  get facebookIcon() {
    return $('//a[@data-test="social-facebook"]');
  }

  get linkedinIcon() {
    return $('//a[@data-test="social-linkedin"]');
  }

  // Page Actions
  async detailBackpackProduct() {
    await browser.pause(2000);
    await this.imgBackpackProduct.click();
    await browser.pause(2000);
  }

  async detailBikeProduct() {
    await this.backBtn.click();
    await browser.pause(2000);
    await this.imgBikeProduct.click();
    await browser.pause(2000);
  }

  async detailTshirtProduct() {
    await this.backBtn.click();
    await browser.pause(2000);
    await this.imgTshitProduct.click();
    await browser.pause(2000);
  }

  async detailJacketProduct() {
    await this.backBtn.click();
    await browser.pause(2000);
    await this.imgJacketProduct.click();
    await browser.pause(2000);
  }

  async detailOnesieProduct() {
    await this.backBtn.click();
    await browser.pause(2000);
    await this.imgOnesieProduct.scrollIntoView({ behavior: "smooth" });
    await browser.pause(2000);
    await this.imgOnesieProduct.click();
    await browser.pause(2000);
  }

  async detailTshirtRedProduct() {
    await this.backBtn.click();
    await browser.pause(2000);
    await this.imgTredProduct.scrollIntoView({ behavior: "smooth" });
    await browser.pause(2000);
    await this.imgTredProduct.click();
    await browser.pause(2000);
  }

  async iconSortFeatures() {
    await this.backBtn.click();
    await browser.pause(2000);
    await this.sortFeatures.click();
  }

  async sortAtoZFeature() {
    await this.sortAtoZ.click();
    await browser.pause(2000);
  }

  async sortZtoAFeature() {
    await this.sortZtoA.click();
    await browser.pause(2000);
  }

  async sortLowtoHighFeature() {
    await this.sortLowtoHigh.click();
    await browser.pause(2000);
  }

  async sortHightoLowFeature() {
    await this.sortHightoLow.click();
    await browser.pause(2000);
  }

  async twitterPage() {
    await this.twitterIcon.scrollIntoView({ behavior: "smooth" });
    await this.twitterIcon.click();
    await browser.pause(2000);
    const windowHandles = await browser.getWindowHandles();

    // Jika ada lebih dari satu tab terbuka, beralih ke tab baru
    if (windowHandles.length > 1) {
      await browser.switchToWindow(windowHandles[1]);
    } else {
      throw new Error("Tab baru tidak terbuka setelah mengklik ikon Twitter");
    }
  }

  async facebookPage() {
    await this.facebookIcon.scrollIntoView({ behavior: "smooth" });
    await this.facebookIcon.click();
    const windowHandles = await browser.getWindowHandles();

    // Jika ada lebih dari satu tab terbuka, beralih ke tab baru
    if (windowHandles.length > 1) {
      await browser.switchToWindow(windowHandles[1]);
    } else {
      throw new Error("Tab baru tidak terbuka setelah mengklik ikon Facebook");
    }
    await browser.closeWindow();
    await browser.switchToWindow(windowHandles[0]);
  }

  async linkedinPage() {
    await this.linkedinIcon.scrollIntoView({ behavior: "smooth" });
    await this.linkedinIcon.click();
    const windowHandles = await browser.getWindowHandles();

    // Jika ada lebih dari satu tab terbuka, beralih ke tab baru
    if (windowHandles.length > 1) {
      await browser.switchToWindow(windowHandles[1]);
    } else {
      throw new Error("Tab baru tidak terbuka setelah mengklik ikon Linkedin");
    }
    await browser.closeWindow();
    await browser.switchToWindow(windowHandles[0]);
  }

  async openPage() {
    await browser.url("https://www.saucedemo.com/");
  }
}

export default new detailProduct();
