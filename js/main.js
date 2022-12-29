(function ($) {
		'use strict'

//code start
$('.menu-icon i').on('click',function(){
	$('.mobile-menu').animate({
		left:0
	});
});
$('.menu-close i').on('click',function(){
	$('.mobile-menu').animate({
		left:-250
	});
});



// owl js
$(".owl-carousel").owlCarousel({
 
  //Basic Speeds
  slideSpeed : 200,
  paginationSpeed : 800,

  //Autoplay
  autoPlay : true,
  goToFirst : true,
  goToFirstSpeed : 500,

  // Navigation
  navigation : true,
  navigationText : [''],
  pagination : true,
  paginationNumbers: true,

  // Responsive
  responsive: true,
  items : 1,
  itemsDesktop : [1199,1],
  itemsDesktopSmall : [980,1],
  itemsTablet: [768,1],
  itemsMobile : [479,1]
});









})(jQuery);