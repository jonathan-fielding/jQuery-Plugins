(function( $ ){

  $.fn.hoverpanel = function( options ) {  

    var settings = {
	  'default_content'  : '.default',
	  'hover_content'    : '.hover',
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }

		$(this).find(settings.hover_content).hide();

		$(this).mouseenter(function(){
			$(this).stop(true);
			$(this).siblings().stop(true)
			$(this).siblings().fadeTo('','0.50');
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
    });

  };
})( jQuery );