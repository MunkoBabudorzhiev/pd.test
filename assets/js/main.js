$(document).ready(function () {
	$('.nav__list').on('click', '.nav__item:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active').closest('.usefull__block').find('.block__content').removeClass('active').eq($(this).index()).addClass('active');
	});
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
	var mySwiper = new Swiper('.feedback .swiper-container', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.feedback .swiper-pagination',
		},
	})
	var mySwiper = new Swiper('.clients .swiper-container', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 6,
		pagination: {
			el: '.clients .swiper-pagination',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			// when window width is >= 480px
			576: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			1199: {
				slidesPerView: 6,
				spaceBetween: 30
			}
		}
	})
});


