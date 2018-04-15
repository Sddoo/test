//Кнопка открыть магазин
let button = document.getElementById('open-btn');
//Левое меню
let name = document.getElementsByClassName('name');
let nameValue = document.getElementsByClassName('name-value');
let goods = document.getElementsByClassName('goods');
let goodsValue = document.getElementsByClassName('goods-value');
let items = document.getElementsByClassName('items');
let itemsValue = document.getElementsByClassName('items-value');
let employers= document.getElementsByClassName('employers');
let employersValue= document.getElementsByClassName('employers-value');
let discount= document.getElementsByClassName('discount');
let discountValue= document.getElementsByClassName('discount-value');
let isOpen= document.getElementsByClassName('isopen');
let isOpenValue= document.getElementsByClassName('isopen-value');
//Категории товаров
let goodsCategories = document.getElementsByClassName('goods-item');
//3 кнопки
let parentId = document.getElementsByClassName('main-functions');
let buttons = parentId[0].getElementsByTagName('button');
let button1 = buttons[0];
let button2 = buttons[1];
let button3 = buttons[2];
console.log(button3);
//Поля ввода товаров, времени и расчета бюджета
let fieldItem = document.querySelector("#items");
let fieldTime = document.querySelector("#time");
let fieldBudget = document.querySelector("#budget");
//Поля имен сотрудников
let fieldsOfEmployees = document.querySelectorAll(".hire-employers-item");