$(document).ready( function() {


	$.tools.overlay.addEffect("fade", function(position, done) {
		this.getOverlay().css(position).fadeIn(this.getConf().speed, done);
	},

	function(done) {
		this.getOverlay().fadeOut(this.getConf().speed, done);
	});

	$('a[rel]').each(function() {
		$(this).overlay({
			mask: 'black',
			effect: 'fade',
			top: 'center',

			onBeforeLoad: function() {
				var wrap = this.getOverlay().find('.content-wrap');
				wrap.load(this.getTrigger().attr('href'));
				
			},
			// // onLoad: function() {
			// // 	var msk = $.mask;
			// // 	if ( msk.isLoaded() != 'full' ) {
			// // 		msk.load('black');
			// // 		$('#terms').css('z-index', '100000000');
			// // 		$('#privacy').css('z-index', '9999999');
			// // 	}
			// // },
			// onClose: function() {
			// 	//$.mask.close();
			// },
			// onLoad: function(){
		 //        var t = $.mask;
		 //        if(!t.isLoaded()){
		 //            t.load();
		 //            var ov = this.getOverlay();
		 //            //ov.css('z-index', '9999');
		 //        }
		 //    },

			oneInstance: true
		});

	});

	$('.terms-from-privacy').click(function(e) {
	 	e.preventDefault();
	 	$('#terms').css('z-index', '100000000');
	 	$.mask.load('black');
	});

	// $('.overlay').click(function() {
	// 	$.mask.load('black');
	// 	$('#privacy').css('z-index', '9999999');
	// })


});
