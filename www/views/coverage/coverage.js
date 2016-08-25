angular.module('app')
  .controller('coverageController',function($scope,$state,$http,$ionicActionSheet,$timeout){


    $scope.coverages=[];

    $scope.projects={};
    $scope.projects.selected=[];

    $scope.projects_take_part={};

    $http({
      method:"get",
      url:"http://211.87.225.197:9030/project_provide"
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
        url:"http://211.87.225.197:9030/insurance/project_upload",
        params:{
          proj_list:$scope.projects_take_part
        }
      }).success(function(response){
        var prices=response.prices;
        if(prices!==undefined&&prices!==null)
        {
          $state.go('tabs.price',{data:prices});
        }else{}

      }).error(function(err){
        console.error(err.toString());
      });
    }

    $scope.actionSheet_show = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        },
        cssClass:'center'
      });



    };

  });
