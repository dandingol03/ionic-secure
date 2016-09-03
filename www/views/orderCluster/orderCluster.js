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

    /**
     * 不同状态订单切换的回换
     */
    $scope.tab_change=function(i){
      $scope.tabIndex=i;
    }


    $scope.detail_ref=function(type,order){
      switch(type)
      {
        case '车险':
          $scope.openModal();
          $scope.confirm=function(){
            $state.go('motor_plan_detail',order);
          }
              break;
        case '寿险':

              break;
        default:
              break;
      }
    }

    /*** init motor_insurance_select modal ***/
    $scope.motor_steps=['specials','schemes'];
    $scope.motor={};
    $scope.motor.step=$scope.motor_steps[0];
    $ionicModal.fromTemplateUrl('views/modal/edit_motor_insurance.html',{
      scope:  $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal= function(){
      $scope.modal.show();
    };

    $scope.modalClose= function() {
      $scope.modal.hide();
    };

    /*** init motor_insurance_select modal ***/


    $scope.go_back=function(){
      window.history.back();
    };
  });
