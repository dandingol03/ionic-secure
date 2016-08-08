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

          map.centerAndZoom(point, 17);
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl());
          map.enableScrollWheelZoom(true);

          //添加覆盖物
          var marker_p = new BMap.Point(116.404, 39.915);
          var marker = new BMap.Marker(marker_p);
          map.addOverlay(marker);
          marker.enableDragging();
          marker.addEventListener('dragend',function(e) {
            alert("当前位置：" + e.point.lng + ", " + e.point.lat);
          })


          var opts = {
            width: 250,
            height: 100,
            title: 'hello'
          };
          var infoWindow = new BMap.InfoWindow('world', opts);
          map.openInfoWindow(infoWindow, map.getCenter());

          /**
           * 设置弹性标注
           *
           */
          var bounce_point = new BMap.Point(116.403, 39.915);
          var marker_bounce = new BMap.Marker(bounce_point);
          map.addOverlay(marker_bounce);
          marker_bounce.setAnimation(BMAP_ANIMATION_BOUNCE);


          /**
           * 设置自定义标注
           */
          var myIcon=new BMap.Icon("img/ionic.png", new BMap.Size(300,157));
          var marker_icon = new BMap.Marker(new BMap.Point(116.402, 39.914), {icon: myIcon});
          map.addOverlay(marker_icon);

          var sContent =
            "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
            "<img style='float:right;margin:4px' id='imgDemo' src='http://app.baidu.com/map/images/tiananmen.jpg' width='139' height='104' title='天安门'/>" +
            "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
            "</div>";

          var infow = new BMap.InfoWindow(sContent);
          marker_icon.addEventListener('click',function(){
            this.openInfoWindow(infow);
          });


          /**
           * 自身定位
           */
           var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              //var mk = new BMap.Marker(r.point);
              //map.addOverlay(mk);
              //map.panTo(r.point);
              alert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
              alert('failed'+this.getStatus());
            }
          },{enableHighAccuracy: true});


        });




    })

