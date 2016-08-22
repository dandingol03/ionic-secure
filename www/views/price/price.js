/**
 * Created by danding on 16/7/27.
 */
angular.module('app')
  .controller('priceController', function ($scope,$http,$state) {

    $scope.prices=[];

    $http({
      method:"get",
      url:"/proxy/node/insurance/project_select"
    }).success(function(response){
      var prices=response.prices;
      if(Object.prototype.toString.call(prices)!='[object Array]')
        prices=JSON.parse(prices);
      $scope.prices=prices;

    }).error(function(err){
      console.error(err.toString());
    });


    $scope.go_detail=function(){
      //TODO:pass the project list to detail page
      $state.go("price_detail",{project_list:JSON.stringify(['a','b'])});

    }

    $scope.proj_select=function(price){
      console.log('price name='+price.name);
      $scope.price={name:price.name,fee:price.fee,detail:price.detail};
    };

  });
