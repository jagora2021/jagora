const hamburgerBtn = document.querySelector('.menu');
const menu = document.querySelector('.menu-links');
const closeBtn = document.querySelector('.menu-close-btn');
const menuLinks = document.querySelectorAll('.menu-links > ul li');
const login = document.querySelector('#login-link');
const loginLinks = document.querySelector('#login-link + ul');
const loginArrow = document.querySelector('#login-link a span');

function rotate() {
	loginIcon.style.rotate = 'rotate(45deg)';
}

function showMenu() {
	menu.style.transform = 'translateY(4rem)';
	closeBtn.style.transform = 'scale(1)';
	hamburgerBtn.style.transform = 'translateY(-100px)';
}

function hideMenu() {
	menu.style.transform = 'translateY(-50vh)';
	hamburgerBtn.style.transform = 'translateY(0)';
	closeBtn.style.transform = 'scale(0)';
}

hamburgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);
menuLinks.forEach(menuLink => {
	menuLink.addEventListener('click', hideMenu);
});

login.addEventListener('click', () => {
	if (loginArrow.style.transform == 'rotate(270deg)') {
		loginLinks.style.transform = 'translateX(300px)';
		loginArrow.style.transform = 'rotate(90deg)';
	} else {
		loginLinks.style.transform = 'translateY(0)';
		loginArrow.style.transform = 'rotate(270deg)';
	}
});
