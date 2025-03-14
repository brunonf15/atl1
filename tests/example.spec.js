// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/App/);
});
