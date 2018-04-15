let mainList = {
	money: +prompt("Ваш бюджет?"),
	name: prompt("Название вашего магазина?"),
	shopGoods: [],
	employers: {},
	open: true
};

for (let i = 0; i<3; i++){
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === "string" && (typeof(a)) !== null && a!=='' && a.length < 50)
		mainList.shopGoods[i] = a;
}

alert("Бюджет на один день: " + mainList.money/30);