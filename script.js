
// popup

$(document).ready(function(){
$('.image-popup-vertical-fit').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}
});
});





// gallery

$(function() {

  $("#filter li").click(function() {

    var category = $(this).html();

    category = category.toLowerCase();

    $("#filter li").removeClass("active");

    $(this).addClass("active");

    $("#portfolio .outer-l1").fadeOut();

    $("#portfolio .outer-l1").each(function() {

      if ($(this).hasClass(category)) {
        $(this).fadeIn();
      }

    });

  });

});