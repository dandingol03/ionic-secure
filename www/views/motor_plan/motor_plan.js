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

      if($scope.motor_insurances!=null) {
        var motor_insurances = $scope.motor_insurances;
        var insurances=[];
        motor_insurances.map(function (motor_insurance, i) {
          if(motor_insurance.flag==true){
            motor_insurance.state='paying';//点击购买车险方案后,订单状态变为待支付。
            insurances.push(motor_insurance);
          }
        });
        $rootScope.motor_insurances=$scope.insurances;

      }

    };

  });
