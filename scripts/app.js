// The task:

// Write a series of JS instructions to create a structure as the "Flickrtatoes" app.

// $(document).ready(function() {
// 	var apiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json"; // My API request
// 	$.get(apiUrl, function(data) {
// 	    $('body').html("<h1>It works!</h1>");
// 	    var newDiv = $('<div></div');
// 	    newDiv.attr('class', 'first');
// 	    newDiv.appendTo(body);
// 	})
// })


(function() {
  var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  $.getJSON(flickerAPI, {
    tags: 'potato',
    format: 'json'
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( '<img>' ).attr( 'src', item.media.m ).appendTo( '#potato' );
        // $('<p>').attr(item.title).appendTo('#potato');
        $('<a>').attr('src', item.link).appendTo('#potato');
        if ( i === 19 ) {
          return false;
        }
      });
    });
})(); // his is example from http://api.jquery.com/jquery.getjson/ I try to add another elements from that place
// like "title" or "url", but with no success



// 1. <h1>Flickrtatoes sketch</h1>

// 2. horizontal line

// 3. Picture

// 4. Title

// 5. Post author

// 6. Date 

// 7. View on Flickr => link to Flikcr page

// 8. hotizontal line

// 9. Copyright Magdalena Jadach => link to magdalenajadach.github.io 
// 10. Icons Font Awesome => link to Fonts Awesome