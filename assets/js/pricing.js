$(document).ready(function() {
	/* ======= Plan switch ======= */
	$('#plan-switch .radio-switch-input').on('click', function(){
		
		if($(this).is(':checked')) { 
			
			$timescale = $(this).data('plan-cost');
			console.log(($timescale));
			$('#plan-items').find('.'+ $timescale).show().siblings().hide();
		}
	});
	
	/* ======= Popover ======= */
	$('.info-popover-trigger').popover({
	    container: 'body',
		trigger: 'hover',

	});
	
    /* ======= FAQ accordion ======= */
    $('.card-toggle').on('click', function () {
      if ($(this).find('svg').attr('data-icon') == 'chevron-down' ) {
        $(this).find('svg').attr('data-icon', 'chevron-up');
      } else {
        $(this).find('svg').attr('data-icon', 'chevron-down');
      };
    });

	var accordions = bulmaCollapsible.attach();

});