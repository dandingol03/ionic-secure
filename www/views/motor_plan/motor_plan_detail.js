/**
 * Created by apple-2 on 16/9/1.
 */
angular.module('app')
  .controller('motorPlanDetailController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory) {

  $scope.selected=[];

    $scope.go_back=function(){
      window.history.back();
    }

  });
