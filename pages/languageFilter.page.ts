import {Page,expect} from '@playwright/test'
import { Routes } from '../utils/routes'

export class languageFilter {
    readonly page :Page;

    constructor(page:Page){
        this.page = page;

    }

    private LanguageSelector = 'input[name="lang"][value="Java"]'
    private sortBySelector = '#sortBy'
    private LanguageDropDownSelector = 'col_lang'
    
    async Language(){
        await this.page.goto(Routes.TestTable)
        await this.page.locator(this.LanguageSelector).check()
        

    }
    async VerifyingLanguage(){  
        const sortby = await this.page.locator(this.sortBySelector)
        await expect(sortby).toBeVisible({timeout:15000})
        await expect(sortby).toBeEnabled({timeout:15000})
        
        await sortby.selectOption(this.LanguageDropDownSelector)
        await expect(sortby).toHaveValue(this.LanguageDropDownSelector);
    }

}
