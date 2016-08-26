/**
 * Created by apple-2 on 16/8/25.
 */
angular.module('app')
  .controller('confirmInsuranceController', function ($scope,$http,$state,$stateParams) {

    $scope.plans=$stateParams.plans;
    if(Object.prototype.toString.call($scope.plans)=='[object String]')
      $scope.plans = JSON.parse($scope.plans);
    $scope.sum=$stateParams.sum;

    $scope.dosomthing = function() {
      //提交选中的项目
      $state.go('life_insurance',{});
    }

  });
