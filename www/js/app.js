angular.module('app',['ionic','ui.router','ngCordova'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      });
    })
    .config(function($stateProvider,$urlRouterProvider){

        $stateProvider.state('  login',{
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

        $stateProvider.state('life_insurance',{
            url:'/life_insurance',
            controller: 'lifeInsuranceController',
            templateUrl:'views/life_insurance/life_insurance.html'
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
           $stateProvider.state('coverage',{
            url:'/coverage',
           controller:'coverageController',
            templateUrl:'views/coverage/coverage.html'
        });
      $urlRouterProvider.otherwise('/coverage');
    })
    .factory('Insurances', function () {
        return [
            { company: 'AUD', date: '2015-02-03', detail: 'it is not a big deal' },
            { company: 'BRL', date: '2015-01-01', detail: 'it is not a big deal' },
            { company: 'CAD', date: '2015-03-01', detail: 'it is not a big deal' },
            { company: 'CNY', date: '2015-07-01', detail: 'it is a big deal'}
        ];
    })

