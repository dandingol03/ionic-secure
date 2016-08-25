/**
 * Created by apple-2 on 16/8/23.
 */
angular.module('app')
  .controller('myController',function($scope,$state,$http){


    $scope.infos=[];

    $http({
       method:'get',
        url:'http://211.87.225.197:9030/insurance/my_pageinfo'
    }).success(function(response) {
      var infos=response.infos;
      if(Object.prototype.toString.call(infos)!='[object Array]')
        infos=JSON.parse(infos);
        $scope.infos=infos;
    }).error(function(err){
      console.error(err.toString());
    });;


  });
