// The task:

// Write a series of JS instructions to create a structure as the "Flickrtatoes" app.

var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

$.getJSON(flickerAPI, {
  tags: 'potato',
  format: 'json'
})

.done(function( data ) {
  $.each(data.items, function(i,item){
    $("<img />").attr("src", item.media.m).appendTo(".potato");
    })
});
  // console.log(data);
  // data.items.length;
  // for (var i = 0; i < data.items.length; i++) {
  //   var currentItem = data.items[i];
  // $('<img />').attr('src', item.media.m).appendTo(".potato");
  //   }});

//     var body = $('body'); 
//     śvar newDiv = $('<div></div');

// //2. I have selected <div> and added class to it:
// newDiv.attr('class', 'personal-info-container');


// //4. Added h1 element + added some text <p> to it:
// var newHeader = $('<h1></h1>');
// newHeader.appendTo(newDiv);
// newHeader.text('I am Magda');

    //div, img




 // function(data) {
 //    $.each(data.items, function(i,item){
 //      $('<img />'').attr('src', item.media.m).appendTo('#potato');
 //      if ( i == 3 ) return false;
 //    });


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