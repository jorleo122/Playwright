export class BasePage{

    constructor(page){
        this.page = page;
        this.optionMenuRecruitment = page.getByRole('link', { name: 'Recruitment' });
    }

    async selectOptionMenu(optionMenu){
        if(optionMenu === "Recruitment"){
            await this.optionMenuRecruitment.click();
        }
    }

}