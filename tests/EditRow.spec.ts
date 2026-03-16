import {test} from '@playwright/test'
import {EditRow } from '../pages/EditRow.page'
import {row1Field } from '../utils/testData'
import { Instructions } from '../pages/Instructions.page'
import { SecondInputField } from '../pages/secondInput.page'

test('Edit Button',async({page})=>{
    const editrow = new EditRow(page)
    await editrow.EditRow1(row1Field.Row1)
    await editrow.verifyTextChange()
})

test('Verifying instructions message disable',async({page})=>{
    const verifyingInstruct = new Instructions(page)
    await verifyingInstruct.instructions()
    await verifyingInstruct.verifyInstructionMessage()

})

test('Verifying ROW2 is displayed',async({page})=>{
    const Row2field = new SecondInputField(page)
    await Row2field.InputField()
    await Row2field.VerifyInput()
})