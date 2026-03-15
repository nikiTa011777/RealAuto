import {test} from '@playwright/test'
import { Login } from '../pages/login.page'
import { InvalidUser, Users, InvalidPassword} from '../utils/testData'

test('Valid credentials',async({page})=>{
    const login = new Login(page)
    await login.LoginPage(Users.UserName,Users.password)
    await login.verifyLogin()
    await login.verifyLogOut()
})

test('Invalid Credentials',async({page})=>{
    const login = new Login(page)
    await login.LoginPage(InvalidUser.Username,InvalidUser.password)
    await login.verifyErrorMessage();
    
})

test('Invalid Password',async({page})=>{
    const login = new Login(page)
    await login.LoginPage(InvalidPassword.Username,InvalidPassword.password)
    await login.verifyPasswordErrorMessage();
})