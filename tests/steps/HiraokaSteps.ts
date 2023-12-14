
import { Given, When, Then, setDefaultTimeout, setWorldConstructor} from "@cucumber/cucumber";
import  {AccountPage} from '../pages/AccountPage';
import {ExcelReader} from '../pages/ExcelReader';
import {pageFixture} from "../../hooks/pageFixture";
import {HomePage}  from "../pages/HomePage";

let homePage: HomePage;

setDefaultTimeout(60*1000*2)


Given('Ingreso a la pagina hiraoka', async function () {
   console.log("Ingreso Given"); 
   homePage = new HomePage(pageFixture.page); 
   
   await pageFixture.page.goto('https://hiraoka.com.pe/');      
});

When('Selecciono la opción Registrame', async function () {
    
   console.log("Ingreso la opción Registrame");
  
 
});

When('Ingreso datos del usuario', async function () {
    console.log("Ingreso datos");
       
    
    const excelReader =  new ExcelReader;  
    const account = new AccountPage(pageFixture.page); 
    var filePath= "data.xlsx";
    var sheetname="Hoja1";

    
      var nombre = await excelReader.lectExcel(filePath,sheetname,"A2");     
      var apellidoPaterno = await excelReader.lectExcel(filePath,sheetname,"B2");
      var fechaNacimiento = await excelReader.lectExcel(filePath,sheetname,"C2");
      var tipoDocumento = await excelReader.lectExcel(filePath,sheetname,"D2");
      var numeroDocumento = await excelReader.lectExcel(filePath,sheetname,"E2");
      var celular = await excelReader.lectExcel(filePath,sheetname,"F2");
      var correoElectronico = await excelReader.lectExcel(filePath,sheetname,"G2");
      var password = await excelReader.lectExcel(filePath,sheetname,"H2");
    
      console.log(correoElectronico);
      await account.NewAcount(nombre,apellidoPaterno,fechaNacimiento,tipoDocumento,numeroDocumento,celular,correoElectronico,password);
    
 });

 Then('Se muestra mensaje', async function () {
   console.log("Se muestra mensaje");
 
});

When('Selecciono categoria Eletrohogar', async function () {
   console.log("Selecciono categoria Eletrohogar");   
   await homePage.selectCategoria();

});

When('Selecciono Electrodomesticos Refrigeradora', async function () {
   console.log("Selecciono Electrodomesticos Refrigeradora"); 
   await homePage.selectSubCategoria(); 
});

When('Selecciono el menu Marca', async function () {
   console.log("Selecciono el menu Marca"); 
   await homePage.selectMenuMarca();
});

When('Selecciono Marca LG', async function () {
   console.log("Selecciono Marca LG"); 
   await homePage.selectMarca();
});

When('Selecciono Primer articulo', async function () {
   console.log("Selecciono Primer articulo");
  await homePage.firstArticulo();

});

When('Aniado al carrito', async function () {
   console.log("Aniado al carrito");  
   await homePage.addToCart();
});

When('Busco Televisores smart', async function () {
   console.log("Busco Televisores smart");
   await homePage.searchArticulo("Televisor");
  
});

When('click boton buscar', async function () {
   console.log("click boton buscar");   
   await homePage.search();
});

When('Aniado al carro el primer articulo encontrado', async function () {
   console.log("Aniado al carro el primer articulo encontrado");
   await homePage.addToCartFirst();
});

When('Ir al Carrito', async function () {
   console.log("Ir al Carrito");
   await homePage.goToCard();
});
When('Selecciono comprar', async function () {
   console.log("Selecciono comprar");
   await homePage.selectBuy();
});
When('Selecciono Compra como Cliente Nuevo', async function () {
   console.log("Selecciono Compra como Cliente Nuevo");
   await homePage.selectNewAccount();
});
When('Llenar Datos de Cliente Nuevo', async function () {
   console.log("Llenar Datos de Cliente Nuevo");
   const excelReader =  new ExcelReader;  
    const accountPage = new AccountPage(pageFixture.page); 
    var filePath= "data.xlsx";
    var sheetname="Hoja1";

    
      var nombre = await excelReader.lectExcel(filePath,sheetname,"A2");     
      var apellidoPaterno = await excelReader.lectExcel(filePath,sheetname,"B2");
      var fechaNacimiento = await excelReader.lectExcel(filePath,sheetname,"C2");
      var tipoDocumento = await excelReader.lectExcel(filePath,sheetname,"D2");
      var numeroDocumento = await excelReader.lectExcel(filePath,sheetname,"E2");
      var celular = await excelReader.lectExcel(filePath,sheetname,"F2");
      var correoElectronico = await excelReader.lectExcel(filePath,sheetname,"G2");
      var password = await excelReader.lectExcel(filePath,sheetname,"H2");
          
      await accountPage.NewAcount(nombre,apellidoPaterno,fechaNacimiento,tipoDocumento,numeroDocumento,celular,correoElectronico,password);
   
});

When('Ingreso datos de usuario registrado', async function () {
   console.log("Ingreso datos de usuario registrado");
   const excelReader =  new ExcelReader;  
   const accountPage = new AccountPage(pageFixture.page); 
   var filePath= "data.xlsx";
    var sheetname="Hoja2";
   var email = await excelReader.lectExcel(filePath,sheetname,"A2");
   var password = await excelReader.lectExcel(filePath,sheetname,"B2");
   await accountPage.login(email,password);
});

Given('Ingreso a la pagina de registro en hiraoka', async function () {
   console.log("Ingreso Given");    
   await pageFixture.page.goto('https://hiraoka.com.pe/customer/account/create/');
           
});
When('Selecciono la opción Ingresar', async function () {
   console.log("Selecciono la opción Ingresar");
   await homePage.selectLogin();
});
When('Seleciono la opción Registrarme', async function () {
   console.log("Selecciono la opción Ingresar");
   await homePage.selectRegister();
});
When('Datos correctos',async function () {
   console.log("Datos");
})

When('Lleno datos para validar', async function () {
   console.log("Llenar Datos de Cliente Nuevo");
   const excelReader =  new ExcelReader;  
    const accountPage = new AccountPage(pageFixture.page); 
    var filePath= "data.xlsx";
    var sheetname="Hoja1";

    
      var nombre = await excelReader.lectExcel(filePath,sheetname,"A3");     
      var apellidoPaterno = await excelReader.lectExcel(filePath,sheetname,"B3");
      var fechaNacimiento = await excelReader.lectExcel(filePath,sheetname,"C3");
      var tipoDocumento = await excelReader.lectExcel(filePath,sheetname,"D3");
      var numeroDocumento = await excelReader.lectExcel(filePath,sheetname,"E3");
      var celular = await excelReader.lectExcel(filePath,sheetname,"F3");
      var correoElectronico = await excelReader.lectExcel(filePath,sheetname,"G3");
      var password = await excelReader.lectExcel(filePath,sheetname,"H3");
          
      await accountPage.NewAcount(nombre,apellidoPaterno,fechaNacimiento,tipoDocumento,numeroDocumento,celular,correoElectronico,password);
   
});