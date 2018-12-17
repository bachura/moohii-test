$(document).ready(function() {

	// To top
	$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
	});

	// Adaptive menu
	$('.menu-btn').on('click', function () {
		if ($(this).parents('.menu_wrap').is('.opened-menu') !== true) {
			$('.menu_wrap').addClass('opened-menu');
			$('#main-menu').addClass('opened');

		}
		else if ($(this).parents('.menu_wrap').is('.opened-menu') === true) {
			$('.menu_wrap').removeClass('opened-menu');
			$('#main-menu').removeClass('opened');
		}
	});

	//dropdown
	$('.dropdown-header').click(function(event){
		$(this).closest('.custom-dropdown').toggleClass('active');
		event.stopPropagation();
	});

	$('.dropdown li').click(function(event){
		self = $(this);
		var select = $(this).text();
		// self.closest('.custom-dropdown').find('input').val(select);
		self.closest('.custom-dropdown').find('.dropdown-header span').text(select);
		$('.custom-dropdown').removeClass('active');
		event.stopPropagation();
	});

	$(window).click(function(){
		$('.custom-dropdown').removeClass('active');
	});

	// Owl Banner
	$('.owl-carousel.owl-banner').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		nav: true,
		navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
		responsive: {
			0: {
				items: 1
			}
		}
	})

	// Owl Popular
	$('.owl-carousel.owl-popular').owlCarousel({
		loop: true,
		margin: 25,
		dots: false,
		nav: true,
		navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			767: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	})

});