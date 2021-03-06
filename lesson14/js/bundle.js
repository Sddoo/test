(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/overlay.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function calc(){
	let people = document.getElementsByClassName('counter-block-input')[0],
		days = document.getElementsByClassName('counter-block-input')[1],
		options = document.getElementsByTagName('option'),
		currentOption = options[0],
		total = document.getElementById('total'),
		place = document.getElementById('select');

	total.innerHTML = '0';

	function calc(k){
		let money = 0;
		if (people.value > 0 && days.value > 0 && parseInt(people.value)==people.value && parseInt(days.value)==days.value){
			for (let i = 0; i < days.value; i++){
				money += people.value*1000;
			}
		money *= k;
		total.innerHTML = money;
		}
		else if((people.value < 0 || days.value < 0 || parseInt(people.value) != people.value || parseInt(days.value) != days.value) && people.value != '' && days.value != ''){
			total.innerHTML = '╨Э╤Г╨╢╨╜╤Л ╤Ж╨╡╨╗╤Л╨╡ ╨┐╨╛╨╗╨╛╨╢╨╕╤В╨╡╨╗╤М╨╜╤Л╨╡ ╤З╨╕╤Б╨╗╨░';
		}
		else{
			total.innerHTML = 0;
		}
	}
	
	people.addEventListener('keyup', function(){
		calc(currentOption.value);
	});

	days.addEventListener('keyup', function(){
		calc(currentOption.value);
	});

	place.addEventListener('change', function(){
		currentOption = options[place.selectedIndex];			
		calc(currentOption.value);
	});
}

module.exports = calc;
},{}],3:[function(require,module,exports){
function form(){
	let message = new Object();
	message.loading = "╨Я╨╛╨║╨░ ╨╕╨┤╨╡╤В ╨╖╨░╨│╤А╤Г╨╖╨║╨░...";
	message.success = "╨г╤Б╨┐╨╡╤Е!";
	message.failure = "╨з╤В╨╛-╤В╨╛ ╨╜╨╡ ╤В╨░╨║...";

	let form = document.getElementsByClassName('main-form')[0],
		moreForm = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		moreInput = moreForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	function loadToForm(form,inputs){
		statusMessage.innerHTML = '';
		form.appendChild(statusMessage);
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		let formData = new FormData(form);
		request.send(formData);
		request.onreadystatechange = function(){
			if (request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4){
				if (request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
				}
				else{
					statusMessage.innerHTML = message.failure;
				}
			}
		};
		for (let i = 0; i < inputs.length; i++){
			inputs[i].value = '';
		}
	}

	moreForm.addEventListener('submit', function(event){
		event.preventDefault();
		loadToForm(moreForm,moreInput);
	});

	form.addEventListener('submit', function(event){
		event.preventDefault();
		loadToForm(form,input);
	});
}

module.exports = form;
},{}],4:[function(require,module,exports){
function overlay(){
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptions = document.querySelectorAll('.description-btn');

	for (let i = 0; i < descriptions.length; i++){
		descriptions[i].addEventListener('click', function(){
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function(){
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
}

module.exports = overlay;
},{}],5:[function(require,module,exports){
function slider(){
	let dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		slides = document.getElementsByClassName('slider-item'),
		slideIndex = 1;

	showSlides(1);

	function showSlides(n){

		if (n > slides.length){
			slideIndex = 1;
		}

		if (n < 1){
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
		}

		for (let i = 0; i < dots.length; i++){
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex-1].style.display = 'block';
		dots[slideIndex-1].classList.add('dot-active');

	}

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	next.addEventListener('click', function(){
		plusSlides(1);
	});

	prev.addEventListener('click', function(){
		plusSlides(-1);
	});

	dotsWrap.addEventListener('click', function(event){
		for (let i = 0; i < dots.length+1; i++){
			if (event.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab(){
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for (let i = a; i < tabContent.length;i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b){
		if (tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click', function(event){
		let target = event.target;
		if (target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer(){
		let deadline = '2018-04-20';

	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000)%60),
			minutes = Math.floor( (t/1000/60)%60),
			hours = Math.floor( (t/1000/3600));

		return{
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime){
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock(){
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			if (t.total <= 0){
				clearInterval(timeInterval);
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	}
	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
