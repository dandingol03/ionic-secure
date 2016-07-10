/**
 * Created by outstudio on 16/7/9.
 */

angular.module('app')
    .controller('directiveController',function($scope,$timeout){

        $scope.user='danding';
        $scope.name = 'tobi';
        $scope.coverage=new Object();
        $scope.coverage.name='danding';


        $scope.hideDialog = function () {
            $scope.dialogIsHidden = true;
            $timeout(function () {
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    })
    .directive("helloWorld2",function(){

        return {
            restrict:'EACM',
            scope:{
                title:'@title',
                coverage:'='
            },
            templateUrl:'/views/directive/template/template.html'
        }
    })

    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                'close': '&onClose'
            },
            templateUrl: '/views/directive/template/my-dialog.html',
            link: function (scope, element) {
                scope.name = 'Jeff';
            }
        }
    })