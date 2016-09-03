angular.module('app')
  .controller('coverageController',function($scope,$state,$http,$ionicActionSheet,$ionicHistory,$ionicModal){



    $scope.life_insuranses=[];
    $scope.life_insuranse={};



    $scope.go_back=function(){
      window.history.back();
    }


    $scope.saveState=function(){

        if($scope.life_insurances!=null) {
          var life_insurances = $scope.life_insurances;
          var insurances=[];
          life_insurances.map(function (life_insurance, i) {
          if(life_insurance.flag==true){
            insurances.push(life_insurance);
          }
          });
          $rootScope.life_insurances=$scope.insurances;
        }

    };


    $http({
      method:"get",
      url:"/proxy/node/insurance/get_lifeinsurance_list"
    }).success(function(response){
        var life_insurances=response.life_insurances;
        if(Object.prototype.toString.call(life_insurances)!='[object Array]')
          life_insurances=JSON.parse(life_insurances);

        $scope.life_insurances=life_insurances;

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



    $scope.detail_ref=function (insurance) {
        $state.go('life_insurance_detail',{insurance:JSON.stringify(insurance)});
    }

  });
