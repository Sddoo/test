$(document).ready(function(){
	$('.main_btn, .main_btna, .main_nav nav ul li a:nth-child(1)').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({height: 'show'},1000);
	});

	$('.close').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({height: 'hide'}, 1000);
	});

	//FORM

	$('.form').on('submit', function(event){
		event.preventDefault();
		$.ajax({
		  url: 'server.php',
		  success: function(){
		    $('.thanks').animate({height: 'show'}, 1000);
		  }
		});
	});

	$('.back').on('click', function(){
		$('.thanks').animate({height: 'hide'},1000);
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({height: 'hide'}, 1000);
	})
});