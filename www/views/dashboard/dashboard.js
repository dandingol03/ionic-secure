angular.module('app')
  .controller('dashboardController',function($scope,$state,$http, $location){

    $scope.goto=function(url){
      $location.path(url);
    }
  });
