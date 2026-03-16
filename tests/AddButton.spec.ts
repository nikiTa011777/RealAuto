import {test} from '@playwright/test'
import { AddButtonPage } from '../pages/AddButton.page'
import { row2FieldAdded } from '../utils/testData'

test('Verifying Row 2 Added',async({page})=>{
    const button = new AddButtonPage(page)
    await button.Add()
    
    await button.VerifyRow2Added(row2FieldAdded.Row2)
    await button.verifyMessage()
})