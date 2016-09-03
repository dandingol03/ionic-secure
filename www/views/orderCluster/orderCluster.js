angular.module('app')
  .controller('orderClusterController',function($scope,$state,$http, $location,$rootScope,$ionicModal,ionicDatePicker){

    //TODO:add selecte item css highlight

    $scope.tabs=[
      {name:'估价中',activated:true},
      {name:'历史订单',activated:false},
      {name:'已生成订单',activated:false},
      {name:'购买意向',activated:false}
    ];

    $scope.tab_change=function(i){
      console.log('...');
      console.log('...');
      console.log('...');
    }

    $scope.go_back=function(){
      window.history.back();
    };
  });
