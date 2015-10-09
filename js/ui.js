$(document).ready(function() {
	// this is gonne be the most complicated function...
	// if hymn1 clicked, do a fade in from top
	$('.list-hymn1').on("click", function() {
		$('#hymn-info1').toggleClass("active");

		if ($('#hymn-info1').hasClass("active")) {

			$('#hymn-info1').fadeInSlideDown();

			$('#hymn-info2').fadeOutSlideUp();
			$('#hymn-info2').removeClass("active");
			$('#hymn-info3').fadeOutSlideUp();
			$('#hymn-info3').removeClass("active");
		} else {
			$('#hymn-info1').fadeOutSlideUp();
		}
	});


	$('.list-hymn2').on("click", function() {
		$('#hymn-info2').toggleClass("active");

		if ($('#hymn-info2').hasClass("active")) {
			$('#hymn-info1').fadeOutSlideUp();
			$('#hymn-info1').removeClass("active");

			$('#hymn-info2').fadeInSlideDown();


			$('#hymn-info3').fadeOutSlideUp();
			$('#hymn-info3').removeClass("active");
		} else {
			$('#hymn-info2').fadeOutSlideUp();
		}
	});


	$('.list-hymn3').on("click", function() {
		$('#hymn-info3').toggleClass("active");

		if ($('#hymn-info3').hasClass("active")) {
			$('#hymn-info1').fadeOutSlideUp();
			$('#hymn-info1').removeClass("active");
			$('#hymn-info2').fadeOutSlideUp();
			$('#hymn-info2').removeClass("active");

			$('#hymn-info3').fadeInSlideDown();

		} else {
			$('#hymn-info3').fadeOutSlideUp();
		}
	});


	$.fn.fadeInSlideDown = function() {
		this.stop(true).fadeIn({
			duration: 1000,
			queue: false
		}).css('display', 'none').slideDown(1000);
	};


	$.fn.fadeOutSlideUp = function() {
		this.stop(true).fadeOut({
			duration: 1000,
			queue: false
		}).slideUp(1000);
	};


	function selectHymn(text) {
		alert("hello");
	}

	function unselectHymn() {
		$('.active').removeClass('active');
		$('#hymn-info').fadeOut("fast");
	}

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