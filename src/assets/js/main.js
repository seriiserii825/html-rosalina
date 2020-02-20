$(function () {
	$('.main-menu-mobile__img').on('click', function () {
		$(this).parent('.main-menu-mobile__item').find('.main-menu-mobile-submenu').slideToggle();
	});

	$('#js-sandwitch-wrap').on('click', function () {
		$('#js-main-menu-mobile').slideToggle();

		$(this).toggleClass('sandwitch--active');
		$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
	});
});



