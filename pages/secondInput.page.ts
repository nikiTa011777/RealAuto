import {Page,expect} from '@playwright/test'
import { Routes } from '../utils/routes'

export class SecondInputField{
    readonly page : Page;

    constructor(page:Page){
        this.page=page;
    }
    private addButtonSelector = '#add_btn'
    private secondInputSelector = '#confirmation'

    async InputField() {
        await this.page.goto(Routes.Exception)
        await this.page.locator(this.addButtonSelector).click({timeout: 3000})
        
    }
    async VerifyInput() {
        await expect(this.page.locator(this.secondInputSelector)).toBeVisible()
    }
}