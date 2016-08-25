/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress){

    $scope.user=new Object();


        $scope.login = function(){
            $http({
                method:"post",
                params:{
                    grant_type: 'password',
                    loginName:$scope.user.username,
                    password:$scope.user.password
                },
                url:"http://211.87.225.197:3000/login"
            }).success(function(response){
                var re=response.re;
              if(re==1)
              {
                $state.go('tabs.coverage');
              }else{

              }
            }).error(function(err){
                alert(err.toSource());
                $ionicLoading.show({
                    template:'connect the server timeout',
                    duration:'2000'
                });
            })


        }
    })

