window.addEventListener('DOMContentLoaded',function(){
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


	let deadline = '2018-04-04T12:33:00';

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
			//ЭТО ДОБАВИЛ:
			if (t.total <= 0){
				clearInterval(timeInterval);
				hours.innerHTML = 0;
				minutes.innerHTML = 0;
				seconds.innerHTML = 0;
			}
			else if (now.total > 0){
			updateClock();
			}
			//ЗАКОНЧИЛ ДОБАВЛЯТЬ
		}
		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);


//Создание переменных, к которым будем скролиться
	let about = document.getElementById('about'),
		photo = document.getElementById('photo'),
		price = document.getElementById('price'),
		contacts = document.getElementById('contacts'),
		links = document.getElementsByTagName('a'),
		nav = document.getElementsByTagName('nav')[0],
		timerID;

//Событие: если нажимаем на ссылку запускаем соответствующий setInterval
	nav.addEventListener('click', function(event){
		event.preventDefault();
		let target = event.target;
		for (let i = 0; i < 4; i++){
			 if (links[i]==target){
			 	switch (i){
			 		case 0: timerID = setInterval(function(){
			 			let b = about.getBoundingClientRect().top;
						if (b > 5){
							console.log(b);
							window.scrollBy(0,10);
							b -= 10; 
						}
						else if (b < -5){
							window.scrollBy(0,-10);
							b += 10;
						}
						else{
							clearInterval(timerID);
						}
					}, 1); break;
			 		case 1: timerID = setInterval(function(){
			 			let b = photo.getBoundingClientRect().top;
						if (b > 5){
							console.log(b);
							window.scrollBy(0,10);
							b -= 10; 
						}
						else if (b < -5){
							window.scrollBy(0,-10);
							b += 10;
						}
						else{
							clearInterval(timerID);
						}
					}, 1); break;
			 		case 2: timerID = setInterval(function(){
			 			let b = price.getBoundingClientRect().top;
						if (b > 5){
							console.log(b);
							window.scrollBy(0,10);
							b -= 10; 
						}
						else if (b < -5){
							window.scrollBy(0,-10);
							b += 10;
						}
						else{
							clearInterval(timerID);
						}
					}, 1); break;
			 		case 3: timerID = setInterval(function(){
			 			var b = contacts.getBoundingClientRect().top-140;
						if (b > 5){
							console.log(b);
							window.scrollBy(0,10);
							b -= 10; 
						}
						else if (b < -5){
							console.log(b);
							window.scrollBy(0,-10);
							b += 10;
						}
						else{
							console.log(b);
							clearInterval(timerID);
						}
					}, 1); break;
			 	}
			 }
		}
	});
});