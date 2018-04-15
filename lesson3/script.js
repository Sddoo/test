let time, totalMoney, theName, price;

//Фукнция ввода бюджета и названия организации

function start(){
	do {
		totalMoney = prompt("Ваш бюджет?");
	} while (isNaN(totalMoney) || totalMoney == '' || totalMoney == null);
	theName = prompt("название вашего магазина?").toUpperCase();
	time = 19;
}

start();

//Главный объект

let mainList = {
	money: totalMoney,
	name: theName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: false
};

//Функция ввода продуктов магазина

function chooseGoods(){ 
	for (let i = 0; i<3; i++){
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === "string" && (typeof(a)) !== null && a != '' && a.length < 50){
			mainList.shopGoods[i] = a;
		}
		else{
			i--;
		}
	}
}

chooseGoods();

//Функция времени работы магазина

function workTime(time){
	if (time < 0){
		console.log("Такого не может быть");
	} else if(time > 8 && time < 20){
		console.log("Магазин работает");
	} else if(time < 24){
		console.log("Он закрыт");
	} else{
		console.log("В сутках только 24 часа");
	}
}

workTime(time);

//Функция вычисления бюджета на день

function moneyForDay(){
	alert("Бюджет на один день: " + mainList.money/30);
}

moneyForDay();

//Функция вычисления цены товаров с учетом скидок

function sells(){
	if (mainList.discount == true){
		mainList.price *= 0.8;
	}
}

//Функция наема работников

function hireEmployee(){
	for (let i=1; i< 5; i++){
		let a = prompt("Enter the name");
		if (typeof(a) == 'string' && a !== "" && a !== null && a.length < 50)
			mainList.employers[i]= i + "-" + a;
		else
			i--;
	}
}

hireEmployee();

console.log(mainList.employers);