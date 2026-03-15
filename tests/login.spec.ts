import {test} from '@playwright/test'
import { Login } from '../pages/login.page'
import { Users } from '../utils/testData'

test('Valid credentials',async({page})=>{
    const login = new Login(page)
    await login.LoginPage(Users.UserName,Users.password)
    await login.verifyLogin()
})