import {expect, Page} from '@playwright/test'
import {Routes} from '../utils/routes'

export class MinEnrollment{
    readonly page : Page;

    constructor(page:Page){
        this.page= page;
    }
    private sortBySelector = '#sortBy'
    private EnrollmentDropDownSelector = 'col_enroll'
    private EnrollmentColumn = 'td:nth-child(5)'
    private Label = '10000'
    
    async EnrollmentLogin(){
        await this.page.goto(Routes.TestTable)
    }

    async EnrollmentMinimum(){
        const sortBy = await this.page.locator(this.sortBySelector)
        await expect(sortBy).toBeVisible({timeout:15000})
        await expect(sortBy).toBeEnabled({timeout:15000})

        await sortBy.selectOption(this.EnrollmentDropDownSelector)
        await expect(sortBy).toHaveValue(this.EnrollmentDropDownSelector);


        const enrollment = await this.page.locator(this.EnrollmentColumn).allTextContents()

        for(const value of enrollment){
            const num = Number(value.replace(/,/g, '').trim());
            console.log('enrollment:',num);
            expect(num).toBeGreaterThanOrEqual(1000);
        }
    }


}
