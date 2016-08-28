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
