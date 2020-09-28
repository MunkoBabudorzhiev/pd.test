$(document).ready(function () {

	$('.dropdown').on('mouseover', function () {
		$(this).children('.nav__link').addClass('active');
		$(this).children('.dropdown__block').addClass('active')
	})
	.on('mouseout', function () {
		$(this).children('.nav__link').removeClass('active');
		$(this).children('.dropdown__block').removeClass('active')
	});

	var mySwiper = new Swiper('.mission .swiper-container', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.mission .swiper-pagination',
		},
	})
});


