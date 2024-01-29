import {loginPage, selectProduct,shopping,checkoutComplete} from "../support/swagLabsLocators";


const swagLab = Cypress.env("swaglab")

export class AddShoppingCart {

    goToSwagLab(){
        cy.visit(swagLab.url)
    }

    fillLogin(){
        cy.fixture("swagLabs.json").then((userdata)=>{
            cy.get(loginPage.userName).type(userdata.userName, {force:true});
            cy.get(loginPage.password).type(userdata.password, {force:true});
            cy.get(loginPage.loginBtn).click()
        })        
    }

    addToCart(){
        cy.get(selectProduct.selectProduct).contains("Sauce Labs Backpack").click();
        cy.get(selectProduct.addToCart).click()     
        cy.get(selectProduct.shoppingCart).click();
    }

    goShopping(){
        cy.fixture("swagLabs.json").then((userdata)=>{
            cy.get(shopping.checkoutBtn).click()
            cy.get(shopping.firstName).type(userdata.firstName,  {force:true} )
            cy.get(shopping.lastName).type(userdata.lastName,    {force:true} )
            cy.get(shopping.postalCode).type(userdata.postalCode,{force:true})
            cy.get(shopping.continueBtn).click()
            cy.get(shopping.finishBtn).click()
        })      
    }

    validatePurchase(){
        cy.get(checkoutComplete.msgComplete).should("contain", "Thank you for your order!")
        cy.get(checkoutComplete.backHome).should("exist")
    }

}