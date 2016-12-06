//Highlight nav bar on click
// TODO - Find a nicer way to do this
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

//$(document).ready(function () {
//    $.each($('#navbar').find('li'), function() {
//        $(this).toggleClass('active',
//            '/' + $(this).find('a').attr('href') == window.location.pathname);
//    });
//});


$(document).ready( function() {
//    $('#myCarousel').carousel({
//    	interval:   4000
//	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});