/**
 * TBNY - Animation content
 */
function TBNYstartAnimation(callback) {

  var tlLogo = new TimelineMax({onComplete: callback});
  $('#text_1').removeClass('alpha-0');

  TweenMax.to(['.skyline', '.icon'], 0.1, { autoAlpha: 0 });
  TweenMax.to('#drawing', 3, { delay: 1.8, x: '-1000', ease: Power1.easeInOut });

  tlLogo
    .from('#red', 1, { x: '-200', autoAlpha: 0 })
    .staggerFrom('.st_white', 0.25, { autoAlpha: 0 }, 0.25)
    .from('.waves', 3, { drawSVG: '0%', ease: Power1.easeInOut }, '-=0.2')
    .from('#text_1', 1, { x: 2000, ease: Power1.easeOut }, '-=2')
    .to('.waves', 2, { css: { 'stroke-width': 2 } }, '-=2');
}

/**
 * Initilize the Skyline Animation
 * @param {string} city 
 */
function TBNYanimateSkyline(city) {

  switch (city) {
    case "Queens":
      $('#queens-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    case "Brooklyn":
      //show Brooklyn
      $('#brooklyn-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    case "Manhattan":
      $('#default-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

      case "Staten Island":
      $('#default-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    case "The Bronx":
      $('#default-skyline').removeClass('none');
      $('#tooltip-borough').removeClass('none');
      break;

    default:
      //show default city
      $('#default-skyline').removeClass('none');
      $('#tooltip-default').removeClass('none');
  }

  $('#text_2').removeClass('alpha-0');

  TweenMax.to(['.skyline', '.icon'], 0.1, {  autoAlpha: 1 });
  TweenMax.to('#drawing', 3, { x: '-1300', ease: Power1.easeInOut });

  var tlSkyline = new TimelineMax({
    onComplete: TBNYhideAnimation
  });

  tlSkyline
    .to('#text_1', 2, { x: '-1000' })
    .from('#text_2', 1, { x: 2000, ease: Power1.easeOut }, '-=2')
    .from('.skyline', 5, { drawSVG: '0%', ease: Power1.easeInOut }, 0)
    .from('.icon', 1, { drawSVG: '0%' }, '-=2');
  }

/**
 * Hides Animation Frames
 */
function TBNYhideAnimation() {
  var tl = new TimelineMax({
    onComplete: TBNYanimateshowPlaylist
  });

  tl.to('#animation', 0.5, { autoAlpha: 0});
}

/**
 * Show Playlist Frames
 */
function TBNYanimateshowPlaylist() {
  $('#animation').addClass('none');
  $('.vzn-tbny').removeClass('alpha-0');
  $('.share-bar').removeClass('none');
  $('#playlist').removeClass('none');
  $('#footer').removeClass('alpha-0');

  var tlPlaylist = new TimelineMax();

  tlPlaylist
    .from(['#playlist', '#footer','.share-bar'], 1, { autoAlpha: 0 });
  }


