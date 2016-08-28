/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress){




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

    $scope.user=new Object();
    $scope.get_preference=function(){
      $cordovaPreferences.fetch('name')
        .success(function(value) {
          alert("Success: " + value);
        })
        .error(function(error) {
          alert("Error: " + error);
        });
    };


    var inputData = {
      grant_type: 'password',
      username: '123456789',
      password: "1234",
    };

    $http({
      method:"POST",
      url: "/proxy/liyou/securityCode?cellphone=123456789",
    }).success(function(response){
       console.log('securityCode');
    }).error(function(err){
     console.log(err);
    });


    $scope.login = function(){
      $http({
                method:"POST",
                params:{
                  grant_type: 'password',
                  username:$scope.user.username,
                  password:$scope.user.password,
                },
                data:{
                    grant_type: 'password',
                    username:$scope.user.username,
                    password:$scope.user.password,
                },
                url:"/proxy/liyou/login",
               headers: {
                'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                'Content-Type': 'application/x-www-form-urlencoded'
               }

            }).success(function(response){
              console.log('login');
                $state.go('tabs.coverage');

            }).error(function(err){
        console.log('error');

            })
        }

    })

