angular.module('app')

  .controller('dashboardController',function($scope,$state,$http, $location,$rootScope,$ionicModal,$timeout,$cordovaCamera,ionicDatePicker){


    $scope.goto=function(url){
      $location.path(url);
    };

    $scope.datepick = function(){
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          var t1 = document.getElementById('date');//根据id获取input节点
          var date=new Date(val);
          var month=parseInt(date.getMonth())+1;
          t1.value=date.getFullYear()+'-'+month+'-'+date.getDate();
        },
        disabledDates: [            //Optional
          new Date(2016, 2, 16),
          new Date(2015, 3, 16),
          new Date(2015, 4, 16),
          new Date(2015, 5, 16),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-16-2016"),
          new Date(1439676000000)
        ],
        from: new Date(1949, 10, 1), //Optional
        to: new Date(2040, 10, 30), //Optional
        inputDate: new Date(),      //Optional
        mondayFirst: false,          //Optional
        disableWeekdays: [0],       //Optional
        closeOnSelect: false,       //Optional
        templateType: 'popup'     //Optional
      };
      ionicDatePicker.openDatePicker(ipObj1);
    };


    $scope.car={};

    /*** bind car modal ***/
    $ionicModal.fromTemplateUrl('views/modal/bind_car.html',{
      scope:  $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.bind_car_modal = modal;
    });

    $scope.openCarModal= function(){
      $scope.bind_car_modal.show();
    };

    $scope.closeCarModal= function() {
      $scope.bind_car_modal.hide();
    };

    /*** bind car modal ***/


    /*** bind life modal ***/
    $ionicModal.fromTemplateUrl('views/modal/coverage_modal.html',{
      scope:  $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.coverage_modal = modal;
    });

    $scope.openModal= function(){
      $scope.coverage_modal.show();
    };

    $scope.closeModal= function() {
      $scope.coverage_modal.hide();
    };

    /*** bind life modal ***/




    $scope.check_carInfo=function(){
      if($rootScope.car!==undefined&&$rootScope.car!==null)
      {

      }else{
        $timeout(function(){
          $scope.openModal();
        },300);
      }
    };

    $scope.bind_car=function(){
      $rootScope.car=$scope.car;
      $scope.closeCarModal();
    }

    $scope.addPicture = function(type) {

      $ionicActionSheet.show({
        buttons: [
          { text: '拍照' },
          { text: '从相册选择' }
        ],
        titleText: '选择照片',
        cancelText: '取消',
        cancel: function() {
          return true;
        },
        buttonClicked: function(index) {
          if(index == 0){
            $scope.takePhoto=function(){
              var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: 1,
                saveToPhotoAlbum: true
              };

            }
          }else if(index == 1){
            var options = {
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: 0
            };
          }

          $cordovaCamera.getPicture(options).then(function(imageURI) {
            $scope.car[type].imageSrc= imageURI;

          }, function(err) {
            // error
          });
          return true;
        }
      });
    }

    $scope.life_insurance=
    {
      applicant:{},
      insuredPerson:{}
    };

    $scope.car={};

    $scope.apply=function () {
      $scope.life_insurance.state = 'pricing';//订单状态是报价中
      $rootScope.life_insurance = $scope.life_insurance;
      $scope.closeModal();
    }


    //寿险列表获取
    $http({
      method:"get",
      url:"/proxy/node/insurance/get_lifeinsurance_list"
    }).success(function(response){
      var life_insurances=response.life_insurances;
      if(Object.prototype.toString.call(life_insurances)!='[object Array]')
        life_insurances=JSON.parse(life_insurances);

      $scope.life_insurances=life_insurances;

      $scope.tabs=[
        {type:'车险'},
        {type:'寿险',insurances:$scope.life_insurances},
        {type:'维修'},
        {type:'车驾管服务'}
      ];
    }).error(function(err){
      if(err!==undefined&&err!==null)
        console.error(err.toString());
    });


    $scope.tabIndex=1;
    $scope.life_insuranse={};
    $scope.detail_ref=function(insurance){
      switch($scope.tabIndex)
      {
        case 0:
              break;
        case 1:
          $state.go('life_insurance_detail',{insurance:JSON.stringify(insurance)});
              break;
        default:
              break;
      }
    }


  });
