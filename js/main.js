const filterItem = document.querySelectorAll('.card');
const section = document.querySelector('.section1');
const allItem = document.querySelectorAll('.item');
const arrowIcons = document.querySelectorAll('.icon img');

let isDragging = false;

const handleIcons = () => {
	let scrollVal = Math.round(section.scrollLeft);
	let maxScrollableWidth = section.scrollWidth - section.clientWidth;
	arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
	arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(icon => {
	icon.addEventListener("click", () => {
		section.scrollLeft += icon.id === "left" ? -300 : 300;
		
		handleIcons();
	})
})

allItem.forEach(item => {
	item.addEventListener("click", () => {
		section.querySelector(".active").classList.remove("active");
		item.classList.add("active");
	})
})

const dragging = (e) => {
	if(!isDragging) return;
	section.classList.add("dragging");
	section.scrollLeft -= e.movementX;
	handleIcons();
}

const dragStop = () => {
	isDragging = false;
	section.classList.remove("dragging");
}

section.addEventListener("mousedown", () => isDragging = true);
section.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

document.querySelector('.section1').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['filter'];
	
	filterItem.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'catalog') {
			elem.classList.add('hide');
		}
	})
})

























