import { BasePage } from './base.page';

export class DropPage extends BasePage {
  // selectos for tabs
  acceptTabId = '#droppableExample-tab-accept';
  preventTabId = '#droppableExample-tab-preventPropogation';
  revertTabId = '#droppableExample-tab-revertable';

  // selectors for simple tab
  simpleDragId = '#draggable';
  simpleDropId = '#droppable';

  // selectors for accept tab
  acceptAcceptableId = '#acceptable';
  acceptNotAcceptableId = '.drag-box';
  acceptDropId = '.drop-box';

  // selectors for prevent propogation tab
  preventDragId = '#dragBox';
  preventOuterNotGreedyId = '#notGreedyDropBox';
  preventInnerNotGreedyId = '#notGreedyInnerDropBox';
  preventOuterGreedyId = '#greedyDropBox';
  preventInnerGreedyId = '#greedyDropBoxInner';

  // selectors for revert draggable tab
  revertWillRevertId = '#revertable';
  revertNotRevertId = '#notRevertable';
  revertDropId = '#droppable';

  // simple tab
  async simpleDragToTarget() {
    await this.dragToTarget(this.simpleDragId, this.simpleDropId);
  }

  async getSimpleDropText() {
    return await this.page.locator(this.simpleDropId).first().textContent();
  }

  // accept tab
  async acceptGoToAcceptTab() {
    await this.goToTab(this.acceptTabId);
    await this.page.waitForTimeout(1000);
  }

  async acceptDragNotAcceptable() {
    const drag = this.page.locator(this.acceptNotAcceptableId).nth(2);
    const drop = this.page.locator(this.acceptNotAcceptableId).nth(1);
    await drag.dragTo(drop);
  }

  async acceptGetAcceptDropText() {
    return await this.page.locator(this.acceptNotAcceptableId).nth(1).textContent();
  }

  // prevent propogation tab
  async preventGoToPreventTab() {
    await this.goToTab(this.preventTabId);
    await this.page.waitForTimeout(1000);
  }

  async preventDragToOuterNotGreedy() {
    await this.dragToTarget(this.preventDragId, this.preventOuterNotGreedyId);
  }

  async preventDragToInnerNotGreedy() {
    await this.dragToTarget(this.preventDragId, this.preventInnerNotGreedyId);
  }

  async preventDragToOuterGreedy() {
    await this.dragToTarget(this.preventDragId, this.preventOuterGreedyId);
  }

  async preventDragToInnerGreedy() {
    await this.dragToTarget(this.preventDragId, this.preventInnerGreedyId);
  }

  async getPreventDropText(selector) {
    return await this.page.locator(selector).first().textContent();
  }

  // revert draggable tab
  async revertGoToRevertTab() {
    await this.goToTab(this.revertTabId);
    await this.page.waitForTimeout(1000);
  }

  async revertDragWillRevert() {
    const drop = this.page.locator('#droppable').nth(1);
    const drag = this.page.locator(this.revertWillRevertId).first();

    await drag.dragTo(drop);
  }

  async revertDragNotRevert() {
    const drop = this.page.locator('#droppable').nth(1);
    const drag = this.page.locator(this.revertNotRevertId).first();

    await drag.dragTo(drop);
  }

  async revertGetRevertDropText() {
    return await this.page.locator('#droppable').nth(1).textContent();
  }
}
