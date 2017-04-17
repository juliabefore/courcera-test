(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'itemCtrl',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController(){
  var itemCtrl = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;

  menu.getItems = function(){
  var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  promise.then(function (response) {
    menu.found = response;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong: " + error);
  });
}

  menu.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;

  var foundItems = [];
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath),
      params: {
        item: searchTerm
      }
    }).then(function(response){
      var itemArr = response.data.menu_items;
      for(var i = 0; i < itemArr.length; i++){
        if(itemArr[i].description.includes(searchTerm)){
          foundItems.push(itemArr[i]);
        }
      }
        return foundItems;
    });
};

  service.removeItem = function(itemIndex){
    foundItems.splice(itemIndex, 1);
  }

}

})();
