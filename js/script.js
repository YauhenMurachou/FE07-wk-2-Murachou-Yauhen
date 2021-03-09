$(document) .ready (function(){
	$('.slider__wrapper') .slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		speed: 1000,
		infinite: false, 
		// appendDots: $('.slider__dots')
			});
			// $('.slider__wrapper').on ('beforechange', function (event, slick, currentSlide, nextSlide){
			// 	console.log(nextSlide);
			// });
})