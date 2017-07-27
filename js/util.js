$(document).ready(function(){
	/*$(window).scroll(function(){ 
		if($(window).width() <= 768){
			return;
		}else{
			var scrollTop = $(window).scrollTop();
			if(scrollTop <= 50){
				rsizeHead(scrollTop)
			}else if(scrollTop > 50){
				var height = 140-2*scrollTop;
				$(".header-bottom").height("40px");
				$(".header-bottom-f").addClass("header-bottom-resize")
				$(".menus-list>li").css("padding","0px 10px");
				$(".school-logo").css("display","none");
				$(".drop-down").css("margin-top","0");
				$(".slider").css("margin-top","40px");
				$(".title-img").css("margin-top","40px");
			}
		}
		
	})
	function rsizeHead(scrollTop){
		var height = 140-2*scrollTop;
		var margin = 50-scrollTop;
		$(".header-bottom").height(height+"px");
		$(".header-bottom-f").removeClass("header-bottom-resize")
		$(".menus-list>li").css("padding",(50-scrollTop)+"px 10px");
		$(".school-logo").css("display","block");
		$(".drop-down").css("margin-top",margin+"px");
		$(".slider").css("margin-top","0");
		$(".title-img").css("margin-top","0");
		console.log(height +"......"+scrollTop+"........."+(140-2*scrollTop));
	}*/
	//amazing跳转
	$(".nav-tabs-con a").click(function(){
		$(".nav-tabs-con a").removeClass("active");
		$(this).addClass("active");
	});
	//手机端弹出二级菜单
	$(".menus-toggle").click(function(){
		if(!$(".more-nemus-list").is(":animated")){
			$(".more-nemus-list").slideToggle();
		}
	});
	//语言选择
	
	$(".language").click(function(){
		$(".language-more").toggle();
	});
	/*$(".click-more").toggle(
		function () { 
			$(this).parent().prev().slideUp();
			$(this).removeClass("minus");
		}, 
		function () { 
			$(this).parent().prev().slideDown();
			$(this).addClass("minus");
		} 
	)*/
	//三级菜单弹出
	$(".more-nemus-list>li>a").click(function(){
		var a = $(this).parent().find(".child-menus");
		console.log("123");
		if($(a).length > 0 && !$(a).is(":animated")){
			$(".child-menus").not($(a)).slideToggle();
			$(a).slideToggle();
		};
	});
});