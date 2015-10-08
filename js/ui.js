$(document).ready(function() {
	$('li[class^="list"]').on("click", function() {
		var whichActive = $(this).parent().find(".active");
		
		whichActive.removeClass("active");
		$(this).addClass("active");
		
		if ($(this).is(whichActive)) {
			unselectHymn();
		} else {
			$('#hymn-info').fadeIn("fast");
		}
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