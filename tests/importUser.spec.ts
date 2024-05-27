import { expect, test } from "@_src/fixtures/merge.fixture";
import {
  API_URL,
  DEFAULT_USER_EMAIL,
  DEFAULT_USER_PASSWORD,
} from "config/env.config";

test.describe("Import user of team", () => {
  test.beforeEach(async ({ loginPage, basePage, page, pulpitPage }) => {
    // Act
    await basePage.goto();
    await loginPage.loginToPortal(DEFAULT_USER_EMAIL, DEFAULT_USER_PASSWORD);
    await loginPage.loginButton.click();

    // Assert
    await expect(page).toHaveURL(pulpitPage.url);
  });

  test("Import user and verify response Status", async ({
    pulpitPage,
    request,
  }) => {
    // Act
    await pulpitPage.importUserButton.click();
    const response = await request.get(`${API_URL}/api`);

    // Assert
    expect(pulpitPage.activeStatus).toBeInViewport();
    expect(response.status()).toBe(200);
  });
});
