$(document).ready(function() {
$('.main_btna, .main_btn').on('click', function() {
  $('.overlay').fadeIn('fast');
  $('.modal').animate(
  {
  	opacity: 'show',
  	top: '+200px'

  }, 5000);

});




$('button.close').on('click', function(){
	$('.overlay').fadeOut('slow');
  $('.modal').hide('slow');
})
 
$("li:contains('расписания туров')").on('click', function() {
  $('.overlay').fadeIn('fast');
  $('.modal').animate(
  {
  	opacity: 'show',
  	top: '+200px'

  }, 5000);

});

});


