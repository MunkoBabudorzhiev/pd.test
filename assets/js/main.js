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
});


