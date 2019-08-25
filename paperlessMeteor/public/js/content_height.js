jQuery(document).ready(function() { content_height(); });
jQuery(window).resize(function()  { content_height(); });
function content_height(){
	var window_height 	= jQuery(window).height();
	var header_height  	= jQuery(".header").outerHeight();
	var nav_height 		= jQuery("nav").outerHeight();
	var final 			= window_height - (header_height + nav_height);
	var sidebar 		= window_height - (header_height + 70);
	jQuery("#effect").height(sidebar);
}

