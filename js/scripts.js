//$('.grid-controls li a').click(function() {
//            $('.grid-controls .current').removeClass('current');
//            $(this).addClass('current');
//
//            var selector = $(this).attr('data-filter');
//            $container.isotope({
//                filter: selector,
//                animationOptions: {
//                    duration: 750,
//                    easing: 'linear',
//                    queue: false
//                }
//            });
//            return false;
//        });

//Function to highlight Navigation links on-click.
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


