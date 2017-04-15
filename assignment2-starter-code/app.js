(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.removeItem = function(itemIndex){
    try{
      ShoppingListCheckOffService.removeItem(itemIndex);
    }catch(error){
      toBuy.emptyMessage = error.message;
    }

  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();

  alreadyBought.isAlreadyBoughtEmpty = function(){
    return alreadyBought.itemsAlreadyBought.length === 0;
  };
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuy = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Donuts",
      quantity: 2
    },
    {
      name: "Cookies",
      quantity: 3
    },
    {
      name: "Chocolate",
      quantity: 4
    },
    {
      name: "Water",
      quantity: 5
    }
  ];
  var bought = [];

  service.getItemsToBuy = function(){
    return toBuy;
  }

  service.removeItem = function(item, itemIndex){
    bought.push(item);
    toBuy.splice(itemIndex, 1);
    if(toBuy.length === 0){
      throw new Error("Everything is bought!");
    }
  }

  service.getItemsAlreadyBought = function(){
    return bought;
  }
}

})();
