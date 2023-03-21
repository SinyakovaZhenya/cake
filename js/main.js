const filterItem = document.querySelectorAll('.card');

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 10,
	setWrapperSize: true,

	// Navigation arrows
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
});


document.querySelector('.swiper-wrapper').addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') return false;

	let filterClass = event.target.dataset['filter'];
	
	filterItem.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'catalog') {
			elem.classList.add('hide');
		}
	})
})


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burger").addEventListener("click", function() {
		document.querySelector(".nav-project").classList.toggle("open")
	})
})





























