import { BasePage } from './base.page';

export class DropPage extends BasePage {
  // selectos for tabs
  acceptTabId = '#droppableExample-tab-accept';
  preventTabId = '#droppableExample-tab-preventPropogation';
  revertId = '#droppableExample-tab-revertable';

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

  // accept tab
  async acceptDragAcceptable() {
    await this.goToTab(this.acceptTabId);
    await this.dragToTarget(this.acceptAcceptableId, this.acceptDropId);
  }

  async acceptDragNotAcceptable() {
    await this.goToTab(this.acceptTabId);
    await this.dragToTarget(this.acceptNotAcceptableId, this.acceptDropId);
  }

  // prevent propogation tab
  async preventDragToOuterNotGreedy() {
    await this.goToTab(this.preventTabId);
    await this.dragToTarget(this.preventDragId, this.preventOuterNotGreedyId);
  }

  async preventDragToInnerNotGreedy() {
    await this.goToTab(this.preventTabId);
    await this.dragToTarget(this.preventDragId, this.preventInnerNotGreedyId);
  }

  async preventDragToOuterGreedy() {
    await this.goToTab(this.preventTabId);
    await this.dragToTarget(this.preventDragId, this.preventOuterGreedyId);
  }

  async preventDragToInnerGreedy() {
    await this.goToTab(this.preventTabId);
    await this.dragToTarget(this.preventDragId, this.preventInnerGreedyId);
  }

  // revert draggable tab
  async revertDragWillRevert() {
    await this.goToTab(this.revertId);
    await this.dragToTarget(this.revertWillRevertId, this.revertDropId);
  }

  async revertDragNotRevert() {
    await this.goToTab(this.revertId);
    await this.dragToTarget(this.revertNotRevertId, this.revertDropId);
  }
}
