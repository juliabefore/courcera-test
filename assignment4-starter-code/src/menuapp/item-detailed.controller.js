(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController)
;

ItemDetailController.$inject = ['$stateParams', 'MenuDataService'];
function ItemDetailController($stateParams, MenuDataService){
  var itemDetail = this;

  var promise = MenuDataService.getMenuForCategory($stateParams.categoryShortName);
  promise.then(function (response) {
    itemDetail.found = response.data.menu_items;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong: " + error);
  });
}

})();
