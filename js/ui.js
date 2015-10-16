$(document).ready(function() {
	// this is gonne be the most complicated function...
	// if hymn1 clicked, do a fade in from top
	$('li[class^="list-hymn"]').on("click", function() {
		var closestHymnInfo$ = $(this).closest('div.row').find('div[id^="hymn-info"]');
		
		closestHymnInfo$.toggleClass("active");

		if (closestHymnInfo$.hasClass("active")) {

			closestHymnInfo$.fadeInSlideDown();

			$(this).closest('div.row').siblings().children("div[id^='hymn-info']").removeClass("active").fadeOutSlideUp();
		} else {
			closestHymnInfo$.fadeOutSlideUp();
		}

		// returning false from event handler in jQuery is the same as event.stopPropagation() and event.preventDefault()		
		return false;
	});

	$.fn.fadeInSlideDown = function() {
		this.stop(true).fadeIn({
			duration: 500,
			queue: false
		}).css('display', 'none').slideDown(500);
	};

	$.fn.fadeOutSlideUp = function() {
		this.stop(true).fadeOut({
			duration: 500,
			queue: false
		}).slideUp(500);
	};

	$(function() {
		$( ".datepicker" ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			beforeShowDay: enableSUNDAYS
		});
	});

	function enableSUNDAYS(date) {
		var day = date.getDay();
		return [(day == 0), ''];
	}

});
