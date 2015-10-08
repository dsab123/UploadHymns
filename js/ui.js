$(document).ready(function() {
	$('[class^="list"]', '.hymn-cols').on("click", function() {
		var whichActive = $(this).parent().find(".active");

		alert("hello!");
		
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");

		retrieveHymn($(this).first().text());

		if ($(this).is(whichActive)) {
			unselectHymn();
		} else {
			$('#hymn-div').fadeIn("fast");
			$('#hymn-lyrics').fadeIn("fast");
		}
	})	
	
	function unselectHymn() {
		$('.active').removeClass('active');
		$('#hymn-div').fadeOut("fast");
		$('#hymn-lyrics').fadeOut("fast");
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