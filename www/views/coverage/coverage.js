angular.module('app')
  .controller('coverageController',function($scope,$state,$http){


    $scope.coverages=[];
    $http({
      method:"get",
      url:"/proxy/node/insurance/projecct_provide"
    }).success(function(response){
        var projects=response.projects;
        if(Object.prototype.toString.call(projects)!='[object Array]')
          projects=JSON.parse(projects);
        $scope.coverages=projects;

    }).error(function(err){
      console.error(err.toString());
    });


  });
