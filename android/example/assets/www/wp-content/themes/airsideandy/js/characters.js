$(document).ready(function(){
	$("#character_list a").click(function(e){
		e.preventDefault();
		$("#characters .character:visible").fadeOut();
		$("#"+$(this).attr("data-id")).fadeIn();
	})
});