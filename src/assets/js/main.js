$(function () {
	$('.main-menu-mobile__img').on('click', function () {
		$(this).parent('.main-menu-mobile__item').find('.main-menu-mobile-submenu').slideToggle();
	});

	$('.main-menu__item').hover(function () {
		$(this).find('.sub-menu').fadeIn();
	}, function () {
		$(this).find('.sub-menu').fadeOut();
	});

	$('#js-sandwitch-wrap').on('click', function () {
		$('#js-main-menu-mobile').slideToggle();

		$(this).toggleClass('sandwitch--active');
		$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
	});

	$('#js-eventi-news-block__content').append('<iframe id="iframe" src="https://web4.deskline.net/rosolina/it/event/list" ;="" scrolling="no" width="100%" height="2140" style=" overflow-x:scroll;"></iframe>');

});

// $(window).on('load', function () {
// 	$('#js-eventi-news-block__content').appendChild('<iframe id="iframe" src="https://web4.deskline.net/rosolina/it/event/list" ;="" scrolling="no" width="100%" height="2140" style=" overflow-x:scroll;"></iframe>');
// });




