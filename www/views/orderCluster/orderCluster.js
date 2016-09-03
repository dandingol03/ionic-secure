angular.module('app')
  .controller('orderClusterController',function($scope,$state,$http, $location,$rootScope,$ionicModal,ionicDatePicker){

    //TODO:add selecte item css highlight

    $scope.tabs=[
      {name:'待支付订单',activated:false,orders:
        [
        {
          type:'车险',schemes:[
          {name:'brazil',coverage:300,fee:500,spectum:2},
          {name:'honda',coverage:300,fee:500,spectum:1},
          {name:'R1',coverage:300,fee:500,spectum:1},]
        },
        {
          type:'寿险',main:{name:'india洋',coverage:300,fee:200},additions:[
          {name:'addition1',fee:300},
          {name:'addition2',fee:800}]
        },
        {
          type:'寿险',main:{name:'india洋',coverage:300,fee:200},additions:[
          {name:'addition1',fee:300},
          {name:'addition2',fee:800}]
        }
      ]},
      {name:'已完成订单',activated:false,orders:[]},
      {name:'估价中订单',activated:false,orders:[]}
    ];

    $scope.tabIndex=0;

    $scope.tab_change=function(i){
      $scope.tabIndex=i;
    }

    $scope.go_back=function(){
      window.history.back();
    };
  });
