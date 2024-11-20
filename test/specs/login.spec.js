import { browser, $, expect } from "@wdio/globals";
import loginPage from "../pageobjects/login.page";

describe("FITUR LOGIN", function () {
  beforeEach("Open website saucedemo", async function () {
    await loginPage.openPage();
  });
  it("user login with the correct username and password", async function () {
    await loginPage.loginProcess("standard_user", "secret_sauce");

    await expect(loginPage.productPage).toHaveText("Products");

    await browser.pause(2000);
  });

  it("user logs in with locked username", async function () {
    await loginPage.loginProcess("locked_out_user", "secret_sauce");

    await expect(loginPage.loginErrorMsg).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );

    await browser.pause(2000);
  });

  it("user login with valid username and invalid password", async function () {
    await loginPage.loginProcess("standard_user", "nanda12345");

    await expect(loginPage.loginErrorMsg).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );

    await browser.pause(2000);
  });

  it("user login with invalid username dan valid password", async function () {
    await loginPage.loginProcess("nanda_al11", "secret_sauce");

    await expect(loginPage.loginErrorMsg).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );

    await browser.pause(2000);
  });

  it("User login with empty username and password", async function () {
    await loginPage.loginProcess("", "");

    await expect(loginPage.loginErrorMsg).toHaveText(
      "Epic sadface: Username is required"
    );

    it("User login with empty username and valid password", async function () {
      await loginPage.loginProcess("", "secret_sauce");

      await expect(loginPage.loginErrorMsg).toHaveText(
        "Epic sadface: Username is required"
      );
    });

    it("User login with valid username and empty password", async function () {
      await loginPage.loginProcess("standard_user", "");

      await expect(loginPage.loginErrorMsg).toHaveText(
        "Epic sadface: Password is required"
      );
    });
  });
});
