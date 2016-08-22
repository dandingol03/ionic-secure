angular.module('app')
  .controller('coverageController',function($scope,$state,$http){


    $scope.coverages=[];

    $scope.projects={};
    $scope.projects.selected=[];

    $scope.projects_take_part={};

    $http({
      method:"get",
      url:"/proxy/node/insurance/projecct_provide"
    }).success(function(response){
        var projects=response.projects;
        if(Object.prototype.toString.call(projects)!='[object Array]')
          projects=JSON.parse(projects);
          projects.map(function(project,i) {
              project.selectedFee=project.fee[0];
          });
        $scope.coverages=projects;

    }).error(function(err){
      console.error(err.toString());
    });


    $scope.project_select=function(proj) {
      if(proj.selected==true)//勾选项目
      {

        var fee=null;
        if(proj.selectedFee!==undefined&&proj.selectedFee!==null)
            fee=proj.selectedFee;
        else
            fee=proj.fee;
          $scope.projects_take_part[proj.name]={fee:fee};
      }else//踢除项目
      {
          delete $scope.projects_take_part[proj.name];
      }

    }

    $scope.upload_proj=function(){
      $http({
        method:"post",
        url:"/proxy/node/insurance/project_upload",
        params:{
          proj_list:$scope.projects_take_part
        }
      }).success(function(response){


      }).error(function(err){
        console.error(err.toString());
      });
    }

  });
