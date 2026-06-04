// eslint-disable-next-line no-unused-vars, no-undef
const {test, describe, expect, beforeEach} = require('@playwright/test');

describe('Pokedex', () => {
    test('Front page can be opened', async({page}) => {
        await page.goto('');
        await expect(page.getByText('ivysaur')).toBeVisible();
        await expect(page.getByText('this test should fail so I can test my workflow')).toBeVisible();
    });
    test('User can navigate', async({page}) => {
        await page.goto('');
        await page.getByText('ivysaur').click();
        await expect(page.getByText('Overgrow')).toBeVisible();
    })
});