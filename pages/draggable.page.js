import { BasePage } from './base.page';

export class DragPage extends BasePage {
  allPage = 'body';

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
    await this.dragToTarget(this.simpleDragBox, this.allPage);
  }

  // axis restricted tab
  async dragOnlyX() {
    await this.goToTab(this.axisTabId);
    await this.dragToTarget(this.axisOnlyX, this.allPage);
  }

  async dragOnlyY() {
    await this.goToTab(this.axisTabId);
    await this.dragToTarget(this.axisOnlyY, this.allPage);
  }

  async getOnlyXPosition() {
    const positionX = await this.page.locator(this.axisOnlyX).boundingBox();
    return { x: positionX.x, y: positionX.y };
  }

  async getOnlyYPosition() {
    const positionY = await this.page.locator(this.axisOnlyY).boundingBox();
    return { x: positionY.x, y: positionY.y };
  }

  // container restricted tab
  async dragInContainer() {
    await this.goToTab(this.containerTabId);
    await this.dragToTarget(this.containerWithinTheBoxId, this.containerContainmentId);
  }

  async getBoxPosition() {
    const positionBox = await this.page.locator(this.containerWithinTheBoxId).boundingBox();
    return positionBox;
  }
}
