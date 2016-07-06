/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress){
        $scope.user = [{
            'username':'',
            'password':'',
        }];
        $scope.username=new Object();
        $scope.password= new Object();
        $scope.change = function(){
            console.log($scope.user.username);
        }
        $scope.doClear1 = function(){
            var username = $scope.user.username;
            if(username !== null && username !== undefined && username !== "")
                $scope.user.username="";
        }
        $scope.doClear2 = function(){
            var password = $scope.user.password;
            if(password !== null && password !== undefined && password !== "")
                $scope.user.password="";
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
                    loginName:user.username,
                    password:user.password
                },
                url:"http://localhost:8090/serviceHall"
            }).success(function(response){
                var errorMsg =  response.errorMsg;
                if(errorMsg !== null && errorMsg !== undefined && errorMsg !== ""){
                    alert(errorMsg);
                }else{
                    var supnuevoMerchantId = response.merchantId;
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

