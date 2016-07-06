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


      $urlRouterProvider.otherwise('/life_insurance');
    })
    .factory('Insurances', function () {
        return [
            { company: 'AUD', date: '2015-02-03', detail: 'it is not a big deal' },
            { company: 'BRL', date: '2015-01-01', detail: 'it is not a big deal' },
            { company: 'CAD', date: '2015-03-01', detail: 'it is not a big deal' },
            { company: 'CNY', date: '2015-07-01', detail: 'it is a big deal'}
        ];
    })
//.constant("rmiPath","http:://211.87.225.207:8080/supnuevo")
//.constant("rmiPath","http:://211.87.225.195:8080/supnuevo")

