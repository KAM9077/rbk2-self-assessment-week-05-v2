angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  $routeProvider.factory('counter', function($http){
  

    }
  })
  .controller('fizzbuzzCtrl', function($scope){
    $scope.counterbazz = 0;
    $scope.increment = function(){
      $scope.counterbazz++;
    }
  
  })
  fozzbazzCtrl.controller('fozzbazzCtrl', function($scope){
    $scope.counterbuzz = 0;
    $scope.increment = function(){
      $scope.counterbuzz++;
    }
  });
