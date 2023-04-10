const mobileNavBtn = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavBtn.addEventListener('click', function() {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('.no-scroll');
})



const filterСard = document.querySelectorAll('.card');

// const swiper = new Swiper('.swiper', {
	
// 	direction: 'horizontal',
// 	slidesPerView: 3,
// 	centeredSlides: true,
// 	spaceBetween: 10,
// 	setWrapperSize: true,

// 	navigation: {
// 		nextEl: '.button-next',
// 		prevEl: '.button-prev',
// 	},
// });


document.querySelector('.swiper-wrapper').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['filter'];
	console.log(filterClass);
	
	filterСard.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'catalog') {
			elem.classList.add('hide');
		}
	})
})

































