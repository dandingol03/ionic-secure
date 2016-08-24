/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress){

      $scope.user={};



      $scope.login = function(){
          $http({
              method:"post",
              params:{
                  loginName:$scope.user.username,
                  password:$scope.user.password
              },
              url:"/proxy/node/login"
          }).success(function(response){
            var re = response.re;
            if(re==1)
            {
              $state.go('tabs.coverage');
            }else{}

          }).error(function(err){
              alert(err.toString());
              $ionicLoading.show({
                  template:'connect the server timeout',
                  duration:'2000'
              });
          })


      }
    })

