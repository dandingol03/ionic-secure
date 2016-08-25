/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('life04Controller',function($scope,$state,$ionicLoading,$http){


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


    })

