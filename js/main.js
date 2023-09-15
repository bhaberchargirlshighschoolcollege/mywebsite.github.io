(function ($) {
 "use strict";

 
/*----------------------------
 jQuery DemoPanel 
------------------------------ */
		$("#panel_open").click(function(){
			$(".setting_panel").animate({left:"-226px"});
			$(this).hide();
			$("#panel_close").css("display","block");
		});	

		$("#panel_close").click(function(){
			$(".setting_panel").animate({left:"0px"});
			$(this).hide();
			$("#panel_open").css("display","block");
		});	
 
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	

/*--------------------------
 Count Up active jquery
---------------------------- */
	$('.counter').counterUp({
		delay: 50,
		time: 5000
	});
/*----------------------------
 bxslider active
------------------------------ */  
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		randomStart: true,
		responsive: true,
		auto: true,
		easing:  'ease-in-out',
		pager:false,
		autoPlay:true,
		controls:true,
		responsive:true,
		nextText:["<i class='fa fa-angle-right'></i>"],
		prevText:["<i class='fa fa-angle-left'></i>"],
	});
/*-------------------
[5. ScrollUp ]
---------------------*/
	$.scrollUp({
		animation: 'slide', // Fade, slide, none
		scrollSpeed: 2000,
		scrollText: [
		  "<i class='fa fa-chevron-up'></i>"
		]
	});
/*-------------------
[8. NiceScroll ]
---------------------*/
    (function () {
   var nice = $("html").niceScroll({
    cursorcolor: '#009e63',
      cursorwidth: '10px',
      cursorborderradius: '80px',
      cursorborder: '0px solid',
      zindex:"9999"
    
    });  // The document page (body)
    $("#boxscroll").niceScroll({touchbehavior:true});

    }());
/*----------------------------
 owl-eight-news active
------------------------------ */  
  $("#owl-gallery").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],  
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsMobile : [479,1],
  });
})(jQuery); 