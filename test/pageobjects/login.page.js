import { browser, $, expect } from "@wdio/globals";

class loginPage {
  // Elemen Locator
  get usernameInput() {
    return $("#user-name");
  }

  get passwordInput() {
    return $('//input[@data-test="password"]');
  }

  get loginBtn() {
    return $("input#login-button");
  }

  get productPage() {
    return $('//span[@data-test="title"]');
  }

  get loginErrorMsg() {
    return $('div.error-message-container.error h3[data-test="error"]');
  }

  // Page Actions
  async loginProcess(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginBtn.click();
  }

  async openPage() {
    await browser.url("https://www.saucedemo.com/");
  }
}

export default new loginPage();
