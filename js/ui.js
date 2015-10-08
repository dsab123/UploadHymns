$(document).ready(function() {
	// this is gonne be the most complicated function...
	// if hymn1 clicked, do a fade in from top
	$('.list-hymn1').on("click", function() {

		$('#hymn-info1').toggleClass("active");

		if ($('#hymn-info1').hasClass("active")) {
			$('#hymn-info1').fadeIn("fast");
			$('#hymn-info2').fadeOut("fast");
			$('#hymn-info2').removeClass("active");
			$('#hymn-info3').fadeOut("fast");
			$('#hymn-info3').removeClass("active");
		} else {
			$('#hymn-info1').fadeOut("fast");
		}


	});


	$('.list-hymn3').on("click", function() {
		alert("hello");
	});

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