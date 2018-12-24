;(function($){
	'use strict';
	
	var doc      = document,
			win      = window,
			isMobile = {
				Android: function() { return navigator.userAgent.match(/Android/i); }, 
				BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
				iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
				Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
				Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
				any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
			};
	
	$(doc).ready(function(){
		
		optima_content_update();
		
		// Main navigation:
		$('.main-nav__list').superfish({
			hoverClass:    'sfHover',
			delay:         800,
			animation:     {opacity: 'show'},
			animationOut:  {opacity: 'hide'}
		});
		$('.main-nav__btn').on('click', function() {
			$(this).toggleClass('open');
			if($('.main-nav__list').hasClass('open')) {
				$('.main-nav__list').removeClass('open');
			} else {
				$('.main-nav__list').addClass('open');
			}
		});
		
		// Header sticky:
               /* if ($('.header-box-01').size() > 0) {
			$('.header-box-01').sticky({ 
				topSpacing: 0,
				zIndex: 300
			});
		};*/
		/*if ($('.wrapp-header').size() > 0) {
			$('.wrapp-header').sticky({ 
				topSpacing: 0,
				zIndex: 300,
                                responsiveWidth:true,
			});
		};*/
		
		// Owl Carousel:
		if ($('.owl-carousel-01').size() > 0) {
			$('.owl-carousel-01').owlCarousel({
				margin: 10,
				nav: true,
				loop: true,
				autoplay: false,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					}
				}
			})
		};
		if ($('.owl-carousel-02').size() > 0) {
			$('.owl-carousel-02').owlCarousel({
				margin: 10,
				nav: true,
				loop: true,
				autoplay: false,
                                dots: true,
                                responsiveClass:true,
				responsive: {
					0: {
						items: 1
					}
				}
			})
		};
		if ($('.owl-carousel-03').size() > 0) {
			$('.owl-carousel-03').owlCarousel({
				loop:true,
				margin:30,
				responsiveClass:true,
				dots: true,
				nav:true,
				autoplay: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:1
					},
					640:{
						items:2
					},
					767:{
						items:4
					}
				}
			});
		};
                
                if ($('.owl-carousel-04').size() > 0) {
			$('.owl-carousel-04').owlCarousel({
				margin: 10,
				nav: true,
				loop: true,
				autoplay: false,
                                dots: true,
                                responsiveClass:true,
				responsive: {
					0: {
						items: 1
					}
				}
			})
		};
		
		// Back to Top:
		$(win).on('scroll', function() {
			if ($(win).scrollTop() > 0) {
				$('.back2top').fadeIn();
			} else {
				$('.back2top').fadeOut();
			}
			var bottom_pad = parseInt($('.footer_wrapper').height())+parseInt($('.footer_wrapper').attr('data-pad-top'))+parseInt($('.footer_wrapper').attr('data-pad-bottom')) + 30;
			if ($(win).scrollTop() > $(doc).height() - $(win).height() - bottom_pad) {
				$('.back2top').css({'bottom': bottom_pad+'px'});
			} else {
				$('.back2top').css({'bottom': '30px'});
			}
		});
		$('.back2top').on('click', function() {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
		
		// Video background
		var video_bg_tag = $('.video_bg');
		if (video_bg_tag.size() > 0) {
			video_bg_tag.each(function () {
				if ($(this).children().length == 0) {
					$(this).parent().hide();
				}
			});
			$('.play-video').on('click', function(ev) {
				video_bg_tag.each(function() {
					$(this).find('.video_frame').attr('src', $(this).find('.play-video').attr('data-video-url'));
				});
				video_bg_tag.removeClass('show_video_now');
				$(this).parent().find(".video_frame")[0].src += "&autoplay=1";
				ev.preventDefault();
				optima_video_background();
				$(this).parent('.video_bg').addClass('show_video_now');
			});
		};
		
		// Pretty photo:
		if ($('.pretty-photo').size() > 0) {
			$(".pretty-photo").prettyPhoto();
		};
		
		
		// Swipebox Popup:
		var swipebox_class = $('.swipebox');
		if(swipebox_class.size() > 0){
			$('html').addClass('smart-box');
			swipebox_class.swipebox();
		}
		$(doc).on('click', '#swipebox-container .slide.current img', function(e){
			$('swipebox-next').trigger('click');
			e.stopPropagation();
		});
		$(doc).on('click', '#swipebox-container', function(e){
			$('#swipebox-close').trigger('click');
		});
		
		
		
		if (isMobile.any()){
			doc.documentElement.className = doc.documentElement.className + " touch";
			// Parallax
			$('.parallax').each(function(i, obj){
				$(this).css("background-attachment", "scroll");
			});
		}
	});
	$(win).resize(function(){
		
		// Video BG:
		optima_content_update();
		
		// Wideo BG:
		optima_video_background();
		setTimeout("optima_video_background();", 1000);
		
	});
	
	
})(jQuery);

// Video background
function optima_video_background() {
	$('.video_bg').each(function () {
		$(this).find('iframe').css({'height': $(this).height() + 'px'});
	});
}
function optima_content_update() {
	var frame16_10_tag = jQuery('.frame16x10');
	if (frame16_10_tag.size() > 0) {
		optima_iframe16x10(frame16_10_tag);
	}
}
function optima_iframe16x10(frame_class) {
	frame_class.each(function() {
		jQuery(this).height(($(this).width() / 16) * 10.5);
	});
}