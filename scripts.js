const toggleBtn = document.querySelector('.toggle');
const navList = document.querySelector('ul');

toggleBtn.addEventListener('click', () => {
	navList.classList.toggle('active')
})

const navLinks = document.querySelectorAll('nav li a')
console.log(navLinks)

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		if (navList.classList.contains('active')) {
			navList.classList.remove('active')
		}
	})
})

window.addEventListener('resize', () => {
	if (document.body.clientWidth >= 768 && navList.classList.contains('active')) {
		navList.classList.remove('active')
		console.log(123)
	}
})
