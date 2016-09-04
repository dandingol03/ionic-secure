/**
 * Created by apple-2 on 16/9/1.
 */
angular.module('app')
  .controller('motorPlanDetailController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory,$stateParams) {

    $scope.selected=[];

    $scope.go_back=function(){
      window.history.back();
    }

    $scope.item=$stateParams.plan;
    if(Object.prototype.toString.call($scope.item)=='[object String]')
      $scope.item=JSON.parse($scope.item);




  });
