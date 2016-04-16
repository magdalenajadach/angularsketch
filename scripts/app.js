// Write a series of JS instructions to create a structure as the "Flickrtatoes" app.
// var newTitle = $('<h1></h1>');
// newTitle.text('jQuery sketch');
// newTitle.appendTo('#potato'); //Why my title is always at the bottom?

var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

$.getJSON(flickerAPI, {
  tags: 'potato',
  format: 'json'
})
.done(function( data ) {
  console.log(data);
    data.items.length;
    for (var i = 0; i < data.items.length; i++) {
      var currentItem = data.items[i];
      var newLi = $('<li></li>').attr('class', 'list-group-item');
      var newTitle = $('<h2></h2>');
      newTitle.text(currentItem.title).appendTo(newLi);
      var newLine = $('<hr>');
      newLine.appendTo(newLi);
      $('<img />').attr('src', currentItem.media.m).appendTo(newLi);
      var authorParagraph = $('<p></p>');
      authorParagraph.text(currentItem.author);
      authorParagraph.appendTo(newLi);
      var dateParagraph = $('<p></p>');
      dateParagraph.text(currentItem.date_taken);
      dateParagraph.appendTo(newLi);
      var newLink = $('<a></a>');
      newLink.attr('href', currentItem.link);
      newLink.text('Click me to check out potato at Flickr!');
      newLink.appendTo(newLi);
      newLi.appendTo('.listView');
      //addClass
    }
});
