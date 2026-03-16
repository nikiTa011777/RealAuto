import {Page,expect} from '@playwright/test'
import { Routes } from '../utils/routes'

export class EditRow{
    readonly page : Page;

    constructor(page:Page){
        this.page = page;

    }
    
    private editSelector = '#edit_btn'
    private Row1Selector = '#row1 > input'
    private SaveSelector = '#save_btn'
    private SaveRow1Selector = '#confirmation'

    async EditRow1(Row1:string){
        await this.page.goto(Routes.Exception)
        await this.page.locator(this.editSelector).click()
        await this.page.locator(this.Row1Selector).clear()
        await this.page.locator(this.Row1Selector).fill(Row1)
        await this.page.locator(this.SaveSelector).click()

    }

    async verifyTextChange(){
        await expect(this.page.locator(this.SaveRow1Selector)).toHaveText(/Row 1 was saved/)
    }


}