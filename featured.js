function featured_init(){

	// sample
	$('.featured_button').on('click.eg', function(){
	
		// lets assign something here
		
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
