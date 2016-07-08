/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('lifeInsuranceController',function($scope,$state,$ionicLoading,$http,Insurances){


        $scope.insurances=Insurances;


    })

