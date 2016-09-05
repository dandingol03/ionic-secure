/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('insuranceController',function($scope,$state,$ionicLoading,$http){


        $scope.submit=function(){
          $http({
            method:"get",
            url:"/proxy/node/lifeInsurance"

          }).success(function(response){

            $state.go('life_insurance', {data: response});
          }).error(function(err){
            console.error(err.toString());
          });
        };

      $scope.go_back=function(){
        window.history.back();
      }





    })

