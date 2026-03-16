import { Page, expect } from '@playwright/test'
import { Routes } from '../utils/routes';

export class AddButtonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private AddSelector = '#add_btn'
    private Row2Selector = '#row2 > input'
    private editSelector = '#edit_btn'


    private SaveSelector = '#save_btn'
    private SaveMessageSelector = '#confirmation'

    async Add() {
        await this.page.goto(Routes.Exception)
        await this.page.click(this.AddSelector)

    }

    async VerifyRow2Added(fieldRow: string) {
        try {
            await this.page.locator(this.editSelector).click({ timeout: 9000 });
        } catch (e) {
            console.log("Edit button not present, continuing...");
        }
        

        await this.page.locator(this.Row2Selector).fill(fieldRow);
        await this.page.locator(this.SaveSelector).last().click();
    }   
    async verifyMessage() {
        await expect(this.page.locator(this.SaveMessageSelector)).toHaveText('Row 2 was saved');
    }

}
