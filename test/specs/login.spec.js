import { browser, $, expect } from "@wdio/globals";

describe("FITUR LOGIN", function () {
  beforeEach("Open website saucedemo", async function () {
    await browser.url("https://www.saucedemo.com/");
  });
  it("user login with the correct username and password", async function () {
    const inputUsername = await $("#user-name");
    await inputUsername.setValue("standard_user");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("secret_sauce");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();

    const produckPage = await $('//span[@data-test="title"]');
    await expect(produckPage).toHaveText("Products");

    await browser.pause(2000);
  });

  it("user login with another username and password in website saucedemo.com", async function () {
    const inputUsername = await $("#user-name");
    await inputUsername.setValue("locked_out_user");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("secret_sauce");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();

    const loginErrorMsg = await $(
      'div.error-message-container.error h3[data-test="error"]'
    );
    await expect(loginErrorMsg).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );

    await browser.pause(2000);
  });

  it("user login with valid username and invalid password", async function () {
    const inputUsername = await $("#user-name");
    await inputUsername.setValue("standard_user");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("nanda12345");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();

    const loginErrorMsg = await $(
      'div.error-message-container.error h3[data-test="error"]'
    );
    await expect(loginErrorMsg).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );

    await browser.pause(2000);
  });

  it("user login with invalid username dan valid password", async function () {
    const inputUsername = await $("#user-name");
    await inputUsername.setValue("nanda_al11");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("secret_sauce");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();

    const loginErrorMsg = await $(
      'div.error-message-container.error h3[data-test="error"]'
    );
    await expect(loginErrorMsg).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );

    await browser.pause(2000);
  });

  it("User login with empty username and password", async function () {
    const inputUsername = await $("#user-name");
    await inputUsername.setValue("");

    const inputPassword = await $('//input[@data-test="password"]');
    await inputPassword.setValue("");

    const loginBtn = await $("input#login-button");
    await loginBtn.click();

    const loginErrorMsg = await $(
      'div.error-message-container.error h3[data-test="error"]'
    );
    await expect(loginErrorMsg).toHaveText(
      "Epic sadface: Username is required"
    );

    it("User login with empty username and valid password", async function () {
      const inputUsername = await $("#user-name");
      await inputUsername.setValue("");

      const inputPassword = await $('//input[@data-test="password"]');
      await inputPassword.setValue("secret_sauce");

      const loginBtn = await $("input#login-button");
      await loginBtn.click();

      const loginErrorMsg = await $(
        'div.error-message-container.error h3[data-test="error"]'
      );
      await expect(loginErrorMsg).toHaveText(
        "Epic sadface: Username is required"
      );
    });

    it("User login with valid username and empty password", async function () {
      const inputUsername = await $("#user-name");
      await inputUsername.setValue("standard_user");

      const inputPassword = await $('//input[@data-test="password"]');
      await inputPassword.setValue("");

      const loginBtn = await $("input#login-button");
      await loginBtn.click();

      const loginErrorMsg = await $(
        'div.error-message-container.error h3[data-test="error"]'
      );
      await expect(loginErrorMsg).toHaveText(
        "Epic sadface: Password is required"
      );
    });
  });
});
