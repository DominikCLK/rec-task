import { LoginPage } from "@_src/pages/login.page";
import { BasePage } from "@_src/pages/base.page";
import { PulpitPage } from "@_src/pages/pulpit.page";

import { test as baseTest } from "@playwright/test";

const pageObjectTest = baseTest.extend<{
  loginPage: LoginPage;
  basePage: BasePage;
  pulpitPage: PulpitPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  pulpitPage: async ({ page }, use) => {
    const pulpitPage = new PulpitPage(page);
    await use(pulpitPage);
  },
});

export default pageObjectTest;
export const expect = pageObjectTest.expect;
