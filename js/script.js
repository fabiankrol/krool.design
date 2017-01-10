 $(document).ready(function(){

// 1. SCROLL FUNCTIONS
$(window).scroll(function(){
	//Check to see if the window is top if not then display button
	if ($(this).scrollTop() > 100) {
		$('.scrollToTop').fadeIn();
	} else {
		$('.scrollToTop').fadeOut();
	}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
// END SCROLL FUNCTIONS

// 2. PHOTO MODAL TOGGLE + TOOLTIP
$(".thumbnail").find("a").on("click", function(){
	if($(window).width() <= 768) { return false; }

	$('.modal').modal("show");
	// var $image = $(this).next().clone().removeClass("hidden");
	var $image = $(this).find('img').clone();
	$(".modal-body").html("");
	$(".modal-body").append($image.addClass("img-big"));

});
$('[data-toggle="tooltip"]').tooltip();
// END PHOTO TOGGLE + TOOLTIP

// 3. SMOOTH SCROLLING
$('a.anchor').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		|| location.hostname == this.hostname) {
		
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - $(".navbar-header").height()
			}, 1000);
			return false;
		}
	}
});	
// END SMOOTH SCROLLING

// 4.NAVBAR CLASS ACTIVE	
$(".nav a").on("click", function(){
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});
// END NAVBAR CLASS ACTIVE


// 5.
$(window).on('resize load scroll', function(){
	var $win = $(this);
	var $myNav = $('#my-nav');

	if ($win.width() < 768) { 
		$myNav.addClass('navbar-default');
	} else {
		if ($win.scrollTop() >= 200 ) {
			$myNav.addClass("navbar-default");
			$myNav.removeClass("navbar-transparent");
		} 
		else {
			$myNav.addClass("navbar-transparent");
			$myNav.removeClass("navbar-default");
		}
	}
});

$(".nav a").on("click", function(){
	if ($(window).width() < 768) { 
		$(".navbar-toggle").click();
	}
});
});
