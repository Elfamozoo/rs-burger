// @ts-check
const { test, expect } = require('@playwright/test');
test.describe('Test-burger', () => {
  const clickByMenu = async (testid, page) => {
    console.log(page);
    await page.getByTestId('menu-burger-open').click();
    await page.getByTestId(testid).click();
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/rs-burger');
  });

  test('Menu opening and closing', async ({ page }) => {
    await page.getByTestId('menu-burger-open').click();

    await page.getByTestId('menu-burger-close').getByRole('button').click();
  });


  test('Navigate with the menu', async ({ page }) => {
    ["link-resto", "link-accueil", "link-carte"].forEach(async (testid) => {
      clickByMenu(testid, page)

    })
  })
});





