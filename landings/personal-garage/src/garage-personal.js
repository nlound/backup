function toggleNavBar() {

  $("#nav-container").addClass("nav-bar-scroll");
  $("#navbarSupportedContent .nav-hidden").addClass("nav-hidden-display");

  if ($("#toggler").attr("aria-expanded") == "false") {
    $("body").addClass("no-scroll"); // congelo sroll
  } else {
    $("body").removeClass("no-scroll"); // descongelo sroll
    if ($(window).scrollTop() < 650) {
      $("#nav-container").removeClass("nav-bar-scroll");
    }
  }
}

function collapseNavBar(id) {
  $('html, body').animate({
    scrollTop: $(id).eq(0).offset().top
  }, 300);
  $("#navbarSupportedContent").collapse('hide');
  $("body").removeClass("no-scroll"); // descongelo sroll
}


$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 650) {
      $("#nav-container").addClass("nav-bar-scroll");
      $("#navbarSupportedContent .nav-hidden").addClass("nav-hidden-display");

    } else {
      $("#nav-container").removeClass("nav-bar-scroll");
      $("#navbarSupportedContent .nav-hidden").removeClass("nav-hidden-display");
    }
  });

  $(".navbar-toggler").click(function (ev) {
    ev.preventDefault();
    toggleNavBar();
  });

  $('#btn-b').eq(0).click(function (ev) {
    ev.preventDefault();
    collapseNavBar("#somos");
  });
  $('#nav-somos').eq(0).click(function (ev) {
    ev.preventDefault();
    collapseNavBar("#somos");
  });
  $('#nav-beneficios').eq(0).click(function (ev) {
    ev.preventDefault();
    collapseNavBar("#beneficios");
  });
  $('#nav-proyecto').eq(0).click(function (ev) {
    ev.preventDefault();
    collapseNavBar("#proyecto");
  });
  $('#nav-proceso').eq(0).click(function (ev) {
    ev.preventDefault();
    collapseNavBar("#proceso");
  });
  $('#nav-faqs').eq(0).click(function (ev) {
    ev.preventDefault();
    collapseNavBar("#faqs");
  });


  /*
  if (!device.desktop()) {
    $("#btn-a").sticky({
      topSpacing: 10,
      zIndex: 300
    });
  }

  */
  if ( !device.desktop() ) {
    $("#main-buttons").addClass("sicky-button");
  }




});