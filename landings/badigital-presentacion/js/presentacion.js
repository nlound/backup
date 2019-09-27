/*
 * Este archivo contiene:
 * La inicialización a la presentacion de Reveal.js
 * Listeners de cada sección
 *
 *
 * MIT licensed
 */

var posicion = $('#posicion');
var numero = $('#numero');
var leyenda = $("#leyenda");


Reveal.initialize({
    controls: false,
    progress: false,
    history: false,
    center: true,
    width: 1400,
    height: 700,
    theme: 'microdancing', // available themes are in /css/theme
    transition: 'fade', // default/cube/page/concave/zoom/linear/fade/none
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});

Reveal.addEventListener( 'ready', function( event ) {
   //selecciona el DIV donde va el SVG y le inyecta el icono
   
   //$(".labs").html(getIcon("labs"));
   // animaSVG(".labs");

}, false);

Reveal.addEventListener('inicio', function(event) {


    $(".labs").html("");
    var creative = $('#creative-content');
    var tl1 = new TimelineMax();
    tl1.to(creative, 0.4, { opacity: 1 });
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0.4, { opacity: 0 });
}, false);

Reveal.addEventListener('gobierno', function(event) {

    $("#iconoAnimado").html(getIcon("UNO"));
    animaSVG("#iconoAnimado");

    var tl3 = new TimelineMax();

    tl3.to(iconoAnimado, 1.5, {
        scale: .35,
        x: -520,
        y: -210,
        rotationY: 360,
        ease: Expo.easeInOut
    }, 0.5);

    var creative = $('#creative-content');
    var tl1 = new TimelineMax();
    tl1.to(creative, 0.4, { opacity: 0.5 });
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0.4, { opacity: 1.0 });

}, false);

Reveal.addEventListener('gobierno-final', function(event) {
    numero.html("01");
    leyenda.html("Gobierno Abierto");
}, false);


Reveal.addEventListener('previo-internet', function(event) {

    var tl2 = new TimelineMax();
    var tl3 = new TimelineMax();

    tl2.to(posicion, 0.25, { opacity: 0 });
    tl3.to(iconoAnimado, 0, { opacity: 0, scale: 1, x: 0, y: 0, rotationY: 0 });

    $("#iconoAnimado").html(getIcon("DOS"));
    animaSVG("#iconoAnimado");

}, false);

Reveal.addEventListener('internet', function(event) {
    var tl2 = new TimelineMax();
    var tl3 = new TimelineMax();

    tl2.to(posicion, 0, { opacity: 0 });
    numero.html("02");
    leyenda.html("Internet de las cosas");
    tl2.to(posicion, 0.5, { opacity: 1.0 });

    tl3.to(iconoAnimado, 0.25, { opacity: 1 });

    tl3.to(iconoAnimado, 1.5, {
        scale: .35,
        x: -520,
        y: -210,
        rotationY: 360,
        ease: Expo.easeOut
    }, 0.5);

    var tl3 = new TimelineMax();

}, false);

Reveal.addEventListener('internet-final', function(event) {
    numero.html("02");
    leyenda.html("Internet de las cosas");
}, false);

Reveal.addEventListener('previo-datos', function(event) {

    var tl2 = new TimelineMax();
    var tl3 = new TimelineMax();

    tl2.to(posicion, 0.25, { opacity: 0 });
    tl3.to(iconoAnimado, 0, { opacity: 0, scale: 1, x: 0, y: 0, rotationY: 0 });

    $("#iconoAnimado").html(getIcon("TRES"));
    animaSVG("#iconoAnimado");

}, false);



Reveal.addEventListener('datos', function(event) {
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    numero.html("03");
    leyenda.html("Datos en Tiempo Real");
    tl2.to(posicion, 0.5, { opacity: 1 });

    var tl3 = new TimelineMax();

    tl3.to(iconoAnimado, 1.5, {
        scale: .35,
        x: -520,
        y: -210,
        rotationY: 360,
        ease: Expo.easeInOut
    }, 0.5);

}, false);

Reveal.addEventListener('datos-final', function(event) {
    numero.html("03");
    leyenda.html("Datos en Tiempo Real");
}, false);

Reveal.addEventListener('previo-prototipo', function(event) {

    var tl2 = new TimelineMax();
    var tl3 = new TimelineMax();

    tl2.to(posicion, 0.25, { opacity: 0 });
    tl3.to(iconoAnimado, 0, { opacity: 0, scale: 1, x: 0, y: 0, rotationY: 0 });

    $("#iconoAnimado").html(getIcon("CUATRO"));
    animaSVG("#iconoAnimado");

}, false);

Reveal.addEventListener('prototipo', function(event) {
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    numero.html("04");
    leyenda.html("Prototipo Dashboard");
    tl2.to(posicion, 0.5, { opacity: 1 });
    var tl3 = new TimelineMax();

    tl3.to(iconoAnimado, 1.5, {
        scale: .35,
        x: -520,
        y: -210,
        rotationY: 360,
        ease: Expo.easeInOut
    }, 0.5);
}, false);

Reveal.addEventListener('prototipo-final', function(event) {
    var creative = $('#creative-content');
    var tl2 = new TimelineMax();
    tl2.to(creative, 0.4, { opacity: 0.5 });

    var tl2 = new TimelineMax();
    tl2.to(posicion, 0.4, { opacity: 1 });

    numero.html("04");
    leyenda.html("Prototipo Dashboard");
}, false);

Reveal.addEventListener('gracias', function(event) {
    var tl3 = new TimelineMax();
    tl3.to(iconoAnimado, 0, { opacity: 0, scale: 1, x: 0, y: 0, rotationY: 0 });
    var creative = $('#creative-content');
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    var tl1 = new TimelineMax();
    tl1.to(creative, 0.4, { opacity: 1 });
}, false);

Reveal.addEventListener('slidechanged', function(event) {
    // todas las diapos

    var tl = new TimelineMax();
    var contentOpenData;

    for (var i = 0; i < event.currentSlide.children.length ; i++){
        var tag = event.currentSlide.children[i].localName;
        if (tag == "h1"){
            var contentOpenData = $(event.currentSlide.children[i]);

            contentSplit = new SplitText(contentOpenData, {
                type: "words"
            });

            TweenLite.set(contentOpenData, {
                perspective: 700
            });
            tl.staggerFrom(contentSplit.words, .75, {
                autoAlpha: 0,
                x: 100,
                rotationY: -100,
                transformOrigin: "50% top -250",
                ease: Power1.easeInOut
            }, 0.2);
        }
        if (tag == "ul"){
            for (var p = 0; p < event.currentSlide.children[i].children.length ; p++){

                var contentOpenData = $(event.currentSlide.children[i].children[p]);

                tl.staggerFrom(contentOpenData, 0.75, {
                    autoAlpha: 0,
                    x: (Math.random() * 200) + 500,
                    rotationZ: 45,
                    rotationX: 180/2,
                    ease: Power1.easeInOut
                }, -1.05);

            }
        }
    }
}, false);



/*
    tl.staggerFrom(contentOpenData, 0.75, {
        autoAlpha: 0,
        rotationX: -100,
        transformOrigin: "50% top -250",
        ease: Power1.easeInOut
    }, 0.05);

*/
