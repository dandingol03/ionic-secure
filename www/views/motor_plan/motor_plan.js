/**
 * Created by apple-2 on 16/8/30.
 */
angular.module('app')
  .controller('motorPlanController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory) {

    $scope.car_ins_plan={};
    $scope.car_ins_plans=[//应该从服务器取
      {companyName:'A',sum:'2000',type:[{name:'交强险',price:'1000'},{name:'车辆损失险',price:'500'},{name:'第三者责任险',price:'500'}]},
      {companyName:'B',sum:'5000',type:[{name:'交强险',price:'1000'},{name:'车辆损失险',price:'2500'},{name:'第三者责任险',price:'1500'}]},
      {companyName:'C',sum:'3000',type:[{name:'交强险',price:'1000'},{name:'车辆损失险',price:'1000'},{name:'第三者责任险',price:'1000'}]}
    ];

    $scope.go_back=function(){
      window.history.back();
    }

    $scope.saveState=function(){

      if($scope.life_insurances!=null) {
        var life_insurances = $scope.life_insurances;
        var insurances=[];
        life_insurances.map(function (life_insurance, i) {
          if(life_insurance.flag==true){
            insurances.push(life_insurance);
          }
        });
        $rootScope.life_insurances=$scope.insurances;
      }

    };

  });
