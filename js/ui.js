$(document).ready(function() {
	// this is gonne be the most complicated function...
	// if hymn1 clicked, do a fade in from top
	$('.list-hymn1').on("click", function() {
		$('#hymn-info1').toggleClass("active");

		if ($('#hymn-info1').hasClass("active")) {

			$('#hymn-info1').fadeInSlideDown();

			$(".row-1").siblings().children("div[id^='hymn-info']").removeClass("active").fadeOutSlideUp();
		} else {
			$('#hymn-info1').fadeOutSlideUp();
		}
	});


	$('.list-hymn2').on("click", function() {
		$('#hymn-info2').toggleClass("active");

		if ($('#hymn-info2').hasClass("active")) {
			$('#hymn-info2').fadeInSlideDown();

			$(".row-2").siblings().children("div[id^='hymn-info']").removeClass("active").fadeOutSlideUp();
		} else {
			$('#hymn-info2').fadeOutSlideUp();
		}
	});


	$('.list-hymn3').on("click", function() {
		$('#hymn-info3').toggleClass("active");

		if ($('#hymn-info3').hasClass("active")) {
			$('#hymn-info3').fadeInSlideDown();

			$(".row-3").siblings().children("div[id^='hymn-info']").removeClass("active").fadeOutSlideUp();
		} else {
			$('#hymn-info3').fadeOutSlideUp();
		}
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
