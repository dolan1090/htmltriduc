/*------------------------------------    
 1. Search Bar
--------------------------------------*/ 

$( '.search__open' ).on( 'click', function () {
$( 'body' ).toggleClass( 'search__box__show' );
return false;
});

 
/*! Call WOW */
wow = new WOW(
		{
		  animateClass: 'animated',
		  offset:       100,
		  mobile:       false
		}
	  );
wow.init();
 
// Call js scroll menu

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 61)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
  
})(jQuery); // End of use strict
 
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});	

// akr to scroll menu
$(window).scroll(function () {

	if ($(this).scrollTop() > 60) {
		$('.bghead').addClass('navbar-akr');
	} else {
		$('.bghead').removeClass('navbar-akr');
	}
	if ($(this).scrollTop() > 68) {
		$('.top-header').addClass('hide');
	} else {
		$('.top-header').removeClass('hide');
	}
	if ($(this).scrollTop() > 100) {
		$('.header-social').addClass('fix-header-social');
	} else {
		$('.header-social').removeClass('fix-header-social');
	}
});
 	
// js scroll Top 
jQuery(document).ready(function() {
	var offset = 300;
	var duration = 300;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.scrollup').fadeIn(duration);
		} else {
			jQuery('.scrollup').fadeOut(duration);
		}
	});

	jQuery('.scrollup').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});

// js slide invest
jQuery(document).ready(function($) {
	function getSlideDataIndex(swipe) {
		var activeIndex = swipe.activeIndex;
		var slidesLen = swipe.slides.length;
		if (swipe.params.loop) {
			switch (swipe.activeIndex) {
				case 0:
					activeIndex = slidesLen - 3;
					break;
				case slidesLen - 1:
					activeIndex = 0;
					break;
				default:
					--activeIndex;
			}
		}
		return activeIndex;
	}
	var homeInvestField = new Swiper('#home_invest_field_slide', {
		speed: 1000,
		slidesPerView: '3', 
		loop: true,
		pagination: {
			el: '#invest_field_pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '#invest_field_next',
			prevEl: '#invest_field_prev'
		},
		// autoplay: true,
		onSlideChangeEnd: function(swipe) {
			console.log(getSlideDataIndex(swipe))
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
		}
	});
});

// js slide project
var swiper = new Swiper('#project-slide-tab-1', {
	slidesPerView: 1,  
	slidesPerColumn: 2,
	spaceBetween: 30,
	pagination: {
		el: '#project-tab-1 .pagination-page',
		clickable: true,
	},
	breakpoints: {

		320: {
			slidesPerView: 1,
			slidesPerColumn: 1,
		},
		480: {
			slidesPerView: 1,
			slidesPerColumn: 1,
		},
		800: {
			slidesPerView: 2,
			slidesPerColumn: 1,
			spaceBetween: 20,
		},
	}
});	

// js slide news
var swiper = new Swiper('#news_slide', {
	slidesPerView: 4,   
	autoplay: { delay: 5000,},
	pagination: {
		el: '#news_slide .swiper-pagination',
		clickable: true,
	},
	navigation: {
	nextEl: '#news_slide .swiper-button-next',
	prevEl: '#news_slide .swiper-button-prev',
	},
	breakpoints: {

		320: {
			slidesPerView: 1,
			spaceBetween: 0,  
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 0,  
		},
		768: {
			slidesPerView: 2, 
		},
	}
});

// js slide why
var swiper = new Swiper('#diseases_slide', {
	slidesPerView: 6,   
	spaceBetween:30,  
	autoplay: { delay: 5000,},
	pagination: {
		el: '#diseases_slide .swiper-pagination',
		clickable: true,
	},
	navigation: {
	nextEl: '#diseases_slide .swiper-button-next',
	prevEl: '#diseases_slide .swiper-button-prev',
	},
	breakpoints: {

		320: {
			slidesPerView: 2,
			spaceBetween: 20,  
			slidesPerColumn: 2,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 20,  
			slidesPerColumn: 2,
		},
		800: {
			slidesPerView: 4, 
		},
	}
});

// js baochi_slide
 
var swiper = new Swiper('#doctor_slide', {
	slidesPerView: 1,   
	slidesPerColumn: 2,
	slidesPerGroup: 2,
	spaceBetween:10, 	
	autoplay: { delay: 4000,},
	pagination: {
		el: '#doctor_slide .swiper-pagination',
		clickable: true,
	},
	navigation: {
	nextEl: '#doctor_slide .swiper-button-next',
	prevEl: '#doctor_slide .swiper-button-prev',
	},
	breakpoints: {

		320: {
			slidesPerView: 1,
			spaceBetween: 0,  
			slidesPerColumn: 1,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 0,  
			slidesPerGroup: 1,
			slidesPerColumn: 1,
		},
		768: {
			slidesPerView: 1, 
			slidesPerGroup: 1,
			slidesPerColumn: 2,
		},
	}
}); 

 
// js fancybox popup images 	
    $('[data-fancybox="preview"]').fancybox({  
	   buttons : [   
		'zoom',
		'thumbs',
		'fullScreen',
		'close'
	  ],
	  thumbs: {
		autoStart: false
	  },
	});
   
 
// js fancybox popup images 	
    $('[data-fancybox="images"]').fancybox({  
	   buttons : [   
		'zoom',
		'thumbs',
		'fullScreen',
		'close'
	  ],
	  thumbs: {
		autoStart: false 
	  },
	});
 


