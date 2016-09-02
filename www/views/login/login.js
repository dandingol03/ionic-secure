/**
 * Created by outstudio on 16/7/6.
 */

angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress,$rootScope,$cordovaFileTransfer){

      $scope.login = function(){

        $http({
          method:"GET",
          url: "http://127.0.0.1:3000/securityCode?cellphone=123456789",
        }).success(function(response){
          console.log('...');
          console.log('...');
          console.log('...');


          $http({
            method:"POST",
            url: "/proxy/node/login",
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=password&username=123456789&password=1234'
          }).success(function(response){

            console.log('securityCode');

          }).error(function(err){

            console.log(err);

          });

          console.log('...');

        }).error(function(err){
          console.log(err);
        });
          // $http({
          //     method:"post",
          //     params:{
          //         loginName:$scope.user.username,
          //         password:$scope.user.password
          //     },
          //     url:"/proxy/node/login"
          // }).success(function(response){
          //   $rootScope.carInfo=response.carInfo;
          //   if($rootScope.carInfo.img!==undefined&&$rootScope.carInfo.img!==null)
          //   {
          //     var img=$rootScope.carInfo.img;
          //     if(img.driverImg!==undefined&&img.driverImg!==null)
          //     {
          //       $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
          //         .then(function(result) {
          //           // Success!
          //         }, function(err) {
          //           // Error
          //         });
          //     }
          //
          //   }
          //
          //
          //   var re = response.re;
          //   if(re==1)
          //   {
          //     $state.go('tabs.coverage');
          //   }else{}
          //
          // }).error(function(err){
          //     alert(err.toString());
          //     $ionicLoading.show({
          //         template:'connect the server timeout',
          //         duration:'2000'
          //     });
          // });




      }

    $scope.user=new Object();
    $scope.get_preference=function(){
      $cordovaPreferences.fetch('name')
        .success(function(value) {
          alert("Success: " + value);
        })
        .error(function(error) {
          alert("Error: " + error);
        });
    };


    var inputData = {
      grant_type: 'password',
      username: '123456789',
      password: "1234",
    };


    $scope.login = function(){
      $http({
                method:"POST",
                params:{
                  grant_type: 'password',
                  username:$scope.user.username,
                  password:$scope.user.password,
                },
                data:{
                    grant_type: 'password',
                    username:$scope.user.username,
                    password:$scope.user.password,
                },
                url:"/proxy/liyou/login",
               headers: {
                'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
                'Content-Type': 'application/x-www-form-urlencoded'
               }

            }).success(function(response){
              console.log('login');
                $state.go('tabs.coverage');

            }).error(function(err){
        console.log('error');
                  })
        }

    //文件下载
    $scope.download=function(){
      var url='http://192.168.0.199:9030/get/photo/home.jpg';
      var targetPath=cordova.file.documentsDirectory + "home.jpg";
      var trustHosts = true;
      var options = {};
      $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
        .then(function(result) {
          alert('success');
        }, function(err) {
          // Error
          alert('error');
        }, function (progress) {
          $timeout(function () {
            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
          });
        });
    }

    //文件下载
    $scope.download=function(){
      var url='http://192.168.0.199:9030/get/photo/home.jpg';
      var targetPath=cordova.file.externalRootDirectory + "/home.jpg";
      var trustHosts = true;
      var options = {};
      $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
        .then(function(result) {
          alert('success');
        }, function(err) {
          // Error
          var str='';
          for(var field in err)
          {
            str+=field+':'+err[field];
          }
          alert('error=====\r\n'+str);
        }, function (progress) {
          $timeout(function () {
            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
          });
        });
    }

    })

