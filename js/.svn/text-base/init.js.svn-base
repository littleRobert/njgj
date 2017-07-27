
$(document).ready(function(){
	var wWidth = $(window).width();
	resizePlayer();
	resizeBody();
	$(window).resize(function (){
		//初始化body高度
		resizeBody();
		//初始化播放器比例（16:9）
		wWidth = $(window).width();;
		resizePlayer()
	});
	//初始化高度
	function resizeBody(){
		var wHeight = $(window).height();
		$("body").css("min-height",wHeight);
	}
	//初始化播放器比例（16:9）
	
	function resizePlayer(){
		if(wWidth <= 767){
			var player = wWidth/16*9;
			$("#my-video").height(player);
		}
	}
})