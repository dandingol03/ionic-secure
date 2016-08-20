angular.module('app')
  .controller('coverageController',function($scope,$state){



      $scope.coverages=[
        {label:"车辆损失险"},
        {label:"第三者责任险"},
        {label:"全车盗抢险"},
        {label:"车上人员责任险"},
        {label:"驾驶员"},
        {label:"乘客每人"},
        {label:"玻璃单独破碎险"},
        {label:"自燃损失险"},
        {label:"无法找到第三方"},
        {label:"发动机涉水险"},
        {label:"新增设备险"},
        {label:"不计免赔险"},
        {label:"交强险"}
      ];
  });
