angular.module('app',['ionic','ui.router','ngCordova'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      });
    })
    .config(function($stateProvider,$urlRouterProvider){


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

      $urlRouterProvider.otherwise('/login');
    })
//.constant("rmiPath","http:://211.87.225.207:8080/supnuevo")
//.constant("rmiPath","http:://211.87.225.195:8080/supnuevo")

