(function () {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/html/foundMenuCategories.template.html',
  bindings: {
    categories: '<'
  }
})
;

})();
