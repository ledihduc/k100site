jQuery(document).ready(function($) {
	$('.menu-icons .icons').click(function(event) {
		$(this).toggleClass('show');
		$('#site-navigation,body').toggleClass('show');
	});
	$('#site-navigation ul.menu li a').click(function(event) {
		$('#site-navigation,body,#masthead .menu-icons .icons').toggleClass('show');
	});



	    var stickyNavTop = jQuery('#masthead').offset().top;
    var top_body = jQuery('body').offset().top;
    var stickyNav = function(){
        var scrollTop = jQuery(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            jQuery('#masthead').addClass('masthead-sticky').removeClass('no-padding');
        } else {
            jQuery('#masthead').removeClass('masthead-sticky').addClass('no-padding');
        }
    };
    stickyNav();
    jQuery(window).scroll(function() {
      stickyNav();
    });

	$( '#site-navigation ul.menu li a[href*=#]:not([href=#])' ).click( function() {
        $(this).addClass( 'active-scroll' );
        if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
            var target = $( this.hash );
            target = target.length ? target : $( '[name=' + this.hash.slice(1) + ']' );
            if ( target.length ) {
                $( 'html, body' ).animate( {
                    scrollTop: target.offset().top -68
                }, 1000 );
                return false;
            }
        }
    } );


});