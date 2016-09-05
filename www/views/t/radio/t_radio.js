angular.module('app')

  .controller('tRadioController',function($scope,$ionicActionSheet,$http){


    //get 车险险种列表
    $http({
      method:"get",
      url:"/proxy/node/insurance/project_provide"
    }).success(function(response){
      var projects=response.projects;
      if(Object.prototype.toString.call(projects)!='[object Array]')
        projects=JSON.parse(projects);
      $scope.motor_insurances=projects;//从测试服务器取到险种列表,付给coverages数组。

    }).error(function(err){
      if(err!==undefined&&err!==null)
        console.error(err.toString());
    });



    $scope.clientSideList = [
      { text: "Backbone", value: "bb",prices:[100,200,300] },
      { text: "Angular", value: "ng" ,prices:[200,400,600]},
      { text: "Ember", value: "em" ,price:800},
      { text: "Knockout", value: "ko",price:500 }
    ];

    $scope.price_select=function(item,prices) {
      if (prices !== undefined && prices !== null &&prices.length > 0)
      {
        var buttons=[];
        prices.map(function(price,i) {
          buttons.push({text: price});
        });
        $ionicActionSheet.show({
          buttons:buttons,
          titleText: '选择你的保额',
          cancelText: 'Cancel',
          buttonClicked: function(index) {
            item.price = prices[index];
            return true;
          },
          cssClass:'motor_insurance_actionsheet'
        });
      }
      else
      {}
    }


  });
