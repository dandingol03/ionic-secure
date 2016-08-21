/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress){

    $scope.user=new Object();

        $scope.change = function(){
            console.log($scope.user.username);
        }
        $scope.doClear1 = function(){
           $scope.user.username='';
        }
        $scope.doClear2 = function(){
          $scope.user.password='';
        }
        $scope.goQuery1 = function(){
            $state.go("query");
        }

        $scope.sign=function(){

        }

        $scope.login = function(){
            $http({
                method:"post",
                params:{
                    loginName:$scope.user.username,
                    password:$scope.user.password
                },
                url:"http://202.194.14.106:3000/securityCode"
            }).success(function(response){
                var errorMsg =  response.errorMsg;
                if(errorMsg !== null && errorMsg !== undefined && errorMsg !== ""){
                    alert(errorMsg);
                }else{
                    var result = response.result;
                    $state.go("main");
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

