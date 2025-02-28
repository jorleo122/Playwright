import { ProductPage } from "./productPage";

export class CartPage{
    constructor(page){
        this.page = page;
    }

    async validateCart(){
        const productPage = new ProductPage(this.page);
    }
}