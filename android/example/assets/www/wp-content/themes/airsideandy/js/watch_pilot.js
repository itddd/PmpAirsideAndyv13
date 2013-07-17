$(document).ready(function(){
	var fade = $(".fade_bg");
	var video_text = $("#video_text");
	var video = $("#video .pilot_video");

	video.on('pause stop ended', function(e){
		fade.fadeOut();
		video_text.css('zIndex', '4');
	}).on('play', function(e){
		fade.fadeIn();
		video_text.css('zIndex', '1');
	});
	fade.on("click", function(){
		video[0].pause();
		$(this).fadeOut();
	});
	
});