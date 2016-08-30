angular.module('app')
  .controller('dashboardController',function($scope,$state,$http, $location,$ionicModal,$rootScope){

    $scope.goto=function(url){
      $location.path(url);
    }

    $scope.life_insurance=
    {
      applicant:{},
      insuredPerson:{}
    };

    $scope.apply=function () {
      $rootScope. life_insurance=$scope.life_insurance;
      $scope.closeModal();
    }

    /** dym modal **/
    $ionicModal.fromTemplateUrl('views/dashboard/coverage_modal.html',function(modal){
      $scope.coverage_modal=modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.openModal= function(){
      $scope.coverage_modal.show();
    };

    $scope.closeModal= function() {
      $scope.coverage_modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.coverage_modal.remove();
    });
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    /** dym modal end **/


  });
