document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burger").addEventListener("click", function() {
		document.querySelector(".nav-project").classList.toggle("open")
	})
})