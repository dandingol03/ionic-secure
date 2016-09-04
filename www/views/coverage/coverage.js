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
        life_insurances.map(function (life_insurance, i)
        {if(life_insurance.flag==true){
          insurances.push(life_insurance);
        }
        }
        );
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




    $scope.detail_ref=function (insurance) {
        $state.go('life_insurance_detail',{insurance:JSON.stringify(insurance)});
    }

  });
