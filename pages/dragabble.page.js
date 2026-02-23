import { BasePage } from './base.page';

export class DragPage extends BasePage {
  // selectos for tabs
  axisTabId = '#draggableExample-tab-axisRestriction';
  containerTabId = '#draggableExample-tab-containerRestriction';

  // selectors for simple tab
  simpleDragBox = '#dragBox';

  // selectors for axis restricted tab
  axisOnlyX = '#restrictedX';
  axisOnlyY = '#restrictedY';

  // selectors for container restricted tab
  containerWithinTheBoxId = 'text="I\'m contained within the box"';
  containerContainmentId = '#containmentWrapper';

  // simple tab
  async simpleDrag() {
    await this.dragToTarget(this.simpleDragBox, 'body');
  }

  async getSimplePosition() {
    const position = await this.page.locator(this.simpleDragBox).first().boundingBox();
    return { x: position.x, y: position.y };
  }

  // axis restricted tab
  async goToAxisTab() {
    await this.goToTab(this.axisTabId);
    await this.page.waitForTimeout(1000);
  }

  async dragOnlyX() {
    await this.dragToTarget(this.axisOnlyX, 'body');
  }

  async dragOnlyY() {
    await this.dragToTarget(this.axisOnlyY, 'body');
  }

  async getOnlyXPosition() {
    const positionX = await this.page.locator(this.axisOnlyX).first().boundingBox();
    return { x: positionX.x, y: positionX.y };
  }

  async getOnlyYPosition() {
    const positionY = await this.page.locator(this.axisOnlyY).first().boundingBox();
    return { x: positionY.x, y: positionY.y };
  }

  // container restricted tab
  async goToContainerTab() {
    await this.goToTab(this.containerTabId);
    await this.page.waitForTimeout(1000);
  }

  async dragInContainer() {
    await this.dragToTarget(this.containerWithinTheBoxId, this.containerContainmentId);
  }

  async getBoxPosition() {
    const positionBox = await this.page.locator(this.containerWithinTheBoxId).first().boundingBox();
    return positionBox;
  }
}
