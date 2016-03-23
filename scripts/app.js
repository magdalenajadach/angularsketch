// The task:

// Write a series of JS instructions to create a structure as the "Flickrtatoes" app.

$(document).ready(function() {
var apiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json"; // My API request
$.get(apiUrl, function(data) {
    $('body').html("<h1>It works!</h1>");

})
})
// 	var body = $('body');	
// 	var newDiv = $('<div></div');

// 	var newHeader = $('<h1>'Flickrtatoes'</h1>');
// 	newHeader.appendTo(newDiv);



// 	newDiv.appendTo(body);

// })

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