import { BeforeAll, AfterAll,Before,After,AfterStep,Status } from "@cucumber/cucumber";
import {chromium, Browser,Page, BrowserContext} from "@playwright/test";
import {pageFixture} from "./pageFixture";

let browser:Browser;
let contex:BrowserContext;

BeforeAll(async function(){
    console.log("Ingreso al Before All");
    browser = await chromium.launch({headless:false});
})

Before(async function(){
    console.log("Ingreso al Before");
    contex = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
});

AfterStep(async function ({pickle,result}) {
    const img = await pageFixture.page.screenshot({path: `./allure-results/${pickle.name}.png`,type: "png"});
    await this.attach(img, "image/png");
} )

After(async function({pickle, result}){
    console.log("Ingreso al After");
   
    if(result?.status == Status.FAILED ){
        const img = await pageFixture.page.screenshot({path: `./allure-results/${pickle.name}.png`,type: "png"});
        await this.attach(img, "image/png");
    }

    await pageFixture.page.close();
    await contex.close();
});

AfterAll(async function(){
    console.log("Ingreso al AfterAll");
    await browser.close();
});
