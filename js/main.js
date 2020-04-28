$(document).ready(function(){
	$('#nav').slicknav();
	$("#responsive-video").fitVids();

	$(".my_list").owlCarousel({
 
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	 
	items : 3,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
 pagination: false,
		theme: "rrf-angle-only",
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
});  
	
 $(".double_list").owlCarousel({
 
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	 
	items : 4,
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [979,4],
 pagination: false,
		theme: "mz-angle-only ",
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
});  
		
		
 
 
});  
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	