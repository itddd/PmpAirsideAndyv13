$(document).ready(function(){
	$(".indicator, .slide_controls .slide_next, .slide_controls .slide_prev").click(function(e){
		e.preventDefault();
		var slideClicked = $(this).attr('id');
		$(".indicator").removeClass('selected');
		$("#slider_controls #"+slideClicked).addClass('selected');
		if($("#slide_"+slideClicked).css("display") == 'none'){
			$(".slide:visible").fadeOut('fast', function(){
				$("#slide_"+slideClicked).fadeIn();
			});
		}
		
	});
});