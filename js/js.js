"use strict"
$(document).ready(function(){
    setTimeout(function(){
        window.scrollTo(0, 0);
    }, 1);
});
function buyTicket (){
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
};
$('.js-close-campaign1').click(function() { // закрытие этой вкладки при нажатии на...
	$('.js-overlay-campaign').fadeOut();
});

// закрыть все по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign').fadeOut();
	}
});

function sendInAss (){
	$('.js-overlay-campaign3').fadeIn();
	$('.js-overlay-campaign3').addClass('disabled');
};
$('.js-close-campaign3').click(function() { // закрытие этой вкладки при нажатии на...
	$('.js-overlay-campaign3').fadeOut();
});

// закрыть все по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign3');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign3').fadeOut();
	}
});


function kissMyAss (){
	$('.js-overlay-campaign2').fadeIn();
	$('.js-overlay-campaign2').addClass('disabled');
};
$('.js-close-campaign2').click(function() { // закрытие этой вкладки при нажатии на...
	$('.js-overlay-campaign').fadeOut();
});

// закрыть все по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign2');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign2').fadeOut();
	}
});


function success (){
	$('.js-overlay-campaign1').fadeIn();
	$('.js-overlay-campaign1').addClass('disabled');
};
$('.js-close-campaign').click(function() {
	$('.js-overlay-campaign1').fadeOut();
});
// закрыть все по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign1');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign1').fadeOut();
	}
});


