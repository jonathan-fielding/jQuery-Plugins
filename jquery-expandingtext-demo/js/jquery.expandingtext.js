(function( $ ){

  $.fn.expandingtext = function( options ) {  

    var settings = {
	  'title'  				: '.title',
	  'content'    			: '.content',
	  'article'    			: '.article',
	  'speed'				: 'slow'
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings

		if ( options ) { 
			$.extend( settings, options );
		}
		
		$(this).find(settings.article).find('.content').slideToggle();
		$(this).find(settings.article).addClass('closed');


		$(this).find(settings.title).click(function(){
			if($(this).parent().hasClass('closed')){
				$(this).parent().addClass('open');
				$(this).parent().removeClass('closed');
				$(this).next().slideToggle('settings.speed',function(){
					$(this).next().slideToggle(settings.speed);
				});
			}
			else{
				$(this).parent().addClass('closed');
				$(this).parent().removeClass('open');
				$(this).next().next().slideToggle(settings.speed,function(){
					$(this).prev().slideToggle(settings.speed);
				});
				
			}
		});
		
    });

  };
})( jQuery );