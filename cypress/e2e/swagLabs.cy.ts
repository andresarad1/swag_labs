import { AddShoppingCart } from "../pages/purchaseFlow";

const addShoppingCart = new AddShoppingCart();

describe("Tests a swag lab", () => {
    beforeEach(()=> {
        addShoppingCart.goToSwagLab()
    })

    it("Realizar la compra de un producto", () =>{
        addShoppingCart.fillLogin()
        addShoppingCart.addToCart()
        addShoppingCart.goShopping()
        addShoppingCart.validatePurchase()
    })
})