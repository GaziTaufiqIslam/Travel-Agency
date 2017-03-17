
$(document).ready(function() {
  //Nav hide and show on scroll
// Hide .navbar on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = $('.header').height();
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
    var wScroll= $(this).scrollTop();

if(wScroll> ($("#extra").offset().top) -($(window).height()))
{
  $("#extra").css({"background-position":"center " +(-wScroll/5)+"px"});
}

if(wScroll> ($(".up").offset().top) -($(window).height()))
{
  $(".up").css({"transform":"translateY(" +(-wScroll/10)+"px)"});

}


if(wScroll> ($(".down").offset().top) -($(window).height()))
{
  $(".down").css({"transform":"translateY(" +(wScroll/20)+"px)"});

}

if(wScroll> ($(".up2").offset().top) -($(window).height()))
{
  $(".up2").css({"transform":"translateY(" +(-wScroll/10)+"px)"});

}


if(wScroll> ($(".down2").offset().top) -($(window).height()))
{
  $(".down2").css({"transform":"translateY(" +(wScroll/20)+"px)"});

}

});


  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);


function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
}
});
