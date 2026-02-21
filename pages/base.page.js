export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async goToTab(tabId) {
    await this.page.click(tabId);
  }

  async dragToTarget(dragId, dropId) {
    await this.page.locator(dragId).dragTo(this.page.locator(dropId));
  }
}
