$(document).ready(function(){
	var fade = $(".fade_bg");
	var video_text = $("#video_text");
	var elem = document.getElementById("the_video");
	var video = $("#video");
	$("#truck img").css('margin-left', '-100%').animate({
		'margin-left' : 25
	}, 2000);

	$("#play_video_link").click(function(e){
		video.show();
		fade.fadeIn();
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
		e.preventDefault();
	});

	$(elem).on('pause stop ended', function(e){
		fade.fadeOut();
		video_text.css('zIndex', '4');
	}).on('play', function(e){
		fade.fadeIn();
		video_text.css('zIndex', '1');
	}).on('click', function(){
		if (elem.exitFullscreen) {
		  elem.exitFullscreen();
		} else if (elem.mozExitFullScreen) {
		  elem.mozExitFullScreen();
		} else if (elem.webkitExitFullscreen) {
		  elem.webkitExitFullscreen();
		}
	}).on("ended", function(){
		$(elem).trigger("click");
	});
	fade.on("click", function(){
		$(elem)[0].pause();
		video.fadeOut();
		$("#play_video_link").fadeIn();
		$(this).fadeOut();
	});

	$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function () {
		var fullScreen = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitIsFullScreen ? true : false;
		if(!fullScreen){
			video.hide();
			elem.pause();
			fade.fadeOut();
		}	
	});
});