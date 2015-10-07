$(document).ready(function() {

	$('#dropdown-list').on('click', '.week', function() {	
			unselectHymn();
			retrieveWeek($(this).text());
	});
	

	$('[class^="list"]').on("click", function() {
		var whichActive = $(this).parent().find(".active");

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
	
});