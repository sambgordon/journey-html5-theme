/**
* Theme Name: Journey HTML5 Static Theme
* Plugin URI: https://github.com/sambgordon/Journey-Static
* Description: This is a static theme for developers and agencies.
* Version: 1.0.0
* Author: Sam Gordon
* Author URI: http://www.devbysam.com 
* License: MIT
*/

jQuery(document).ready(function() {
	"use strict";

	$(window).on("load", function(){	//loader
		$('.loader-wrapper').fadeOut(300);
		$('#main-menu').fadeIn(300);
	});

	var bgImage = "#fullpage .section, #fullpage .section .slide, .slider-panel-wrapper .slides li, .full-carousel-wrapper .carousel-item, .page-header, .page-footer, .page-team, .myVideo"
	$("*").css('height', function () {
		var heightAttr = $(this).attr('data-height') + 'px';
		return heightAttr;
	});
	$("*").css('color', function () {
		var colorAttr = $(this).data('color');
		return colorAttr;
	});

	$("*").css('opacity', function () {
		var opacityAttr = $(this).data('opacity');
		return opacityAttr;
	});

	$("*").css('background-color', function () {
		var bgcolorAttr = $(this).data('bg-color');
		return bgcolorAttr;
	});

	$(bgImage).css('background-image', function () {
		var bg = ('url(' + $(this).data("image-src") + ')');
		return bg;
	});

	$(".top-triangle").css("border-bottom-color", function () {
		var topTriangle = $(this).data('shape-color');
		return topTriangle;
	});

	// ===== Fit Image to DIV ===== //
	$('.fit-img').each(function() {
		var $div = $(this),
			$img = $('img', $div),
			src = $img.attr('src');
			$div.css('backgroundImage', 'url(' + src + ')');
			$img.remove();
	});

	// Home Blog Panel
	var owlBlog = $(".home-blog-panel .box-carousel-wrapper");
	owlBlog.owlCarousel({
		dots: true,
		responsiveClass: true,
		responsive:{
			0:{
				items:1
			},
			720:{
				items:2
			},
			768:{
				items:2
			},
			960:{
				items:3
			},
			1024:{
				items:3
			}
		}
	});

	// ===== jQuery flexslider settings ===== //
	//declarations for hero image as slider
	$(window).on("load", function() {
		$('.flexslider.slider-panel-wrapper').flexslider({
			controlNav: false,
			directionNav: false,
			slideshow: true,
			animationSpeed: 800,
			multipleKeyboard: true,
			pauseOnHover: true
		});

		$('.featured-area .flexslider').flexslider({
			controlNav: false,
			directionNav: false,
			slideshow: true,
			animationSpeed: 800,
			multipleKeyboard: true,
			pauseOnHover: true
		});

		// Single page slider custom navigation
		$('.page-header-featured .slide-prev.prev, .page-header-featured .slide-next.next').on('click', function(){
			var href = $(this).attr('href');
			$('.page-header-featured .flexslider').flexslider(href)
			return false;
		});
	});

	// Fit hero image to screen
	$(window).on("load resize", function() {
		var fitHeight = $(window).height();
		var slideHeight = $('.slider-panel-wrapper .slides li');
		slideHeight.height(fitHeight);
	});

	// ===== jQuery fullpage settings ===== //
	var customScroll = false;

	if (customScroll == false) {
		$('#fullpage').addClass("normalScroll");
	}

	$('#fullpage').fullpage({
		autoScrolling: customScroll,
		scrollOverflow: customScroll,
		resize: false,
		anchors: ['panelBlock1', 'panelBlock2', 'panelBlock3', 'panelBlock4', 'panelBlock5', 'panelBlock6', 'panelBlock7', 'panelBlock8'],
		menu: '.nav-menu',
		navigation: true,
		navigationPosition: 'right',
		slidesNavigation: true,
		loopHorizontal: true,
		afterLoad: function(anchorLink, index){		//animations for theme
			if(index == 2){
				$('.panel-2 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-2 .animate-fadeInUp, .panel-2 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-2 .animate-fadeInLeft, .panel-2 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');

			}
			if(index == 3){
				$('.panel-3 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-3 .animate-fadeInUp, .panel-3 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-3 .animate-fadeInLeft, .panel-3 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
		
			}
			if(index == 4){
				$('.panel-4 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-4 .animate-fadeInUp, .panel-4 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-4 .animate-fadeInLeft, .panel-4 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
	
			}
			if(index == 5){
				$('.panel-3 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-3 .animate-fadeInUp, .panel-3 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-3 .animate-fadeInLeft, .panel-3 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
			}
			if(index == 6){
				$('.panel-4 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-4 .animate-fadeInUp, .panel-4 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-4 .animate-fadeInLeft, .panel-4 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
			}
			if(index == 7){
				$('.panel-7 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-7 .animate-fadeInUp, .panel-7 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-7 .animate-fadeInLeft, .panel-7 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
			}
			if(index == 8){
				$('.panel-8 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-8 .animate-fadeInUp, .panel-8 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-8 .animate-fadeInLeft, .panel-8 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
			}
			if(index == 9){
				$('.panel-9 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-9 .animate-fadeInUp, .panel-9 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-9 .animate-fadeInLeft, .panel-9 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
			}
			if(index == 10){
				$('.panel-10 .animate-fadeIn').animate({ opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-10 .animate-fadeInUp, .panel-10 .animate-fadeInDown').animate({ top: '0', opacity: 1 }, 1500, 'easeOutExpo');
				$('.panel-10 .animate-fadeInLeft, .panel-10 .animate-fadeInRight').animate({ left: '0', opacity: 1 }, 1500, 'easeOutExpo');
			}
		}
	});
});
