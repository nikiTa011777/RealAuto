import{Page,expect} from '@playwright/test'
import { Routes } from '../utils/routes'

export class CombinedFilter{
    readonly page :Page;
    
    constructor(page:Page){
        this.page = page;
    }

    private pythonSelector = 'input[name="lang"][value="Python"]'
    private intermediateSelector = 'input[name="level"][value="Intermediate"]'
    private advanceSelector = 'input[name="level"][value="Advanced"]'
    private enrollmentColumnSelector = 'td:nth-child(5)'
    private minEnrolmentSelector = '#enrollDropdown > ul > li:nth-child(3)'
    private LanguageSelector = 'td:nth-child(3)'
    private levelColumn = 'td:nth-child(4)'

    async FilterLogin(){
        await this.page.goto(Routes.TestTable)
        
    }

    async Filter(){
        await this.page.locator(this.pythonSelector).check()
        await this.page.locator(this.intermediateSelector).uncheck()
        await this.page.locator(this.advanceSelector).uncheck()
        await this.page.locator(this.minEnrolmentSelector).click()


    }

    async MinimumEnrollment(minEnrolment:number=10000){
        const row = this.page.locator('tbody-tr')
        const count = await row.count()

        for(let i=0;i<count;i++){
            const rows = row.nth(i);
            await expect(rows.locator(this.LanguageSelector)).toHaveText('Python')
            await expect(rows.locator(this.levelColumn)).toHaveText('Beginner');
        
            const enrollText = await row.locator(this.enrollmentColumnSelector).textContent();
            const num = parseInt(enrollText?.replace(/,/g, '').trim() || '0', 10);

            expect(num).toBeGreaterThanOrEqual(minEnrolment);  

        }

    }
}