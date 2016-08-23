/**
 * Created by apple-2 on 16/8/23.
 */
angular.module('app')
  .controller('myController',function($scope,$state,$http){


    $scope.items=[
      {title:"个人信息"},
      {title:"实名认证"},
      {title:"我的订单"},
      {title:"推荐二维码"},
      {title:"我的股权"},
      {title:"积分提现"}
    ]
    ;



  });
