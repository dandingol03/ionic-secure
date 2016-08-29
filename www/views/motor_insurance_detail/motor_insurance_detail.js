angular.module('app')
  .controller('motorDetailController',function($scope,$rootScope,$state,$http, $location,$ionicModal,$ionicActionSheet,$cordovaCamera,$cordovaImagePicker){

    $scope.title='太平洋寿险';

    $scope.items= [
      {id:"1",property:"名称",num:"太平洋寿险"},
      {id:"2",property:"保额",num:"400$"},
      {id:"3",property:"保费",num:"500$"},
      {id:"4",property:"保险期间",num:"保至70周岁"},
      {id:"5",property:"缴费期间",num:"2周年"},
      {id:"6",property:"首年保费",num:"30000$"}
    ];

    $scope.cart=[
      {id:1,count:0,img:"img/res001.png",title:"Cream Cheese..."},
      {id:2,count:0,img:"img/res002.png",title:"Sesame Noodles"},
      {id:3,count:0,img:"img/res003.png",title:"Chicken Taquitos"}
    ];

    /*************************************detail_modal.html******************/
    $ionicModal.fromTemplateUrl('views/modal/detail_modal.html',function(modal){
      $scope.detail_modal=modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.opendetail_modal= function(){
      $scope.detail_modal.show();
    };

    $scope.closedetail_modal= function() {
      $scope.detail_modal.hide();
    };

    $scope.$on('modal.hidden', function() {
      // Execute action
    });

    $scope.increment=function(count,index){

    };

    $scope.decrement=function(count,index) {

    };

    $scope.confirm_lifeInsurance=function(){

    };

    $scope.applicant={};

    $scope.pickImage=function(applicant_type,img_type){
      var options = {
        maximumImagesCount: 1,
        width: 800,
        height: 800,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          $scope[applicant_type][img_type]=results[0];
          alert('img url=' + results[0]);
        }, function (error) {
          alert("error="+error);
          // error getting photos
        });
    };

    $scope.takePhoto=function(applicant_type,img_type){
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.PNG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope[applicant_type][img_type] = imageURI;
        alert('image url=' + imageURI);
      }, function(err) {
        // error
      });
    };

    $scope.addAttachment=function(applicant_type,img_type)
    {
      $ionicActionSheet.show({
        buttons: [
          {text:'图库'},
          {text:'拍照'}
        ],
        cancelText: '关闭',
        cancel: function() {
          return true;
        },
        buttonClicked: function(index) {

          switch (index){
            case 0:
              $scope.pickImage(applicant_type,img_type);
              break;
            case 1:
              $scope.takePhoto(applicant_type,img_type);
              break;
            default:
              break;
          }
          return true;
        }
      });
    }


    $scope.checkCarInfo=function(){
      $scope.opendetail_modal();
    }

    $scope.go_back=function(){
      window.history.back();
    }

    $scope.$on('$destroy', function() {
      $scope.detail_modal.remove();
    });


  });
