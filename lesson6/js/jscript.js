let open = document.getElementById('open-btn');
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue= document.getElementsByClassName('employers-value')[0];
let discountValue= document.getElementsByClassName('discount-value')[0];
let isOpenValue= document.getElementsByClassName('isopen-value')[0];
let goodsCategories = document.getElementsByClassName('goods-item');

let parentId = document.getElementsByClassName('main-functions');
let buttons = parentId[0].getElementsByTagName('button');
let goodsBtn = buttons[0];
let budgetBtn = buttons[1];
let employeesBtn  = buttons[2];
let fieldItem = document.querySelector("#items");
let fieldTime = document.querySelector("#time");
let fieldBudget = document.querySelector("#budget");
let fieldsOfEmployees = document.querySelectorAll(".hire-employers-item");

let totalMoney, theName, price; 

open.addEventListener('click', () => {
	do {
		totalMoney = prompt("Ваш бюджет?");
	} while (isNaN(totalMoney) || totalMoney == '' || totalMoney == null);
	budgetValue.textContent = totalMoney;
	nameValue.textContent = prompt("Название вашего магазина?").toUpperCase();
});

goodsBtn.addEventListener('click',() => {
	for (let i = 0; i < goodsCategories.length; i++){
		let a = goodsCategories[i].value;
		if (typeof(a) == "string" && typeof(a) != null && a.length < 50){
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		}
		else{
			i--;
		}
	}
});

fieldItem.addEventListener('change', () => {
	let items = fieldItem.value;
	if (items != "" && isNaN(items)){
		mainList.shopItems = items.split(",");
	   	mainList.shopItems.sort();
	   	itemsValue.textContent = mainList.shopItems;
	}
});

fieldTime.addEventListener('change', () =>{
	let time = fieldTime.value;
	if (time < 0){
			isOpenValue.textContent = "Такого не может быть";
		} else if(time > 8 && time < 20){
			isOpenValue.textContent = "Магазин работает";
			isOpenValue.style.backgroundColor = 'green';
		} else if(time < 24){
			isOpenValue.textContent = "Он закрыт";
		} else{
			isOpenValue.textContent = "В сутках только 24 часа";
		}
});

budgetBtn.addEventListener('click', () =>{
		fieldBudget.value = totalMoney/30;
});

employeesBtn.addEventListener('click', () =>{
	for (let i = 0; i < fieldsOfEmployees.length; i++){
		let emp = fieldsOfEmployees[i].value;
		mainList.employers[i] = emp;
		if (typeof(mainList.employers[i]) == 'string'){
			employersValue.textContent += mainList.employers[i] + ',';
		}
	}
})

let mainList = {
	money: totalMoney,
	name: theName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	sells: function sells(){  //Функция вычисления цены товаров с учетом скидок
		if (mainList.discount == true){
			mainList.price *= 0.8;
		}
	},
};

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