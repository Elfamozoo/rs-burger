// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/rs-burger');
});


test('Menu opening and closing', async ({ page }) => {

  await page.getByTestId('menu-burger-open').click();

  await page.getByTestId('menu-burger-close').getByRole('button').click();
});
