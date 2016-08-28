/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
    .controller('life04Controller',function($scope,$state,$ionicLoading,$http,$ionicActionSheet,$cordovaImagePicker){

    $scope.addPicture = function() {

      var type = 'gallery';
      $ionicActionSheet.show({
        buttons: [
          { text: '拍照' },
          { text: '从相册选择' }
        ],
        titleText: '选择照片',
        cancelText: '取消',
        cancel: function() {
        },
        buttonClicked: function(index) {
          if(index == 0){
            type = 'camera';
          }else if(index == 1){
            type = 'gallery';
          }
          //Camera.getPicture(type)->根据选择的“选取图片”的方式进行选取
          Camera.getPicture(type).then(
            //返回一个imageURI，记录了照片的路径
            function (imageURI) {
              $scope.me.image = imageURI;
              //更新页面上的照片
              $scope.img = imageURI;
              $scope.$apply();
            },
            function (err) {
            });
          return true;
        }
      });


    };
  });

