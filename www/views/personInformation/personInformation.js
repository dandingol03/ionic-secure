/**
 * Created by apple-2 on 16/8/23.
 */
angular.module('app')
  .controller('personInformationController',function($scope,$state,$http,$ionicModal) {

    $scope.newTel=''
    $scope.oldPwd=''
    $scope.conflict=false;
    $scope.pwd={};

    $ionicModal.fromTemplateUrl('edit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });



    $scope.change=function () {
      if($scope.pwd.newPwd.length==$scope.pwd.confirm_pwd.length) {
        if ($scope.pwd.newPwd != $scope.pwd.confirm_pwd) {
          $scope.conflict = true;
        } else {
          $scope.conflict = false;
        }
      }else{
        $scope.conflict = true;
      }


    }


  })
