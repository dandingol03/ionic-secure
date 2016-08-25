/**
 * Created by danding on 16/7/27.
 */
angular.module('app')
  .controller('priceController', function ($scope,$http,$state,$ionicModal,$stateParams) {

    $scope.prices=$stateParams.data;

    //initial modal dialog
    $ionicModal.fromTemplateUrl('edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.modalOpen=function(){
      $scope.modal.show();
    }

    $scope.modalClose=function(){
      $scope.modal.hide();
    }


    $scope.go_detail=function(){
      //TODO:pass the project list to detail page
      $state.go("price_detail",{project_list:JSON.stringify(['a','b'])});

    }

    $scope.proj_select=function(price){
      $scope.modal.show();
      console.log('price name='+price.name);
      $scope.price={name:price.name,fee:price.fee,detail:price.detail};
    };

    $scope.generate_order=function(){
      console.log('...');
      $scope.modal.hide();
    }

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });


  });
