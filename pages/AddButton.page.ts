import {Page,expect} from '@playwright/test'

export class AddButton{
    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    private AddSelector = '#add_btn'
    private Row2Selector = '#confirmation'

    async Add(){
        await this.page.goto('/practice-test-exceptions/')
        await this.page.click(this.AddSelector)
    }
    async VerifyRow2Added(){
        await expect(this.page.locator(this.Row2Selector)).toBeVisible();
    }
}

// practice-test-exceptions/