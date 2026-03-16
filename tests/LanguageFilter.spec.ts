import {test} from '@playwright/test'
import {languageFilter } from '../pages/languageFilter.page'


test('Language Filter',async({page})=>{
    const Languages = new languageFilter(page)
    await Languages.Language()
    await Languages.VerifyingLanguage()
})
