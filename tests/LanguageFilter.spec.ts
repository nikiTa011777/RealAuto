import {test} from '@playwright/test'
import {languageFilter } from '../pages/languageFilter.page'
import { LevelFilter } from '../pages/levelFilter.page'
import { MinEnrollment } from '../pages/MinEnrollment.page'


test('Language Filter',async({page})=>{
    const Languages = new languageFilter(page)
    await Languages.Language()
    await Languages.VerifyingLanguage()
})

test('Level Filter verifying',async({page})=>{
    const level = new LevelFilter(page)
    await level.Filter()
})

test('Minimum Enrollment greater than 10000',async({page})=>{
    const minimum = new MinEnrollment(page)
    await minimum.EnrollmentLogin()
    await minimum.EnrollmentMinimum()
})