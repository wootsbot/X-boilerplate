import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("must has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/X Boilerplate/);
  });

  // test('get started link', async ({ page }) => {
  //   await page.goto('/');

  //   await page.click('text=🍍 State Management X-state');
  //   await expect(page).toHaveURL(/x-state/);
  //   await expect(page.locator('h1')).toContainText('🍍');
  //   await expect(page.getByRole('heading', { name: 'Hi X-State!' })).toBeVisible();
  //   await expect(page.locator('p')).toContainText('Promise canine example.');
  //   await expect(page.getByRole('button', { name: 'Get Dog data' })).toBeVisible();
  //   await expect(page.getByRole('button', { name: 'Reset Dog data' })).toBeVisible();
  //   await expect(page.getByRole('button', { name: 'Retry Dog data' })).toBeVisible();

  //   await page.getByRole('button', { name: /Get Dog data/i }).click();
  //   await expect(page.getByText('Loading Image...')).toBeVisible();
  //   await expect(page.getByRole('img', { name: 'dog' })).toBeVisible();

  //   await page.getByRole('button', { name: /Reset Dog data/i }).click();
  //   await expect(page.getByText('Loading Image...')).not.toBeVisible();
  //   await expect(page.getByRole('img', { name: 'dog' })).not.toBeVisible();

  //   await page.getByRole('button', { name: /Retry Dog data/i }).click();
  //   await expect(page.getByText('Loading Image...')).toBeVisible();
  //   await expect(page.getByRole('img', { name: 'dog' })).toBeVisible();

  //   await page.click('text=Go back');
  //   await expect(page).toHaveURL('/');
  // });
});
