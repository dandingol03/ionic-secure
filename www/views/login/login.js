/**
 * Created by outstudio on 16/7/6.
 */

angular.module('app')
    .controller('loginController',function($scope,$state,$ionicLoading,$http,$cordovaProgress,$rootScope,$cordovaFileTransfer,$cordovaFileTransfer){

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
          data:"grant_type=password&password=" + $scope.user.password + "&username=" + $scope.user.username,
          url:"/login",
          headers: {
            'Authorization': "Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW",
            'Content-Type': 'application/x-www-form-urlencoded'
            }

      }).success(function(response){
        //console.log('login');
        //$state.go('tabs.coverage');

      }).error(function(err){
        console.log('error');
                  });

        // //get photo
        // $http({
        //     method:"GET",
        //    // data:"grant_type=password&password=" + $scope.user.password + "&username=" + $scope.user.username,
        //     url:"/proxy/node/get/photo/home.jpg"
        // }).success(function(response){
        //     var targetPath = cordova.file.documentsDirectory + "home.jpg";
        //     var url = "/get/photo/home.jpg";
        //
        //
        // console.log('login');
        //
        //
        // }).error(function(err){
        //     console.log('error');
        // })

        alert('goto');
        var url='http://192.168.1.110:9030/get/photo/home.jpg';
        var targetPath=cordova.file.externalRootDirectory+'home.jpg';
        $cordovaFileTransfer.download(url, targetPath, {}, true)
            .then(function(result) {
                alert('home图片');
                // Success!
            }, function(err) {
                var str='';
                for(var field in err)
                    str+=err[field]+'\n';
                alert('error='+str);
                // Error
            }, function (progress) {
            });








     }
    })

