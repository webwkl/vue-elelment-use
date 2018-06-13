<template>
	<article class="Maps">
		<div id="map"></div>
	</article>
</template>
<script>
export default {
	name:'Maps',
	data () {
		return {

		}
	},
	mounted() {
		// 百度地图API功能
		var map = new BMap.Map("map");    // 创建Map实例
		var sContent ="北京市朝阳区西大望路甲3号 蓝堡国际Ⅱ座10层";
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
		//添加地图类型控件
		map.addControl(new BMap.MapTypeControl({
			mapTypes:[
	            BMAP_NORMAL_MAP,
	            BMAP_HYBRID_MAP
	        ]}));	  
		//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.483919, 39.917077); //定义一个中心点坐标
        map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
        var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		marker.addEventListener("click",getAttr);
		function getAttr(){
			var p = marker.getPosition();       //获取marker的位置
			var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
			map.openInfoWindow(infoWindow,point); //开启信息窗口
			document.getElementById("r-result").innerHTML = "信息窗口的内容是：<br />" + infoWindow.getContent();
		}

		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	}
}
</script>
<style scoped lang="less">
.Maps{
	width: 100%;
	#map{
		width: 720px;
		min-width: 720px;
		height: 330px;
		border:1px solid #ccc;
		margin: 20px auto 60px;
	}
}
</style>