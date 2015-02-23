$(document).ready( function() {

	$.tools.overlay.addEffect("fade", function(position, done) {
		this.getOverlay().css(position).fadeIn(this.getConf().speed, done);
	},

	function(done) {
		this.getOverlay().fadeOut(this.getConf().speed, done);
	});

	$('a[rel]').each(function() {
		$(this).overlay({
			mask: {
				color: 'black',
				loadSpeed: 0,
				closeSpeed: 0
			},
			top: 'center',
			onBeforeLoad: function() {
				console.log(this + 'load');
				var wrap = this.getOverlay().find('.content-wrap');
				wrap.load(this.getTrigger().attr('href'));
			},
			oneInstance: true
		});
	});


	$('.terms-from-privacy').click(function(e) {
	 	e.preventDefault();
	 	console.log('terms from privacy loaded');
	 	$('#terms').css('z-index', '100000000');
	});

});
