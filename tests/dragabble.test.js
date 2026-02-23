import { test, expect } from '@playwright/test';
import { DragPage } from '../pages/dragabble.page.js';

let dragPage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/dragabble');
  await page.waitForTimeout(1000);
  dragPage = new DragPage(page);
  await expect(page).toHaveURL('https://demoqa.com/dragabble');
});

// simple tab
test('simple tab — element should move', async ({ page }) => {
  const before = await dragPage.getSimplePosition();
  await dragPage.simpleDrag();
  await dragPage.page.waitForTimeout(1000);
  const after = await dragPage.getSimplePosition();
  expect(after.x).not.toBe(before.x);
});

// axis restricted tab
test('axis tab — only X should move horizontally', async ({ page }) => {
  await dragPage.goToAxisTab();
  const before = await dragPage.getOnlyXPosition();
  await dragPage.dragOnlyX();
  await dragPage.page.waitForTimeout(1000);
  const after = await dragPage.getOnlyXPosition();
  expect(after.x).not.toBe(before.x);
  expect(after.y).toBe(before.y);
});

test('axis tab — only Y should move vertically', async ({ page }) => {
  await dragPage.goToAxisTab();
  const before = await dragPage.getOnlyYPosition();
  await dragPage.dragOnlyY();
  await dragPage.page.waitForTimeout(1000);
  const after = await dragPage.getOnlyYPosition();
  expect(after.y).not.toBe(before.y);
  expect(after.x).toBe(before.x);
});

// container restricted tab
test('container tab — element should move inside container', async ({ page }) => {
  await dragPage.goToContainerTab();
  const before = await dragPage.getBoxPosition();
  await dragPage.dragInContainer();
  await dragPage.page.waitForTimeout(1000);
  const after = await dragPage.getBoxPosition();
  expect(after.x).not.toBe(before.x);
});
