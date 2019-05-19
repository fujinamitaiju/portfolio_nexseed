$(document).ready(function(){
	$('.hamburger').on('click', function(){
    $(this).toggleClass("active");
  	$('#navigation').fadeToggle(600);
  	
    $('.navigation_item').on('click', function(){
    $('#navigation').hide();
    $('.hamburger').removeClass('active');
  });
})

$('.slick').slick({
	prevArrow:'<div class="prev"><</div>',
 　 nextArrow:'<div class="next">></div>',
 	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 3,
	margin: 5,
	speed: 2000,
	responsive: [
	    {	
      breakpoint: 768,
      settings: {
      	accessibility: true,
        
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }]

	
});

});
