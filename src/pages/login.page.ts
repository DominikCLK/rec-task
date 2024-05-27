import { Page } from "@playwright/test";
import { BasePage } from "@_src/pages/base.page";

export class LoginPage extends BasePage {
  url = "/login";
  userEmailInput = this.page.getByLabel("Nazwa użytkownika");
  userPasswordInput = this.page.getByLabel("Hasło");
  loginButton = this.page.getByRole("button", { name: "Zaloguj" });

  constructor(page: Page) {
    super(page);
  }

  async loginToPortal(userName: string, userPassword: string): Promise<void> {
    await this.userEmailInput.fill(userName);
    await this.userPasswordInput.fill(userPassword);
  }
}
