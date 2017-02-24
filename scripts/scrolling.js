(function($) {
	$.fn.isInViewport = function() {
	    var element = $(this).attr('class');
	    if (element) {
		    $('a.active').removeClass('active');
	    	$('a.'+element).addClass('active');
	    }
	};

	$(window).on('resize scroll', function() {
		$('h2:in-viewport').isInViewport();
	});
})(jQuery);