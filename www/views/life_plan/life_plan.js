/**
 * Created by apple-1 on 16/8/25.
 */
angular.module('app')
  .controller('lifePlanController', function ($scope,$http,$state,$ionicModal) {

    $scope.modify_plan=function(){


    };

    $scope.confirm_plan=function(){
      $state.go('confirmInsurance',
        {
          sum:400,
          plans:
            JSON.stringify([
                  {name:"AAAAAAA",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
                  {name:"BBBBBBB",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
                  {name:"CCCCCCC",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"}
            ])
        });


    }

  });
