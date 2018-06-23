var idleTime = 0;
$(function() {

/* LINK FORMATTING------------------- */
	//add line-through to indicate selected links
	$('a').click(function() {
		$('a').removeClass('active');
		$(this).addClass('active');
	});

/* SLIDE-IN MODAL CONTROLS------------ */
	var vis = 0;
	//slide in content
	$('.toggle').click(function() {
		//check if modal is already open, show if not
		if (vis == 0) {
			$('#popups').animate({
				width: 'toggle'
			}, 80);
			vis = 1;
		}
		//show selected information
		$('.info').hide();
		var key = $(this).attr("href");
		$(key).show();
	});

	//close modals when clicking X
	$('.close').click(function() {
		closePopup();
	});

	//close when you click outside the modal, but not if you are clicking on a link
	$('main').click(function(e){
			var target = $(e.target);
			if(target.is('a')){
				return
			}else if(vis == 1){
					closePopup();
			}
	});

	function closePopup() {
		//slide out modal
		if (vis == 1) {
			$('#popups').animate({
				width: 'toggle'
			}, 80);
			vis = 0;
			$('a').removeClass('active');
		}
	}

/* OVERLAYS------------------------ */
	//show overlays
	$('.pop').click(function() {
		$(this).next().show();
	});

	//close overlays when clicked
	$('.overlay').click(function() {
		$(this).hide();
		$('.pop').removeClass('active');
	});

/* SCREENSAVER CONTROLS------------------------ */
	//Increment the idle time counter every second.
	var idleInterval = setInterval(timerIncrement, 1000);

	//Zero the idle timer on mouse movement or keypress.
	$(this).mousemove(function(e) {
		idleTime = 0;
	});
	$(this).keypress(function(e) {
		idleTime = 0;
	});

	function timerIncrement() {
		idleTime = idleTime + 1;
		//show screensaver after 30 seconds
		if (idleTime > 30) {
			$('.screensaver').show();
			idleTime = 0;
		}
	}
});
