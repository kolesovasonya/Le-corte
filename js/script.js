$(document).ready(function() {
	//Меню бургер
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.content').click(function(event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').toggleClass('lock');
	});
});


//Плавный переход до блока
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}