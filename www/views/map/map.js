/**
 * Created by outstudio on 16/7/6.
 */
/**
 * Created by outstudio on 16/7/6.
 */
angular.module('app')
    .controller('mapController',function($scope,BaiduMapService){
        var self = this;
        BaiduMapService.getBMap(function(BMap){
            var map = new BMap.Map("container");          // 创建地图实例
            var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
            map.centerAndZoom(point, 15);
        });


    })

