angular.module('app')
  .controller('motorInsuranceController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory,$ionicModal){


    $scope.coverages=[];

    $scope.companys=[
      {name:'太平洋保险公司'},
      {name:'平安保险公司'},
      {name:'新华保险公司'}
    ];

    /** dym modal **/
    $ionicModal.fromTemplateUrl('views/motor_insurance/insurance_modal.html',function(modal){
      $scope.insurance_modal=modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.openModal= function(){
      $scope.insurance_modal.show();
    };

    $scope.closeModal= function() {
      $scope.insurance_modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.insurance_modal.remove();
    });
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    /** dym modal end **/


    $scope.projects={};
    $scope.projects.selected=[];

    $scope.projects_take_part={};

    $scope.go_back=function(){
      window.history.back();
    }

    $http({
      method:"get",
      url:"/proxy/node/insurance/project_provide"
    }).success(function(response){
      var projects=response.projects;
      if(Object.prototype.toString.call(projects)!='[object Array]')
        projects=JSON.parse(projects);
      projects.map(function(project,i) {
        project.selectedFee=project.fee[0];
      });
      $scope.coverages=projects;

    }).error(function(err){
      if(err!==undefined&&err!==null)
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
        titleText: 'select your favourite project ',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        },
        cssClass:'center'
      });

/*
      $ionicModal.fromTemplateUrl('views/motor_insurance/insurance_modal.html',{
        scope:  $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
         $scope.insurance_modal = modal;
      });

      $scope.openModal= function(){
        $scope.insurance_modal.show();
      };

      $scope.closeModal= function() {
        $scope.insurance_modal.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.insurance_modal.remove();
      });
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
*/

    };

  });
