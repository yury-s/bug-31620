import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://github.com/');

  const cookies = await page.context().cookies();
  expect(cookies.filter(c => c.name === 'my_cookie')[0].value).toBe('my_cookie_value');
});

