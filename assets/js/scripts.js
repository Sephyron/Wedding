var a = $("#mainNav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
	   $('#mainNav').css({"background":"#EDECDA"});
	   $('.page-scroll').css({"color":"black"});
    } else {
	   $('#mainNav').css({"background":"transparent"});
	   $('.page-scroll').css({"color":"gray"});
    }
});

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });

  $(window).scroll(function(e){
	parallax();
  });

  function parallax(){
	var scrolled = $(window).scrollTop();
	var page2 = $('#aboutUs').offset().top;
	$('#SF1').css({transform:"translate3d(1200px,"+(scrolled*0.2)+'px,0)'});
	$('#SF2').css({transform:"translate3d(-335px,"+(scrolled*0.5)+'px,0)'});
	$('#SF3').css({transform:"translate3d(-335px,"+(scrolled*0.2)+'px,0)'});
	$('#SF4').css({transform:"translate3d(1200px,"+(scrolled*0.2)+'px,0)'});
	$('#SF5').css({transform:"translate3d(-350px,"+(scrolled*0.3)+'px,0)'});
  };