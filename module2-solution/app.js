(function () {

'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];    
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var itemBought = this;
    
    itemBought.items = ShoppingListCheckOffService.getBoughtItems();
}
    
ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];    
function ToBuyShoppingController(ShoppingListCheckOffService){
    var itemBuyer = this;
    
    //itemBuyer.name = ""; itemBuyer.quantity = 0;
    
    itemBuyer.buyItem = function(name, quantity) {
        ShoppingListCheckOffService.buyItem(name,quantity);        
    };
    
    itemBuyer.removeItem = function(index) {
        ShoppingListCheckOffService.removeItem(index);        
    };
       
    itemBuyer.items = ShoppingListCheckOffService.getBuyItems();
}
    
function ShoppingListCheckOffService() {
    var service = this;
    
    var buy = [ { name: "cookies", quantity: 10 },
                  { name: "bananas", quantity: 5 },
                  { name: "drinks", quantity: 6 },
                  { name: "sugar", quantity: 3 },
                  { name: "water", quantity: 4 },
                  { name: "milk", quantity: 11 } ];
    
    var bought = [];
    
    service.buyItem = function(itemName, itemQuantity) {
        var item = {
            name : itemName,
            quantity : itemQuantity
        }
        bought.push(item); 
    };
    
    service.removeItem = function(itemIndex){
        buy.splice(itemIndex,1);
    };
    
    service.getBuyItems = function() {
        return buy;
    };
    
    service.getBoughtItems = function(){
        return bought;  
    };
}

}
)();