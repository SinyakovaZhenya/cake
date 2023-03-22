const filterСard = document.querySelectorAll('.card');

const swiper = new Swiper('.swiper', {
	
	direction: 'horizontal',
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 10,
	setWrapperSize: true,

	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
});


document.querySelector('.swiper-wrapper').addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') return false;

	let filterClass = event.target.dataset['filter'];
	console.log(filterClass);
	
	filterСard.forEach(elem => {
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





























