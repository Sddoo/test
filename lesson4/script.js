let time, totalMoney, theName, price;

//Главный объект

function start(){ //Фукнция ввода бюджета и названия организации
	do {
		totalMoney = prompt("Ваш бюджет?");
	} while (isNaN(totalMoney) || totalMoney == '' || typeof(totalMoney) == null);
	theName = prompt("название вашего магазина?").toUpperCase();
	time = 19;
};

start();

let mainList = {
	money: totalMoney,
	name: theName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){  //Функция ввода продуктов магазина
	for (let i = 0; i<3; i++){
			let a = prompt("Какой тип товаров будем продавать?");
			if (typeof(a) == "string" && a !== null && a != '' && a.length < 50){
				mainList.shopGoods[i] = a;
			}
			else{
				i--;
			}
		}
	},
	workTime: function workTime(time){ //Функция времени работы магазина
		if (time < 0){
			console.log("Такого не может быть");
		} else if(time > 8 && time < 20){
			console.log("Магазин работает");
		} else if(time < 24){
			console.log("Он закрыт");
		} else{
			console.log("В сутках только 24 часа");
		}
	},
	moneyForDay: function moneyForDay(){  //Функция вычисления бюджета на день
		alert("Бюджет на один день: " + mainList.money/30);
	},
	sells: function sells(){  //Функция вычисления цены товаров с учетом скидок
		if (mainList.discount == true){
			mainList.price *= 0.8;
		}
	},
	hireEmployee: function hireEmployee(){  //Функция наема работников
		for (let i=1; i< 5; i++){
			let a = prompt("Enter the name");
			if (typeof(a) == 'string' && a !== "" && a !== null && a.length < 50)
				mainList.employers[i]= i + "-" + a;
			else
				i--;
		}
	},
	chooseShopItems: function chooseShopItems(){
		let items = prompt("Перечислите через запятую товары","");
		while (typeof(items) != 'string' || items == "" || items == null || !isNaN(items)){
			items = prompt("Перечислите через запятую товары","");
		}
		let c = prompt("wait, go","");
		while (typeof(c) != 'string' || c == "" || c == null || !isNaN(c)){
			c = prompt("wait, go","");
		}
		items += ',' + c;
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();
	}
};

mainList.chooseGoods();
mainList.workTime(time);
mainList.moneyForDay();
mainList.hireEmployee();
mainList.chooseShopItems();

mainList.shopItems.forEach(function(item,i){
	if (i==0){
		document.write("У нас вы можете купить: " + '<br />');
	}
	document.write(i+1 + " - " + item + '<br />');
})

console.log("У нас есть в наличии: ");
for (let key in mainList){
	console.log(key);
}