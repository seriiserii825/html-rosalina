$(function () {
	$('.main-menu-mobile__img').on('click', function () {
		$(this).parent('.main-menu-mobile__item').find('.main-menu-mobile-submenu').slideToggle();
	});

	let flag = false;

	$('.main-menu__item').hover(function () {
		if(flag === false){
			$(this).find('.sub-menu').fadeIn();
			flag = true;

			setTimeout(function () {
				flag = false;
			}, 400);
		}

	}, function () {
		$(this).find('.sub-menu').fadeOut();
	});

	$('#js-sandwitch-wrap').on('click', function () {
		$('#js-main-menu-mobile').slideToggle();

		$(this).toggleClass('sandwitch--active');
		$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
	});

	$('#js-eventi-news-block__content').append('<iframe id="iframe" src="https://web4.deskline.net/rosolina/it/event/list" ;="" scrolling="no" width="100%" height="2140" style=" overflow-x:scroll;"></iframe>');


	let mail = function () {

		if ($('#js-form').length > 0) {

			$('#js-form').validate({
				rules: {
					email: {
						required: true,
						email: true
					},
					name: {
						required: true,
					},
					oggetto: {
						required: true,
					},
					messaggio: {
						required: true,
					},
					check: {
						required: true
					}
				},
				messages: {
					email: {
						required: "Il campo è obbligatorio",
						email: "Inserisci il campo email"
					},
					name: {
						required: "Il campo è obbligatorio",
					},
					oggetto: {
						required: "Il campo è obbligatorio",
					},
					messaggio: {
						required: "Il campo è obbligatorio",
					},
					check: {
						required: "Il campo è obbligatorio"
					}
				},
			});
		}
	};
	mail();

});



