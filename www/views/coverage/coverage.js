angular.module('app')
  .controller('coverageController',function($scope,$state,$http){


    $scope.coverages=[];

    $scope.projects={};
    $scope.projects.selected=[];

    $http({
      method:"get",
      url:"/proxy/node/insurance/projecct_provide"
    }).success(function(response){
        var projects=response.projects;
        if(Object.prototype.toString.call(projects)!='[object Array]')
          projects=JSON.parse(projects);
          projects.map(function(project,i) {
              project.selected=project.fee[0];
          });
        $scope.coverages=projects;

    }).error(function(err){
      console.error(err.toString());
    });

    $scope.coverage_change=function(item){
      var coverages=$scope.coverages;
      console.log('...');
      console.log('...');
    }


  });
