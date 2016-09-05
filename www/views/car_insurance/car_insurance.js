angular.module('app')

  .controller('carInsuranceController',function($scope,$state,$http, $location,
                                             $rootScope,$ionicActionSheet){

    $scope.tabIndex=0;

    $scope.tab_change=function(i) {
      $scope.tabIndex=i;
    };



    //获得车险险种列表
    $http({
      method:"get",
      url:"/proxy/node/insurance/project_provide"
    }).success(function(response){
      var projects=response.projects;
      if(Object.prototype.toString.call(projects)!='[object Array]')
        projects=JSON.parse(projects);

      $scope.specials=projects;//从测试服务器取到险种列表,付给coverages数组。
      $scope.tabs=[
        {type:'车险险种',insurances:$scope.specials},
        {type:'车险计划书',insurances:$scope.life_insurances}
      ];

    }).error(function(err){
      if(err!==undefined&&err!==null)
        console.error(err.toString());
    });





    $scope.apply=function () {//选好险种提交时做的动作

      $scope.car_insurance.state='pricing';//状态是估价中订单

      $rootScope. car_insurance=$scope.car_insurance;


      $scope.coverages.map(function (coverages, i) {
        if($scope.coverage.flag==true){
          $scope.selected.push(coverage);
        }
      });

      //TODO:push selected to back-end
      //TODO:receive the shemes from back-end


      $state.go('motor_plan',{plan:[]});//跳到车险方案列表页面,并传递选中的险种和相应保额作为参数。

    }




    $scope.go_back=function(){
      window.history.back();
    }

    //车险保额选择
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

    $scope.actionSheet_show = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        titleText: 'select your favourite project ',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        },
        cssClass:'center'
      });
    };


  });
