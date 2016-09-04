/**
 * Created by apple-2 on 16/8/30.
 */
angular.module('app')
  .controller('motorPlanController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory) {

    $scope.car_ins_plan={};
    $scope.car_ins_plans=[//应该从服务器取
      {companyName:'公司A',sum:2000,types:[{name:'交强险',price:1000,fee:10},{name:'车辆损失险',price:500,fee:20},{name:'第三者责任险',price:500,fee:10}]},
      {companyName:'公司B',sum:2000,types:[{name:'车身划痕损失险',price:1000,fee:10},{name:'车辆损失险',price:500,fee:20},{name:'第三者责任险',price:500,fee:10}]},
      {companyName:'公司C',sum:2000,types:[{name:'不计免赔',price:1000,fee:10},{name:'车辆损失险',price:500,fee:20},{name:'第三者责任险',price:500,fee:10}]}
    ];

    $scope.go_back=function(){
      window.history.back();
    }

    $scope.detail_ref=function(plan){
      $state.go('motor_plan_detail',{plan:JSON.stringify(plan)});

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
