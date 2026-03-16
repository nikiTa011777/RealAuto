import {Page,expect} from '@playwright/test'
import {Routes} from '../utils/routes'

export class LevelFilter{
    readonly page: Page

    constructor(page:Page){
        this.page = page;
    }
    private intermediateSelector = 'input[name="level"][value="Intermediate"]'
    private advanceSelector = 'input[name="level"][value="Advanced"]'
    private beginnerSelector = 'input[name="level"][value="Beginner"]'

    async Filter(){
        await this.page.goto(Routes.TestTable)
        await this.page.locator(this.intermediateSelector).uncheck()
        await this.page.locator(this.advanceSelector).uncheck()

    }
}