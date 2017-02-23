var top_menu_height = 0;
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

            // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize';
        document.body.appendChild(script);

        top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 100 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#templatemo-top');
        });

        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
// added
 /*           $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
*/
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });
		/*
		var dt = window.atob('IHwgRGVzaWduOiA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tL3RtLTM5NS11cmJhbmljIiB0YXJnZXQ9Il9wYXJlbnQiPlVyYmFuaWM8L2E+'); // decode the string
		var div = document.getElementById('footer-line');
		div.innerHTML = div.innerHTML + dt;
		*/
        // to stick navbar on top
        $('.templatemo-top-menu ').stickUp();

        // gallery category
        $('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

function initialize() {
    var mapOptions = {
      zoom: 20,
      center: new google.maps.LatLng(18.529522, 73.856715)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

/*function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(18.5277437,73.8533007)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
	var myLatlng = new google.maps.LatLng(18.5306,73.8568);

	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'ACM COEP'
  });

}*/

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}
