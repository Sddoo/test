let time = 19;

if (!!( a && b ) == (a && b))
	alert("TRUE");

let mainList = {
	money: +prompt("Ваш бюджет?"),
	name: prompt("Название вашего магазина?"),
	shopGoods: [],
	employers: {},
	open: true
};

for (let i = 0; i<3; i++){
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === "string" && (typeof(a)) !== null && a!='' && a.length < 50)
		mainList.shopGoods[i] = a;
	else
		i--;
}

/*let i = 0;
while (i<3){
	let a = prompt("Какой тип товаров будем продавать?");
	if (typeof(a) === 'string' && typeof(a) !== null && a!=='' && a.length < 50){
		mainList.shopGoods[i] = a;
		i++;
	}
}*/

/*let i = 0;
do{
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === "string" && (typeof(a)) !== null && a!=='' && a.length < 50){
		mainList.shopGoods[i] = a;
		i++;
	}
}while(i<3);*/

if (time < 0){
	console.log("Такого не может быть");
} else if(time > 8 && time < 20){
	console.log("Магазин работает");
} else if(time < 24){
	console.log("Он закрыт");
} else{
	console.log("В сутках только 24 часа");
}

alert("Бюджет на один день: " + mainList.money/30);