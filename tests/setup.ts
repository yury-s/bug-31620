import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  // ...
  await page.context().addCookies([
    { name: 'my_cookie', value: 'my_cookie_value', url: 'https://github.com' },
  ]);

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});