import { Page } from "@playwright/test";
import { BasePage } from "@_src/pages/base.page";

export class PulpitPage extends BasePage {
  url = "/users";
  importUserButton = this.page.getByRole("button", {
    name: "Zaimportuj członka zespołu",
  });
  activeStatus = this.page.getByRole("cell", { name: "Aktywny" });

  constructor(page: Page) {
    super(page);
  }
}
