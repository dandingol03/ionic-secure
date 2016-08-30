/**
 * Created by apple-2 on 16/8/29.
 */

angular.module('app')
    .controller('myOrderController',function($scope,$state,$ionicLoading,$http,$cordovaProgress){

      $scope.orders= [
        {type:'车险',schemes:[
          {name:'brazil',coverage:300,fee:500,spectum:2},
          {name:'honda',coverage:300,fee:500,spectum:1},
          {name:'R1',coverage:300,fee:500,spectum:1},
        ]},
        {type:'寿险',main:{name:'india洋',coverage:300,fee:200},additions:[
          {name:'addition1',fee:300},
          {name:'addition2',fee:800}
        ]
        }
      ];

    $scope.go_back=function(){
      window.history.back();
    };



    })

