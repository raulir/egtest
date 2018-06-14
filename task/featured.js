function featured_init(){
	
	// everything what happens after window is ready goes in here!

	// sample
	$('.featured_subheading').on('click', function(){
	
		// lets assign something here
		$(this).css({'color':'green'});
		
	});
	
}

function featured_resize(){
	
}

function featured_scroll(){
	
}

$(document).ready(function() {

	$(window).on('resize.cms', function(){
		featured_resize();
	});
	
	$(window).on('scroll.cms', function(){
		featured_scroll();
	});
	
	featured_init();

	featured_resize();
	
	featured_scroll();

});
