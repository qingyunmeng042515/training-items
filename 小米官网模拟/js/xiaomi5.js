$(function(){
	//购物车hover
	$(".car").hover(function(){
		$(this).find("img").attr("src","images/topbar-cart02.png");
		$(this).find(".proIn").stop().slideDown();
	},function(){
		$(this).find("img").attr("src","images/topbar-cart01.png");
		$(this).find(".proIn").stop().slideUp();
	})
})
