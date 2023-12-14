import {Page} from "@playwright/test";

export class HomePage{
   readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    private Locator ={
        categoria: "(//a[@class='level-top']//span)[3]",
        subcategoria:"(//div[@class='cat-m-int']//img)[1]",
        marca:"//h2[text()='Marca']",
        marcaLG:"//a[contains(text(),'LG')]",
        primerArticulo:"(//img[@class='product-image-photo'])[1]",
        aniadiralcarro:"[id=product-addtocart-button]",
        textobusqueda:"[id='search']",       
        aniadirPrimerArticulo:"(//span[text()='Añadir al carro'])[1]",
        carrodeCompra:"a.action.showcart",
        botonComprar:"[id=top-cart-btn-checkout]",
        botonCrearCuenta:"//span[text()='Crea tu cuenta']",
        botonIngresar:"a.hiraoka-login",
        botonRegistrame:"//a[text()='Inicia sesión']/following-sibling::a",
        
    }

    async  selectCategoria()  : Promise<void> {
        console.log("HomePage selectCategoria");         
       await this.page.click(this.Locator.categoria);  
    }

    async  selectSubCategoria()  : Promise<void>{
        console.log("selectSubCategoria");
        await this.page.click(this.Locator.subcategoria);
    }

   
    async  selectMenuMarca()  : Promise<void>{
        console.log("selectMenuMarca");
        await this.page.click(this.Locator.marca);       
    }

    async  selectMarca()  : Promise<void>{
        console.log("selectMarca");     
        await this.page.click(this.Locator.marcaLG);
    }

    async  firstArticulo()  : Promise<void>{
        console.log("firstArticulo");
        await this.page.click(this.Locator.primerArticulo);
    }

    async  addToCart()  : Promise<void>{
        console.log("addToCart");
        await this.page.click(this.Locator.aniadiralcarro);
    }

    
    async  searchArticulo(textoBusqueda:string) : Promise<void>{
        const element= this.page.locator(this.Locator.textobusqueda);
        await element.fill(textoBusqueda);
       
    } 

    async  search() : Promise<void>{        
        await this.page.keyboard.press("Enter");
        await this.page.waitForTimeout(10000);     
    } 
 
    async  addToCartFirst() : Promise<void>{        
        await this.page.click(this.Locator.aniadirPrimerArticulo);
    } 
    
    async  goToCard() : Promise<void>{ 
        await this.page.waitForTimeout(10000);        
        await this.page.click(this.Locator.carrodeCompra);
        await this.page.waitForTimeout(10000);  
    } 

    async  selectBuy() : Promise<void>{        
        await this.page.click(this.Locator.botonComprar);
    } 

    async  selectNewAccount() : Promise<void>{        
        await this.page.click(this.Locator.botonCrearCuenta);
    } 

    async  selectLogin() : Promise<void>{        
        await this.page.click(this.Locator.botonIngresar);
    } 

    async  selectRegister() : Promise<void>{        
        await this.page.click(this.Locator.botonRegistrame);
    } 

}