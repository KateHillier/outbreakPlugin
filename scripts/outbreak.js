$.fn.outbreak = function(options) {

	var numberOfSpots = options;
	
	$(this).on('mouseover', function(){
		
		var numLeft = numberOfSpots;
		createSpots();
		var infect = window.setInterval(function (){
			$('.spot'+ numLeft).css({
				'opacity':'1',
				'-webkit-animation-name': 'infection'
			});
			numLeft--;
			if(numLeft < 0){
				window.clearInterval(infect);
			}
		}, 50); // End infect

		$('h3').css({'opacity' : 1,'transition' : 'all 5s ease'});
			
	}); // End $this
	
	var createSpots = function() {
		$('.outbreakOverlay').html('');
		for (var i = 1; i <= numberOfSpots; i++) {
			var top = Math.floor(Math.random() * 100) + 1
			var left = Math.floor(Math.random() * 100) + 1

			$('<div>')
				.addClass('spot spot' + i)
				.css({
					top : top + '%',
					left : left +'%',
					height : '5px',
					width : '5px',
					background : '#D12026'
				})
				.appendTo(".outbreakOverlay");
		}; //End for
	};// End createSpot
}; // End outbreak

		
