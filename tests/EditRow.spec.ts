import {test} from '@playwright/test'
import {EditRow } from '../pages/EditRow.page'
import {row1Field } from '../utils/testData'

test('Edit Button',async({page})=>{
    const editrow = new EditRow(page)
    await editrow.EditRow1(row1Field.Row1)
    await editrow.verifyTextChange()
})