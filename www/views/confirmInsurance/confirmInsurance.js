/**
 * Created by apple-2 on 16/8/25.
 */
angular.module('app')
  .controller('confirmInsuranceController', function ($scope,$http,$state,$ionicModal) {

    $scope.plans=[
      {name:"平安保险公司",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
      {name:"太平洋保险公司",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
      {name:"新华保险公司",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"}
    ];

    $scope.sum;

    $scope.dosomthing = function() {
      $state.go();
    }

  });
