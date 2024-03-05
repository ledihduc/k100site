jQuery(document).ready(function($) {
	$('.menu-icons .icons').click(function(event) {
		$(this).toggleClass('show');
		$('#site-navigation,body').toggleClass('show');

	});
});