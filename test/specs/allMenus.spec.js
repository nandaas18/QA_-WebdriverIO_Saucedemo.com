import { browser, $, expect } from "@wdio/globals";
import allMenusPage from "../pageobjects/allMenus.page";
import loginPage from "../pageobjects/login.page";

describe("All Menus", function () {
  before(
    "user login with the correct username and password",
    async function () {
      await allMenusPage.openPage();
      await loginPage.loginProcess("standard_user", "secret_sauce");
    }
  );

  it("About Menu", async function () {
    await allMenusPage.aboutMenu();
    await expect(allMenusPage.titleRoi).toBeDisplayed();
    await expect(allMenusPage.titlePayback).toBeDisplayed();
    await expect(allMenusPage.titlePresent).toBeDisplayed();
    await expect(allMenusPage.titleTimeSaving).toBeDisplayed();
    await expect(allMenusPage.sauceCrossBrowser).toBeDisplayed();
    await expect(allMenusPage.sauceMobile).toBeDisplayed();
    await expect(allMenusPage.sauceMobileApp).toBeDisplayed();
    await expect(allMenusPage.sauceError).toBeDisplayed();
    await expect(allMenusPage.sauceVisual).toBeDisplayed();
  });

  it("Reset App State Menu", async function () {
    await allMenusPage.resetMenu();
    await expect(allMenusPage.cartBadge).toHaveText("3");
    await expect(allMenusPage.removeBackpackBtn).toHaveText("Remove");
    await expect(allMenusPage.removeBikeBtn).toHaveText("Remove");
    await expect(allMenusPage.removeTshirtBtn).toHaveText("Remove");
  });

  it("Logout", async function () {
    await allMenusPage.logoutProcess();
    await expect(loginPage.usernameInput).toBeDisplayed();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await expect(loginPage.loginBtn).toBeDisplayed();
  });

  after(async function () {
    await browser.pause(2000);
  });
});
