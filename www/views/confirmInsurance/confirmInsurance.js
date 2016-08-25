/**
 * Created by apple-2 on 16/8/25.
 */
angular.module('app')
  .controller('confirmInsuranceController', function ($scope,$http,$state,$ionicModal) {

    $scope.plans=[

      {name:"AAAAAAA",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
      {name:"BBBBBBB",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
      {name:"CCCCCCC",coverage:"2000",fee:"200",insPeriod:"终身",payPeriod:"10",firstFee:"200"},
    ];




    $scope.sum="";
    $scope.dosomthing = function() {
      $state.go();
    }


      $http({
        method:'get',
        url:'/proxy/node/insurance/my_pageinfo'
      }).success(function(response) {
        var infos=response.infos;
        if(Object.prototype.toString.call(infos)!='[object Array]')
          infos=JSON.parse(infos);
        $scope.infos=infos;
      }).error(function(err){
        console.error(err.toString());
      })



  });
