//Вопрос
let ans = prompt("Как вы относитесь к техинике Apple?", "");
let answer = document.getElementById('prompt');
answer.textContent = ans;


//Изменение порядка в меню, доабавление пятого элемента
let menuItem = document.getElementsByClassName('menu-item');
let parentId = menuItem[2].parentNode;
parentId.insertBefore(menuItem[2],menuItem[1]);
//
let point = document.createElement('li');
point.textContent = 'Пятый пункт';
point.classList.add('menu-item');
parentId.appendChild(point);

//Изменение фоновой картинки

let img = document.querySelector('body');
img.style.background = 'url(img/apple_true.jpg) center no-repeat';
img.style.backgroundSize = 'cover';

//Изменение заголовка !

let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";

//Удаление рекламы
 
let node = document.getElementsByClassName("adv");
node[0].remove();