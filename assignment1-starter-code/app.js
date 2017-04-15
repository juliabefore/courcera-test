(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.message = "";
  $scope.len = 0;

  $scope.separatedList = function () {
      $scope.len = $scope.list.split(',').length;
    };

$scope.checkListLength = function(){
if($scope.list === ""){
  $scope.message = "Please enter data first";
}else if($scope.len > 3){
  $scope.message = "Too much!";
}else if ($scope.len <= 3) {
  $scope.message = "Enjoy!";
}
};


}

})();
