let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let title = document.getElementById('title');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	bg.style.top = value * 0.5 + 'px';
	moon.style.left = -value * 0.5 + 'px';
	mountain.style.top = -value * 0.15 + 'px';
	road.style.top = value * 0.15 + 'px';
	title.style.top = value * 1 + 'px';
});
