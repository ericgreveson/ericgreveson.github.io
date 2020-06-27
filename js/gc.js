// Page onload handler
function gcOnLoad()
{
  // Add event handlers
  gcMakeButton( 'servicesButton', 'services' );
  gcMakeButton( 'contactButton', 'contact' );
  gcMakeButton( 'aboutButton', 'about' );
}

function gcMakeButton( id, page )
{
  $(id).observe( 'mouseover', gcMouseOver );
  $(id).observe( 'mouseout', gcMouseOut );

  // Pre-cache images
  preloadImages( $(id).src );
}

// pre-cache rollover images
function preloadImages( src )
{
  var d = document;
  if ( d.images )
  {
    if ( !d.gcCache ) d.gcCache = new Object();
    var im = new Image();
    im.src = src;
    var imOn = new Image();
    imOn.src = src.replace( ".png", "_on.png" );
    d.gcCache[ im.src ] = im;
    d.gcCache[ im.src + " on" ] = imOn;
  }
}

function gcMouseOver( event )
{
  var im = event.element();
  var isOn = im.src.search( "_on.png" ) != -1;
  if ( !isOn )
  {
    im.src = im.src.replace( ".png", "_on.png" );
  }
}

function gcMouseOut( event )
{
  var im = event.element();
  var isOn = im.src.search( "_on.png" ) != -1;
  if ( isOn )
  {
    im.src = im.src.replace( "_on.png", ".png" );
  }
}
