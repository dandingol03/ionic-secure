/**
 * Created by danding on 16/8/22.
 */
angular.module('app')
  .controller('priceDetailController',function($scope,$stateParams){

    $scope.project_list=$stateParams.project_list;
    if(Object.prototype.toString.call($scope.project_list)!='[object Array]')
      $scope.project_list = JSON.parse($scope.project_list);




  })

