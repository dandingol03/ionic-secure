angular.module('app',['ionic','ui.router','ngCordova','ngBaiduMap', 'ionic-datepicker'])
    .config(function(baiduMapApiProvider) {
        baiduMapApiProvider.version('2.0').accessKey('2me89doy9NE2HgG7FmTXa0XZsedThXDD');
    })


    .run(function($ionicPlatform,$location,$rootScope,$ionicHistory,$state,$ionicModal) {


      $rootScope.myGoBack = function() {
        //$rootScope.$ionicGoBack();
        var backView = $ionicHistory.backView();
        backView.go();
      }

   //s .run(function($ionicPlatform,$location,$rootScope,$ionicHistory,$state,$ionicModal,$timeout) {



    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      });

    })



  .config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(1900, 8, 1),
      to: new Date(2060, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: [6]
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  })

    .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');


    $stateProvider.state('tabs',{
      url:'/tabs',
      abstract:true,
      templateUrl:'views/tabs/tabs.html'
    });


      $stateProvider.state('tabs.my',{
        url:'/my',
        views:{
          'my-tab':{
            controller:'myController',
            templateUrl:'views/my/my.html'
          }
        }
      });

      $stateProvider.state('tabs.dashboard',{
        url:'/dashboard',
        views:{
          'dashboard-tab':{
            controller:'dashboardController',
            templateUrl:'views/dashboard/dashboard.html'
          }
        }
      });

    /**
     *车险险列表
     */
      $stateProvider.state('motor_insurance',{
        url:'/motor_insurance',
        controller:'motorInsuranceController',
        templateUrl:'views/motor_insurance/motor_insurance.html'
      });


      /**
       *车险方案列表
       */
      $stateProvider.state('motor_plan',{
        url:'/motor_plan',
        controller:'motorPlanController',
        templateUrl:'views/motor_plan/motor_plan.html'
      });





      /**
       *寿险险列表
       */
      $stateProvider.state('coverage',{
        url:'/coverage',
        controller:'coverageController',
        templateUrl:'views/coverage/coverage_backup.html'
      });


    /**
     * 寿险列表详情
     */
    $stateProvider.state('motor_insurance_detail',{
        url:'/motor_insurance_detail:motor',
        controller:'motorDetailController',
        templateUrl:'views/motor_insurance_detail/motor_insurance_detail.html'
    });



        /**
         * 我的订单
         */
        $stateProvider.state('myOrder',{
            url:'/myOrder',
            controller:'myOrderController',
            templateUrl:'views/myOrder/myOrder.html'
        })


      $stateProvider.state('personInformation',{
        url:'/personInformation',
        controller:'personInformationController',
        templateUrl:'views/personInformation/personInformation.html'

      });

      $stateProvider.state('confirmInsurance',{
        url:'/confirmInsurance/:sum/:plans',
        controller:'confirmInsuranceController',
        templateUrl:'views/confirmInsurance/confirmInsurance.html'

      });


    $stateProvider.state('tabs.price',{
      url:'/price/:prices',
      params:{"data":null},
      views:{
        'price-tab':{
          controller:'priceController',
          templateUrl:'views/price/price.html'
        }
      }
    });

    /*秦东 寿险计划*/
    $stateProvider.state('tabs.life_plan',{
      url:'/life_plan',
      views:{
        'life-plan-tab':{
          controller:'lifePlanController',
          templateUrl:'views/life_plan/life_plan.html'
        }
      }
    });

    $stateProvider.state('price_detail',{
      url:'/price_detail/:project_list',
      controller:'priceDetailController',
      templateUrl:'views/price_detail/price_detail.html'
    });

    $stateProvider.state('login',{
        url:'/login',
        controller: 'loginController',
        templateUrl:'views/login/login.html'
    });

    $stateProvider.state('main',{
        url:'/main',
        controller: 'mainController',
        templateUrl:'views/main/main.html'
    });


    $stateProvider.state('insurance',{
        url:'/insurance',
        controller: 'insuranceController',
        templateUrl:'views/insurance/insurance.html'
    });


    $stateProvider.state('insurance_detail',{
        url:'/insurance_detail/:company_name',
        controller: 'lifeInsuranceDetailController',
        templateUrl:'views/life_insurance/detail/detail.html'
    });

    $stateProvider.state('service',{
        url:'/service',
        controller:'serviceController',
        templateUrl:'views/service/service.html'
    });

    $stateProvider.state('location',{
        url:'/location',
        controller:'locationController',
        templateUrl:'views/location/location.html'
    });

    $stateProvider.state('map',{
        url:'/map',
        controller: 'mapController',
        templateUrl:'views/map/map.html'
    });

    $stateProvider.state('car_info',{
        url:'/car_info',
        controller: 'carInfoController',
        templateUrl:'views/car_info/car_info.html'
    });

    $stateProvider.state('life04',{
      url:'/life04',
      controller: 'life04Controller',
      templateUrl:'views/life04/life04.html'
    });

    $stateProvider.state('life_plan',{
      url:'/life_plan',
      controller:'lifePlanController',
      templateUrl:'views/life_plan/life_plan.html'
    });


    $stateProvider.state('directive',{
        url:'/directive',
        controller: 'directiveController',
        templateUrl:'views/directive/directive.html'
    });

    $urlRouterProvider.otherwise('/tabs/dashboard' );

    })

    .factory('BaiduMapService', function($q, baiduMapApi) {
        return {
            getLocalCity: function() {
                return baiduMapApi.then(function(BMap) {
                    var localcity = new BMap.LocalCity();
                    return $q(function(resolve, reject) {
                        localcity.get(function(r) {
                            resolve(r);
                        });
                    });
                });
            }
            ,
            getBMap:function(callback){
                 baiduMapApi.then(function(BMap) {
                    callback(BMap);
                });
            }
        };
    })


    .factory('Insurances', function () {
        return [
            { company: 'AUD', date: '2015-02-03', detail: 'it is not a big deal' },
            { company: 'BRL', date: '2015-01-01', detail: 'it is not a big deal' },
            { company: 'CAD', date: '2015-03-01', detail: 'it is not a big deal' },
            { company: 'CNY', date: '2015-07-01', detail: 'it is a big deal'}
        ];
    })

    .controller('LeftMenuController',function($scope){

    })

