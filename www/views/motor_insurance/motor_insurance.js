angular.module('app')
  .controller('motorInsuranceController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory,$ionicModal,$location,$rootScope){


    $scope.coverages=[];

    $scope.companys=[
      {name:'太平洋保险公司',selected:''},
      {name:'平安保险公司',selected:''},
      {name:'新华保险公司',selected:''}
    ];

    $scope.selected=[];



    $scope.car_insurance= {};

    $scope.apply=function () {
      $rootScope. car_insurance=$scope.car_insurance;
    }

    $scope.goto=function(url) {
      $location.path(url);
    }


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

      $scope.coverages=projects;

    }).error(function(err){
      if(err!==undefined&&err!==null)
        console.error(err.toString());
    });

    $scope.fee_change=function () {
        var coverages=$scope.coverages;
        console.log('...');
    }


    //flag==true代表选中的
    $scope.project_select=function(proj) {
      var coverages=$scope.coverages;
      console.log('...');
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

  })
