import { test, expect } from '@playwright/test';
import { DropPage } from '../pages/droppable.page.js';

let dropPage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');
  await page.waitForTimeout(1000);
  dropPage = new DropPage(page);
  await expect(page).toHaveURL('https://demoqa.com/droppable');
});

// simple tab
test('simple tab — text changes when dragging', async ({ page }) => {
  await page
    .locator(dropPage.simpleDragId)
    .first()
    .dragTo(page.locator(dropPage.simpleDropId).first());
  await page.waitForTimeout(1000);
  const text = await page.locator(dropPage.simpleDropId).first().textContent();
  expect(text).toContain('Dropped');
});

// accept tab
test('accept tab — text changes when dragging', async ({ page }) => {
  await dropPage.acceptGoToAcceptTab();
  await page
    .locator(dropPage.acceptAcceptableId)
    .first()
    .dragTo(page.locator(dropPage.acceptDropId).nth(1));
  await page.waitForTimeout(1000);
  const text = await page.locator(dropPage.acceptDropId).nth(1).textContent();
  expect(text).toContain('Dropped');
});

test('accept tab — the text does not change when dragging', async ({ page }) => {
  await dropPage.acceptGoToAcceptTab();
  const before = await dropPage.acceptGetAcceptDropText();
  await dropPage.acceptDragNotAcceptable();
  await dropPage.page.waitForTimeout(1000);
  const after = await dropPage.acceptGetAcceptDropText();
  expect(after).not.toContain('Dropped');
  expect(before).toEqual(after);
});

// prevent propogation tab
test('prevent tab — drag to outer not greedy should affect both', async ({ page }) => {
  await dropPage.preventGoToPreventTab();
  await dropPage.preventDragToOuterNotGreedy();
  await dropPage.page.waitForTimeout(1000);
  const afterOuter = await dropPage.getPreventDropText(dropPage.preventOuterNotGreedyId);
  const afterInner = await dropPage.getPreventDropText(dropPage.preventInnerNotGreedyId);
  expect(afterOuter).toContain('Dropped');
  expect(afterInner).toContain('Dropped');
});

test('prevent tab — drag to inner not greedy should affect both', async ({ page }) => {
  await dropPage.preventGoToPreventTab();
  await dropPage.preventDragToInnerNotGreedy();
  await dropPage.page.waitForTimeout(1000);
  const afterOuter = await dropPage.getPreventDropText(dropPage.preventOuterNotGreedyId);
  const afterInner = await dropPage.getPreventDropText(dropPage.preventInnerNotGreedyId);
  expect(afterOuter).toContain('Dropped');
  expect(afterInner).toContain('Dropped');
});

test('prevent tab — drag to outer greedy should affect only outer', async ({ page }) => {
  await dropPage.preventGoToPreventTab();
  const outer = dropPage.page.locator(dropPage.preventOuterGreedyId).first();
  const inner = dropPage.page.locator(dropPage.preventInnerGreedyId).first();
  await dropPage.preventDragToOuterGreedy();
  await dropPage.page.waitForTimeout(1000);
  const afterOuter = await outer.textContent();
  const afterInner = await inner.textContent();
  expect(afterOuter).toContain('Dropped');
  expect(afterInner).toContain('Dropped');
});

test('prevent tab — drag to inner greedy should affect only inner', async ({ page }) => {
  await dropPage.preventGoToPreventTab();
  const outer = dropPage.page.locator(dropPage.preventOuterGreedyId).first();
  const inner = dropPage.page.locator(dropPage.preventInnerGreedyId).first();
  await dropPage.preventDragToInnerGreedy();
  await dropPage.page.waitForTimeout(1000);
  const afterOuter = await outer.textContent();
  const afterInner = await inner.textContent();
  expect(afterInner).toContain('Dropped');
  expect(afterOuter).toContain('Dropped');
});

// revert draggable tab
test('revert tab — will revert element should return to original position', async ({ page }) => {
  await dropPage.revertGoToRevertTab();
  const before = await dropPage.revertGetRevertDropText();
  await dropPage.revertDragWillRevert();
  await dropPage.page.waitForTimeout(1000);
  const after = await dropPage.revertGetRevertDropText();
  expect(after).toContain('Dropped');
  expect(before).not.toEqual(after);
});

test('revert tab — not revert element should stay', async ({ page }) => {
  await dropPage.revertGoToRevertTab();
  const before = await dropPage.revertGetRevertDropText();
  await dropPage.revertDragNotRevert();
  await dropPage.page.waitForTimeout(1000);
  const after = await dropPage.revertGetRevertDropText();
  expect(after).toContain('Dropped');
  expect(before).not.toEqual(after);
});
