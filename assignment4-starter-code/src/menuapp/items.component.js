(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/html/foundItems.template.html',
  bindings: {
    items: '<'
  }
})
;

})();
