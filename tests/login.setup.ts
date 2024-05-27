import { expect, test as setup } from "@_src/fixtures/merge.fixture";
import { STORAGE_STATE } from "@_pw-config";

import { DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD } from "config/env.config";

setup.describe("Login and save session", () => {
  setup.beforeEach(async ({ loginPage, page, basePage }) => {
    // Act
    await basePage.goto();

    //Assert
    await expect(page).toHaveURL(loginPage.url);
  });

  setup(
    "Login with correct credentials @setup",
    async ({ loginPage, page, pulpitPage }) => {
      // Act
      await loginPage.loginToPortal(DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD);
      await loginPage.loginButton.click();

      // Assert
      await expect(page).toHaveURL(pulpitPage.url);

      await page.context().storageState({ path: STORAGE_STATE });
    }
  );
});
