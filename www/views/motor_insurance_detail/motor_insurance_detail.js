angular.module('app')
  .controller('motorDetailController',function($scope,$state,$http, $location){

    $scope.title='太平洋寿险';

    $scope.items= [
      {id:"1",property:"名称",num:"太平洋寿险"},
      {id:"2",property:"保额",num:"400$"},
      {id:"3",property:"保费",num:"500$"},
      {id:"4",property:"保险期间",num:"保至70周岁"},
      {id:"5",property:"缴费期间",num:"2周年"},
      {id:"6",property:"首年保费",num:"30000$"}
    ];

    $scope.cart=[
      {id:1,count:0,img:"img/res001.png",title:"Cream Cheese..."},
      {id:2,count:0,img:"img/res002.png",title:"Sesame Noodles"},
      {id:3,count:0,img:"img/res003.png",title:"Chicken Taquitos"}
    ];

    $scope.increment=function(count,index){

    };

    $scope.decrement=function(count,index) {

    };

    $scope.go_back=function(){
      window.history.back();
    }

  });
