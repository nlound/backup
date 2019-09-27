

var objetosSlides = {
    tag : $('h1')
};

var emociones = $(".emociones"),
    logo = $("#logo"),
    slidesArray = $(".uno,.dos"),
    video = $(".video"),
    generatedForce = $("#force svg");

var header, slides;

var player = videojs("video-bafici", { "controls": false, "autoplay": false, "preload": "auto", "loop":false },function(){ });

function bafici() {

    header = new TimelineMax({paused:true});

        header.from(logo, .95, {css:{x:-250,y:150, z:0.01, zoom: 1.5},ease:Quad.easeInOut});
        header.from(objetosSlides.tag, 1.75, {css:{opacity:0, y:220, z:0.01},ease:Quad.easeInOut});

        header.staggerFrom(emociones, 0.8, {css:{opacity:0}}, 0.03, "emociones");
        header.staggerFrom(emociones, 0.8, {rotationY:"90deg", transformOrigin: "50% 50% -80", ease:Quad.easeInOut}, 0.1, "emociones");

    slides = new TimelineMax();

        slides.to(logo, 2.5, {css:{x:-250,y:50, z:0.01},ease:Quad.easeInOut}, 2.5);
        slides.staggerFrom(slidesArray, 0.8, {css:{opacity:0,y:-20, z:0.01}}, 3, "emociones");
        slides.staggerTo(slidesArray, 0.8, {css:{opacity:1},delay:5,onComplete:triggerVideo}, .5, "emociones");
        slides.from(video, .8, {css:{alpha:0},delay:11,ease:Elastic.easeInOut}, .5);

    videoTL = new TimelineMax({paused:true});

        videoTL.to(video, 2.5, {css:{alpha:0},ease:Elastic.easeInOut}, .5);

    mostraForceTL = new TimelineMax({paused:true});

        mostraForceTL.to(force, 2.5, {css:{alpha:0},ease:Elastic.easeInOut}, .5);

	function triggerVideo() {
	    console.log("Acá empieza el video.");
	    player.play();
	    // Borro el demo de force layout para poder volverlo a correr.
	    $('#force-demo svg').remove();
	};
	
	function videoEnd(){
	    console.log("Acá termina el video.");
	    slides.restart();
	    runForceDemo();
	    console.log("Reinicio.");
	}

    player.on("ended", videoEnd);
	runForceDemo();
        
}

bafici();

function baficiActivo() {
    // Detengo el video si esta reproduciendose.
    if (!player.paused()) {
        player.pause();
    }
    // Detengo la animación de los slides en el momento que esté y la vuelvo al frame 0.
    slides.seek(0);
    slides.stop();
    // Muevo el video del canvas.
    videoTL.play();
    // Muevo el logo a la posición original y traigo la lista de "emociones".
    header.play();
    console.log("Corro generateForce.");
}j


function baficiPasivo() {
    console.log("Sali de la app");
    header.reverse();
    bafici();
}