import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// เพิ่มใน example.spec.js
test('third test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('h1')).toBeVisible();
});

test('fourth test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('text="Get started"');
  await expect(page).toHaveURL(/.*intro.*/);
});


// import { test, expect } from '@playwright/test';

// test('Google search test', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   await expect(page).toHaveTitle(/Google/);
  
//   // ค้นหา
//   await page.fill('textarea[name="q"]', 'Playwright testing');
//   await page.press('textarea[name="q"]', 'Enter');
  
//   // รอผลลัพธ์
//   await page.waitForSelector('h3');
//   await expect(page.locator('h3')).toContainText('Playwright');
// });

// test('GitHub test', async ({ page }) => {
//   await page.goto('https://github.com');
//   await expect(page).toHaveTitle(/GitHub/);
  
//   // คลิกปุ่ม Sign up
//   await page.click('text=Sign up');
//   await expect(page).toHaveURL(/.*signup.*/);
// });