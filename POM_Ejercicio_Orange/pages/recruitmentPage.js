import { expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class RecruitmentPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
        this.btnAdd = page.getByRole('button', { name: ' Add' });
        this.txtFullName = page.getByRole('textbox', { name: 'First Name' });
        this.txtLastName = page.getByRole('textbox', { name: 'Last Name' });
        this.selVacancy = page.getByText('-- Select --');
        this.selOptionVacancy = page.getByText('Junior Account Assistant');
        this.txtEmail = page.getByRole('textbox', { name: 'Type here' }).first();
        this.txtContactNumber = page.getByRole('textbox', { name: 'Type here' }).nth(1);
        this.txtKeywords = page.getByRole('textbox', { name: 'Enter comma seperated words...' });
        this.divDateApplication = page.getByRole('textbox', { name: 'yyyy-dd-mm' });
        this.txtANote = page.locator('textarea');
        this.chkKeepData = page.locator('form i').nth(3);
        this.btnSave = page.getByRole('button', { name: 'Save' });
        this.titleConfirmSave = page.getByRole('heading', { name: 'Application Stage' });
        this.txtFilterCandidateName = page.getByRole('textbox', { name: 'Type for hints...' });
        this.btnFilterSearchCandidate = page.getByRole('button', { name: 'Search' });
        this.selFilterCandidate = page.getByRole('option', { name: 'Pepito Perez' });
        this.celRowResult = page.getByRole('cell', { name: 'Pepito Perez' });
    }

    async createCandidate(fullName, lastName, email, contactNumber, keywords, dateApplication, notes) {
        await this.selectOptionMenu("Recruitment");
        await this.btnAdd.click();
        await this.txtFullName.fill(fullName);
        await this.txtLastName.fill(lastName);
        await this.selVacancy.click();
        await this.selOptionVacancy.click();
        await this.txtEmail.fill(email);
        await this.txtContactNumber.fill(contactNumber);
        await this.txtKeywords.fill(keywords);
        await this.divDateApplication.fill(dateApplication);
        await this.txtANote.fill(notes);
        await this.chkKeepData.click();
        await this.btnSave.click();
        await expect(this.titleConfirmSave).toBeVisible();
    }

    async validateCreateCandidate(fullName, lastName){
        await this.selectOptionMenu("Recruitment");
        await this.txtFilterCandidateName.fill(fullName);
        this.selFilterCandidate = this.page.getByRole('option', { name: fullName + " " + lastName }).locator('span').first();
        await this.selFilterCandidate.click();
        await this.btnFilterSearchCandidate.click();
        this.celRowResult = this.page.getByRole('cell', { name: fullName + " " + lastName })
        await expect(this.celRowResult).toBeVisible();
    }

}