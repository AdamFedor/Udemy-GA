$(document).ready(function(){
	$(".readmore").click(function(){
			event.preventDefault();
			$(".readmore").hide();
			$(".readless").show();
			$("#show-this-on-click").slideDown("slow");
	});
	$(".readless").click(function(){
			event.preventDefault();
			$("#show-this-on-click").slideUp("slow");
			$(".readless").hide();
			$(".readmore").show();
	});
	$(".learnmore").click(function(){
			event.preventDefault();
			$(".learnmore").hide();
			$("#learnmoretext").slideDown("slow");
	});
})
