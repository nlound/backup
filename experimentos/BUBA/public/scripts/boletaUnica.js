function createClientInteractions () {

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    FastClick.attach(document.body);

    $(".ribbon").click(function () {
        $('html,body').animate({scrollTop: $('#tutorial').offset().top}, 500);
    });


    $(".continua").click(function () {
        $('html,body').animate({scrollTop: $('#tabla').offset().top}, 500);
    });


    if (!Modernizr.svg) {
      $(".seleccion img").attr("src", "styles/img/intro.png");
    }

    var offset = $('.navbar').height();
    $("#sticky-tabla").stickyTableHeaders({fixedOffset: offset});
}

$(window).on('scroll', function(e){
    
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,

        cambioEn = screen.height,

        header = document.querySelector(".header-gcba"),

        logo = $(".logo").css("background-image");


    if (distanceY > cambioEn * 2) { // pone el stiky
            $("#enviarFlotante").addClass("enviarFlotante");
    } else {
            $("#enviarFlotante").removeClass("enviarFlotante");
    }



    if (distanceY > cambioEn) { // pone el color amarillo de fondo, negro en letras y logo normal
        if ( logo.indexOf("invertido") >= 0) {
            logo = logo.replace("invertido", "normal");
            $(".logo").css("background-image", logo);
            $(".header-gcba").addClass("fondoColor");
            $(".slogan").addClass("sloganNormal");
        }
    } else {
        if ( logo.indexOf("normal") >= 0 ) {
            logo = logo.replace("normal", "invertido");
            $(".logo").css("background-image", logo);
            $(".header-gcba").removeClass("fondoColor");
            $(".slogan").removeClass("sloganNormal");
        }

    }
});

