$(document).ready( function() {

	$( '.close' ).click( function() {
		
	})

	$( '#terms' ).click( function() {
		$( '.close' ).click();
		$(this).fadeOut(300);
		$( '.ui-btn' ).text('');
	});

	$( '#privacy' ).click( function() {
		$( '.close' ).click();
		$( this ).fadeOut(300);
		$( '.ui-btn' ).text('');
	})

	$(document).keyup( function(e) {
		if ( e.keyCode == 27 ) {
			$( '.close' ).click();
			$( '.ui-btn' ).text('');
		}
	});

});

$(function() {
	$( '.ui-btn' ).text('');
});
