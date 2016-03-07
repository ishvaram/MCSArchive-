var step = 0.5; 
            var step2 = 1.0;
			var current = 0;
            var current2 = 0;
			function scrollfondo(){
									current -= step;							
									current2 -= step2;
									jQuery('#head_exterior').stop().css("background-position", current);
									jQuery('#head_interior').stop().css("background-position", current2);
								}
		jQuery(document).ready(function() {
										var init = setInterval("scrollfondo()", 30);
		})