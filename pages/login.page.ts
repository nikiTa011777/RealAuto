import {Page,expect} from '@playwright/test'

export class Login{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }
    private userNameSelector = '#username'
    private passwordSelector = '#password'
    private submitSelector = '#submit'
    private sucessMessageSelector = '.has-text-align-center'
    private logOutSelector = 'text=Log out'
    private errorMessageSelector = '#error'
    private passworderrorSelector = '#error'

    async LoginPage(userName:string, password:string){
        await this.page.goto('/practice-test-login')
        await this.page.fill(this.userNameSelector,userName)
        await this.page.fill(this.passwordSelector,password)
        await this.page.click(this.submitSelector)
    }

    async verifyLogin(){
        await expect(this.page).toHaveURL('/logged-in-successfully/')
        await expect(this.page.locator(this.sucessMessageSelector)).toContainText(/Congratulations student. You successfully logged in/);
    }

    async verifyLogOut(){
        await expect(this.page.locator(this.logOutSelector)).toBeVisible();
    }

    async verifyErrorMessage(){
        await expect(this.page.locator(this.errorMessageSelector)).toBeVisible();
        await expect(this.page.locator(this.errorMessageSelector)).toContainText(/Your username is invalid!/);
    }

    async verifyPasswordErrorMessage(){
        await expect(this.page.locator(this.passworderrorSelector)).toBeVisible();
        await expect(this.page.locator(this.passworderrorSelector)).toHaveText(/Your password is invalid!/);
    }


}