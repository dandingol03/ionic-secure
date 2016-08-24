/**
 * Created by outstudio on 16/7/6.
 */



angular.module('app')
  .controller('carInfoController',function($scope,$http,$state,ionicDatePicker,$cordovaImagePicker,$ionicActionSheet,$ionicPopover){
        $scope.car=new Object();
        $scope.nextStep=function(){

            $http({
                method:"post",
                params:{
                    perName:$scope.perName,
                    perIdCard:$scope.perIdCard,
                    plateNum:$scope.car.plateNum,
                    Model:$scope.car.model,
                    VIN:$scope.car.VIN,
                    engineNum:$scope.car.engineNum,
                    registerDate:$scope.car.registerDate,
                    inssueDate:$scope.car.inssueDate
                },
                url:"http://localhost:9030/get_render_page.do"
            }).success(function(response){
                var errorMsg =  response.errorMsg;
                if(errorMsg !== null && errorMsg !== undefined && errorMsg !== ""){
                    alert(errorMsg);
                }else{
                    var re = response.re;
                    var arr=response.arr;
                    $state.go("life_insurance",{arr:arr});
                }
            }).error(function(err){
                alert(err.toSource());
                $ionicLoading.show({
                    template:'connect the server timeout',
                    duration:'2000'
                });
            })
        }
      $scope.images_list = [];
      // "添加附件"Event
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

      }


     $scope.datepick = function(){
            var ipObj1 = {
              callback: function (val) {  //Mandatory
                var t1 = document.getElementById('date');//根据id获取input节点
                t1.value = new Date(val).toDateString();//把a的值在input中直接显示
              },
              disabledDates: [            //Optional
                new Date(2016, 2, 16),
                new Date(2015, 3, 16),
                new Date(2015, 4, 16),
                new Date(2015, 5, 16),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-16-2016"),
                new Date(1439676000000)
              ],
              from: new Date(1949, 10, 1), //Optional
              to: new Date(2040, 10, 30), //Optional
              inputDate: new Date(),      //Optional
              mondayFirst: false,          //Optional
              disableWeekdays: [0],       //Optional
              closeOnSelect: false,       //Optional
              templateType: 'popup'     //Optional
            };


              ionicDatePicker.openDatePicker(ipObj1);



          };
    })


