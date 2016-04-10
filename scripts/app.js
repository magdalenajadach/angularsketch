// The task:

// Write a series of JS instructions to create a structure as the "Flickrtatoes" app.

var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

$.getJSON(flickerAPI, {
  tags: 'potato',
  format: 'json'
})

.done(function( data ) {

  $.each( data.items, function( i, item ) {

    if ( i <= 19 ) {

      $( '<img>' ).attr( 'src', item.media.m ).appendTo( '#potato' );
      // $('<p>').attr(item.title).appendTo('#potato');
      $('<a>').attr('href', item.link).appendTo('#potato');

      return false;
    }
  });
});


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