(function( $ ){

  $.fn.hoverpanel = function( options ) {  

    var settings = {
	  'default_content'  	: '.default',
	  'hover_content'    	: '.hover',
	  'fade_level'    		: '0.5'
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }

		$(this).find(settings.hover_content).hide();
		
		if(isTouchDevice()){
			$(this).click(function(){
				$(this).stop(true);
				$(this).siblings().stop(true)
				$(this).siblings().fadeTo('',settings.fade_level);
				$(this).fadeTo('','1');
				$(this).find(settings.default_content).hide();
				$(this).find(settings.hover_content).show();
			});
		}
		else {
			$(this).mouseenter(function(){
				$(this).stop(true);
				$(this).siblings().stop(true)
				$(this).siblings().fadeTo('',settings.fade_level);
				$(this).fadeTo('','1');
				$(this).find(settings.default_content).hide();
				$(this).find(settings.hover_content).show();
			});
			
			$(this).mouseleave(function(){
				$(this).fadeTo('','1');
				$(this).siblings().fadeTo('','1');
				$(this).find(settings.default_content).show();
				$(this).find(settings.hover_content).hide();
			});
		}
		
		function isTouchDevice() {
		    try {
		        document.createEvent("TouchEvent");
		        return true;
		    } catch (e) {
		        return false;
		    }
		}
    });

  };
})( jQuery );