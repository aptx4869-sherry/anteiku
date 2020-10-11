

(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		
		=================================================================
		04 - Dropdown Arrow
		=================================================================	
		*/

		if ($(".dropdown-menu li").length) {
			$(".dropdown-menu li").on('click', function () {
				$(this).parents(".dropdown").find('.btn-dropdown').html($(this).text());
				$(this).parents(".dropdown").find('.btn-dropdown').val($(this).data('value'));
			});
		};


		/* 
		=================================================================
		05 - Banner-Slider
		=================================================================	
		*/

		$(".banner-slider").owlCarousel({
			smartSpeed: 300,
			autoplayTimeout: 7000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			nav: false,
			dots: true,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			mouseDrag: true,
			touchDrag: true
		});


		/* 
		=================================================================
		06 - Select-2
		=================================================================	
		*/


		$('.banner-select').select2()

		$('.sidebar-category-select').select2({
			placeholder: 'e.g. job title'
		});
		$('.sidebar-category-select-2').select2({
			placeholder: 'Choose Category'
		});


		/* 
		=================================================================
		07 - Responsive Menu
		=================================================================	
		*/
		$("ul#tutree_navigation").slicknav({
			prependTo: ".tutree-responsive-menu"
		});


		/* 
		
		/* 
		=================================================================
		09 - Jarralax
		=================================================================	
		*/

		$('.parallax').jarallax();


		/* 
		=================================================================
		10 - Testimonial SLider
		=================================================================	
		*/
		$(".happy-freelancer-slider").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 20,
			touchDrag: true,
			mouseDrag: true,
			nav: false,
			dots: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 1200,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});


	});

	   /* 
		=================================================================
		11 -Sticky Header
		=================================================================	
		*/

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".forsticky").addClass("sticky");
            } else {
                $(".forsticky").removeClass("sticky");
                $(".forsticky").addClass("");
            }
        });

	   /* 
		=================================================================
		12 - Btn To Top
		=================================================================	
		*/
        if ($("body").length) {
            var btnUp = $('<div/>', {
                'class': 'btntoTop'
            });
            btnUp.appendTo('body');
            $(document).on('click', '.btntoTop', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 700);
            });
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
                else $('.btntoTop').removeClass('active');
            });
        }


}(jQuery));
$(document).ready(function() {

  $(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + ' .collapse.in').length;
    
    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  })

  openAllPanels = function(aId) {
    console.log("setAllPanelOpen");
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    console.log("setAllPanelclose");
    $(aId + ' .panel-collapse.in').collapse('hide');
  }
     
});

