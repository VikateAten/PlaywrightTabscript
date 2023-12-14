import {Page} from "@playwright/test";

export class AccountPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async login(email:string, password:string) :Promise<void>{
        await  this.page.locator("[id='customer-email']").fill(email);
        await  this.page.locator("[id='pass']").fill(password);
    }
   
    async  NewAcount(c_nombre:string,c_apellidoPaterno:string,c_fechaNacimiento:string,c_tipoDocumento:string,c_numeroDocumento:string,
                     c_celular:string, c_correoElectronico:string, c_contrasenia:string) : Promise<void>{

        const nombre = this.page.locator("[name='firstname']");    
        const apellidoPaterno = this.page.locator("[name='lastname']");    
        const fechaNacimiento = this.page.locator("[id='example-date']");
        const tipoDocumento = this.page.locator("[id='document_type']");
        const numeroDocumento = this.page.locator("[id='document_number']");
        const celular = this.page.locator("[id='cellphone']");
        const correoElectronico = this.page.locator("[id='email_address']");
        const contrasenia = this.page.locator("[id='password']");

        await nombre.fill(c_nombre);
        await apellidoPaterno.fill(c_apellidoPaterno);  
        //await fechaNacimiento.fill(c_fechaNacimiento);
        await tipoDocumento.selectOption(c_tipoDocumento);
        await numeroDocumento.fill(c_numeroDocumento);
        await celular.fill(c_celular);
        await correoElectronico.fill(c_correoElectronico);
        await contrasenia.fill(c_contrasenia);

        await this.selectFecNacimiento('1979','05','16');
  
    }

    async  selectFecNacimiento(year:string, month:string,day:string) : Promise<void>{

        var monthAbrev:string="";

        switch(month) { 
        case "01": { 
            monthAbrev = "Ene";
            break; 
        }                      
        case "02":{
            monthAbrev = "Feb";
            break;}            
        case "03" :{
            monthAbrev = "Mar";
            break;}
        case "04" :{
            monthAbrev = "Abr";
            break;}
        case "05" :{
            monthAbrev = "May";
            break;}
        case "06" :{
            monthAbrev = "Jun";
            break;}
        case "07" :{
            monthAbrev = "Jul";
            break;}
        case "08" :{
            monthAbrev = "Ago";
            break;}
        case "09" :{
            monthAbrev = "Sep";
            break;}
        case "10" :{
            monthAbrev = "Oct";
            break;}
        case "11" :{
            monthAbrev = "Nov";
            break;}
        case "12" :{
            monthAbrev = "Dic";
            break;}
        default: { 
            monthAbrev = ""; 
            break; 
            } 
         } 

        await this.page.click("[id='example-date']");
        await this.page.waitForTimeout(1000);
        await  this.page.locator("//select[@aria-label='Select year']").selectOption(year);
        await this.page.waitForTimeout(1000);
        await  this.page.locator("//select[@aria-label='Select month']").selectOption(monthAbrev);
       
    }


}