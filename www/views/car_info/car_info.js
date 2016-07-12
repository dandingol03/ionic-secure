/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('carInfoController',function($scope,$http,$state){
        $scope.car=new Object();
        $scope.nextStep=function(){

            $http({
                method:"post",
                params:{
                    perName:$scope.perName,
                    perIdCard:$scope.perIdCard,
                    plateNum:$scope.car.plateNum,
                    Model:$scope.car.model,
                    VIN:$scope.car.VIN,
                    engineNum:$scope.car.engineNum,
                    registerDate:$scope.car.registerDate,
                    inssueDate:$scope.car.inssueDate
                },
                url:"http://localhost:9030/get_render_page.do"
            }).success(function(response){
                var errorMsg =  response.errorMsg;
                if(errorMsg !== null && errorMsg !== undefined && errorMsg !== ""){
                    alert(errorMsg);
                }else{
                    var re = response.re;
                    var arr=response.arr;
                    $state.go("life_insurance",{arr:arr});
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

