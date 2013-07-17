$(document).ready(function(){
	var loader = $("#loader");
	$("archive a").click(function(e){
		e.preventDefault();
		var link = $(this);
		loader.slideUp(400, function(){
			$(this).load(link.attr('href')+'&ajax=true', function(){
				loader.slideDown(400);
			});
		});
	});
});