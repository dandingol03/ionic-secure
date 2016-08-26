/**
 * Created by apple-1 on 16/8/25.
 */
angular.module('app')
  .controller('lifePlanController', function ($scope,$http,$state,$ionicModal) {

     $scope.lifePlans=[];
     $scope.dates={};

     $http({
      method:"get",
      url:"/proxy/node/insurance/life_plan"
    }).success(function(response){
      var dates=response.dates;
      if(Object.prototype.toString.call(dates)!='[object Array]')
        dates=JSON.parse(dates);

      $scope.lifePlans=dates;

    }).error(function(err){
      console.error(err.toString());
    });
  });
