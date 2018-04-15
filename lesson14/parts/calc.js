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
			total.innerHTML = 'Нужны целые положительные числа';
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