$(function() {
  $.scrollify({
    section:"section",
    scrollbars:false,

    after:function(i,panels) { // all the animations

      var ref = panels[i].attr("data-section-name");


      switch (ref){
        case "home":
          $(".animated").removeClass("visible");
          $("header").removeClass("header_visible");
          $("article").removeClass("article_visible");
          $(".iphoneWrapper").removeClass("iphone_moved");
          $(".mobile-description").removeClass("show");
          $("#showcase-links").find('.show').removeClass('show'); 
          $(".iphoneWrapper").removeClass("iphone_moved");
          $(".option-links").removeClass('selected');
          break;
        case "what":
          $("#header_what").addClass("header_visible");
          $("#article_what").addClass("article_visible");
          break;
        case "where":
          $("#header_where").addClass("header_visible");
          $("#article_where").addClass("article_visible");
          break;
        case "when":
          $("#header_when").addClass("header_visible");
          $("#article_when").addClass("article_visible");
          break;
        case "how":
          $("#header_how").addClass("header_visible");
          $("#article_how").addClass("article_visible");
          break;
        case "final_words":
          $(".final-words").addClass("visible");
          break;
        }

       $(".navigation-buttons").addClass("navigation-buttons-visible");


    },
    before:function(i,panels) { // navigation handling

      var ref = panels[i].attr("data-section-name");

      if (ref === "home"){
        $(".shadow").removeClass("scrolled");
      }else{
        $(".shadow").addClass("scrolled");
      }

      $(".navigation .active").removeClass("active");
       $(".navigation-buttons").removeClass("navigation-buttons-visible");

      $(".navigation").find("a[href=\"#" + ref + "\"]").addClass("active");

      // checks the color of the bar
      if ( $.scrollify.current().hasClass("black") ){
        $(".logo_color").addClass("logo_hide");
        $("nav").addClass("black");
      }else{
        $(".logo_color").removeClass("logo_hide");
        $("nav").removeClass("black");
      }

    },

    afterResize:function() {
      $.scrollify.instantMove( $(".navigation li a.active").attr("href") );
    },

    afterRender:function() { // navigation listeners

      $(".navigation-buttons").addClass("navigation-buttons-visible");

      $(".navigation a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });
      $(".next").on("click",function() {
        $.scrollify.next();
      });
      $(".home").on("click",function() {
        $.scrollify.move("#home");
      });
    }
  });
});

//modal management
$('.ls-modal').on('click', function(e){
  e.preventDefault(); // 'a' tag
  $("#iframe-modal").attr('src' , 'about:blank' ) ;
  $("#iframe-modal").attr('src' , $(this).attr('href') ) ;
  $('#myModal').modal('show');
});


//showcase management
$('.option-links').on('click', function(){
  var selected_id = "#" + $(this).data('selection'); 
  if ( !$(this).hasClass('selected') ){
    $(".selected").removeClass('selected');
    $(this).addClass('selected');
    $("#showcase-links").find('.show').removeClass('show'); 
    $(selected_id).addClass('show');

  }

  if ( $(this).data('selection') !== "desktop-links"){
    $(".iphoneWrapper").addClass("iphone_moved");
  }else{
    $(".iphoneWrapper").removeClass("iphone_moved");
    $(".iphoneWrapper iframe").attr('src' , 'about:blank' ) ;
  }
});

$('#mobile-links a').on('click', function(){
  var selected_link = "." + $(this).data('selection-mobile'); 
  $(".mobile-description").removeClass("show");
  $(selected_link).addClass("show");
});

$('#social-links a').on('click', function(){
  var selected_link = "." + $(this).data('selection-social'); 
  $(".social-description").removeClass("show");
  $(selected_link).addClass("show");
});


