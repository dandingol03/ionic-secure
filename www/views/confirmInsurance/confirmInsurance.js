/**
 * Created by apple-2 on 16/8/25.
 */
angular.module('app')
  .controller('confirmInsuranceController', function ($scope,$http,$state,$stateParams) {

    $scope.plans=$stateParams.plans;
    if(Object.prototype.toString.call($scope.plans)=='[object String]')
      $scope.plans = JSON.parse($scope.plans);
    $scope.sum=$stateParams.sum;

    $scope.plans=[
      {name:"平安保险公司",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
      {name:"太平洋保险公司",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
      {name:"新华保险公司",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"}
    ];

    $scope.sum;


    $scope.dosomthing = function() {
      //提交选中的项目
      $state.go('life_insurance',{});
    }

  });
