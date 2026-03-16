import {expect, Page} from '@playwright/test'
import { Routes } from '../utils/routes'

export class Instructions{
    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }
    private instructionSelector = '#instructions'
    private addSelector = '#add_btn'
    
    async instructions(){
        await this.page.goto(Routes.Exception)
        await this.page.locator(this.addSelector).click()
        
    }
    async verifyInstructionMessage(){
        await expect(this.page.locator(this.instructionSelector)).toBeHidden();
    }
}