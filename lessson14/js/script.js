window.addEventListener('DOMContentLoaded', function(){
	let tab = require('../parts/tab.js');
	let slider = require('../parts/slider.js');
	let form = require('../parts/form.js');
	let overlay = require('../parts/overlay.js');
	let timer = require('../parts/timer.js');
	let calc = require('../parts/calc.js');

	tab();
	slider();
	form();
	overlay();
	timer();
	calc();
});