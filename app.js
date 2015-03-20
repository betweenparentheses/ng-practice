var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', '$http' , function($scope, $timeout, $filter, $http){
  $scope.name = "Everybody";
  $scope.handle = "";

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };


  $timeout(function() {

    $scope.name = "Michael";

  }, 3000);

  $scope.characters = 5;


  $http.get('https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt&limit=10.exact')
      .success(function (result) {

        $scope.rules = result.results;

      })
      .error(function (data, status) {
        console.log(data);
      });


}]);

function blahblah(butt, nose, earlobe, pugs ){
  return("hi");
}
angular.injector().annotate()