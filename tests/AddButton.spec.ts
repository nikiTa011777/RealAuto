import {test} from '@playwright/test'
import { AddButton } from '../pages/AddButton.page'

test('Verifying Row 2 Added',async({page})=>{
    const button = new AddButton(page)
    await button.Add()
    await button.VerifyRow2Added()
})