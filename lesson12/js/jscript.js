$(document).ready(function(){
	$('.main_btn, .main_btna, ul li:nth-child(2)').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});

	$('.close').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp('slow');
	});
});