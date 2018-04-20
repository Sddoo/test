//Первая карточка ПОКАЗ ОКНА КАСТОМИЗАЦИИ

let overlay = document.querySelector(".overlay"),
	popup = document.querySelector(".popup"),
	pop_btn = document.getElementById("popup-btn"),
	main = document.querySelector(".main"),
	custom = document.querySelector(".custom");

pop_btn.addEventListener('click', function(){
	overlay.style.display = "none";
	popup.style.display = "none";
	main.style.display = "none";
	custom.style.display = "flex";
	for (let i = 0; i < custom.children.length;i++){
		custom.children[i].style.display = "block";
	}
});

//Вторая карточка ВНЕШНИЙ ВИД

let heroSkin = document.querySelector('.person-skin'),
	heroClothes = document.querySelector('.person-clothes'),
	heroHair = document.querySelector('.person-hair'),
	sex = document.querySelector('.radio'),
	hairStyle = document.querySelectorAll('.hair-style'),
	clothesStyle = document.querySelectorAll('.clothes-style'),
	hairStyleToShow = [],
	clothesStyleToShow = [],
	heroSex = 'male';

addForSex(0,hairStyle,hairStyleToShow,'hair');
addForSex(0,clothesStyle,clothesStyleToShow,'clothes');
character(1,1,1);

function character(Clothes,Hair,Skin){
	if (Clothes != 0){
		heroClothes.style.background = `url("img/clothes/construct/clothes-${Clothes}.png") center no-repeat`;
	}
	if (Hair != 0){
		heroHair.style.background = `url("img/hair/construct/hair-${Hair}.png") center no-repeat`;
	}
	if (Skin != 0){
		heroSkin.style.background = `url("img/skin/skin-${Skin}.png") center no-repeat`;
	}
	heroSkin.style.backgroundSize = 'cover';
	heroHair.style.backgroundSize = 'cover';
	heroClothes.style.backgroundSize = 'cover';
}

function clearForSex(index,object,massive,string){
	for (let i = index; i < object.length; i++){
		object[i].style.display = 'none';
		object[i].classList.remove(`${string}-style-${i+1}`);
		massive.shift();
	}	
}

function addForSex(index,object,massive,string){
	for (let i = index; i < object.length; i++){
		object[i].classList.add(`${string}-style-${i+1}`);
		massive.push(document.getElementsByClassName(`${string}-style-${i+1}`)[0]);
	}
}

function sexType(Sex){
	if (Sex == 'female'){
		clearForSex(0,hairStyle,hairStyleToShow,'hair');
		addForSex(3,hairStyle,hairStyleToShow,'hair');
		clearForSex(0,clothesStyle,clothesStyleToShow,'clothes');
		addForSex(3,clothesStyle,clothesStyleToShow,'clothes');
		hairStyleToShow[0].style.display = 'block';
		clothesStyleToShow[0].style.display = 'block';
	}
	else if (Sex == 'male'){
		clearForSex(0,hairStyle,hairStyleToShow,'hair');
		addForSex(0,hairStyle,hairStyleToShow,'hair');
		clearForSex(0,clothesStyle,clothesStyleToShow,'clothes');
		addForSex(0,clothesStyle,clothesStyleToShow,'clothes');
		hairStyleToShow[0].style.display = 'block';
		clothesStyleToShow[0].style.display = 'block';
	}
	for (let i = 0; i < skinSlides.length;i++){
		skinSlides[i].style.display = 'none';
	}
	skinSlides[0].style.display = 'block';
}

//Слайдеры

let skinSlides = document.querySelectorAll('.skin-color'),
	rightArrow = document.querySelectorAll('.next'),
	leftArrow = document.querySelectorAll('.prev'),
	slideIndex = 1;

function showSlides(n,typeSlides){
	if (n > typeSlides.length){
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex = typeSlides.length;
	}
	if (n > typeSlides.length-3 && heroSex == 'male' && (typeSlides == hairStyleToShow || typeSlides == clothesStyleToShow)){
		slideIndex = 1;
	}
	if (n < 1 && heroSex == 'male' && (typeSlides == hairStyleToShow || typeSlides == clothesStyleToShow)){
		slideIndex = typeSlides.length-3;
	}
	for (let i = 0; i < typeSlides.length; i++){
		typeSlides[i].style.display = 'none';
	}
	typeSlides[slideIndex-1].style.display = 'block';
}

function plusSlides(n,typeSlides){
	showSlides(slideIndex += n,typeSlides);
}

//Цвет шкуры

function getIndex(typeSlides){
	for (let i = 0; i < typeSlides.length-1; i++){
		if (typeSlides[i].style.display == 'block'){
			slideIndex = i+1;
		}
	}
}

rightArrow[0].addEventListener('click', function(){
	getIndex(skinSlides);
	plusSlides(1,skinSlides);
	if (heroSex == 'male'){
		character(0,0,slideIndex);
	}
	else{
		character(0,0,slideIndex+3);
	}
});

leftArrow[0].addEventListener('click', function(){
	getIndex(skinSlides);
	plusSlides(-1,skinSlides);
	if (heroSex == 'male'){
		character(0,0,slideIndex);
	}
	else{
		character(0,0,slideIndex+3);
	}
});

//Волосы

rightArrow[1].addEventListener('click', function(){
	getIndex(hairStyleToShow);
	plusSlides(1,hairStyleToShow);
	if(heroSex == 'male'){
		character(0,slideIndex,0);
	}
	else{
		character(0,slideIndex+3,0);
	}
});

leftArrow[1].addEventListener('click', function(){
	getIndex(hairStyleToShow);
	plusSlides(-1,hairStyleToShow);
	if(heroSex == 'male'){
		character(0,slideIndex,0);
	}
	else{
		character(0,slideIndex+3,0);
	}
});

//Костюм

rightArrow[2].addEventListener('click', function(){
	getIndex(clothesStyleToShow);
	plusSlides(1,clothesStyleToShow);
	if (heroSex == 'male'){
		character(slideIndex,0,0);
	}
	else{
		character(slideIndex+3,0,0);
	}
});

leftArrow[2].addEventListener('click', function(){
	getIndex(clothesStyleToShow);
	plusSlides(-1,clothesStyleToShow);
	if (heroSex == 'male'){
		character(slideIndex,0,0);
	}
	else{
		character(slideIndex+3,0,0);
	}
});

//Выбор пола

sex.addEventListener('change', function(event){
	if (event.target.id == 'female'){
		heroSex = 'female';
		character(4,4,4);
		sexType(heroSex);
	}
	else{
		heroSex = 'male';
		character(1,1,1,'male');
		sexType(heroSex);
	}
});

//Инфо о кандидате

let name = document.getElementById('name'),
	age = document.getElementById('age'),
	biography = document.getElementById('bio'),
	select = document.getElementById('select'),
	options = select.getElementsByTagName('option'),
	btnReady = document.getElementById('ready'),
	cards = document.getElementsByClassName('main-cards-item'),
	mainCards = document.getElementsByClassName('main-cards')[0],
	currentOption = options[0];

select.addEventListener('change', function(){
	currentOption = options[select.selectedIndex];
});

//Создание карточки кандидата

btnReady.addEventListener('click', function(){

	var candidateCardItem = document.createElement('div');
	candidateCardItem.classList.add('main-cards-item');
	mainCards.insertBefore(candidateCardItem,cards[1]);

	var candidateBlock = document.createElement('div');
	candidateBlock.classList.add('candidate-block');
	candidateCardItem.appendChild(candidateBlock);

	var photoWrap = document.createElement('div');
	photoWrap.classList.add('photo');
	photoWrap.style.marginTop = '5px';
	candidateBlock.appendChild(photoWrap);

	var photo1 = document.createElement('div');
	photo1.classList.add('photo');
	photo1.style.cssText = `background: ${document.getElementById('person-skin').style.background}`;
	photo1.style.position = 'absolute';
	photo1.style.backgroundSize = 'cover';
	photoWrap.appendChild(photo1);

	var photo = document.createElement('div');
	photo.classList.add('photo');
	photo.style.cssText = `background: ${document.getElementById('person-clothes').style.background},${document.getElementById('person-hair').style.background},url("img/clothes/construct/shoes.png") center no-repeat`;
	photo.style.position = 'absolute';
	photo.style.backgroundSize = 'cover';
	photoWrap.appendChild(photo);

	var result = document.createElement('div');
	result.classList.add('result');
	candidateBlock.appendChild(result);

	var resultCount = document.createElement('div');
	resultCount.classList.add('result-count');
	result.appendChild(resultCount);

	var progress = document.createElement('div');
	progress.classList.add('progress');
	result.appendChild(progress);

	var progressBar = document.createElement('div');
	progressBar.classList.add('progress-bar');
	progress.appendChild(progressBar);

	var nameCard = document.createElement('div');
	nameCard.innerHTML = name.value;
	nameCard.classList.add('name');
	candidateCardItem.appendChild(nameCard);

	var ageCard = document.createElement('div');
	if (age.value % 10 > 4){
		ageCard.innerHTML = age.value + ' лет';
	}
	else{
		ageCard.innerHTML = age.value + ' года';
	}
	ageCard.classList.add('age');
	candidateCardItem.appendChild(ageCard);

	//ПОЛ

	var sexCard = document.createElement('div');
	if (heroSex == 'male'){
		heroSex = 'Мужской';
	}
	else {
		heroSex = 'Женский';
	}
	sexCard.innerHTML = heroSex;
	sexCard.classList.add('sex');
	candidateCardItem.appendChild(sexCard);

	var sexText = document.createElement('div');
	sexText.innerHTML = 'Пол: ';
	candidateCardItem.insertBefore(sexText, sexCard);

	//ПОЛИТ ВЗГЛЯДЫ

	var viewsCard = document.createElement('div');
	viewsCard.innerHTML = currentOption.value;
	viewsCard.classList.add('views');
	candidateCardItem.appendChild(viewsCard);

	var viewsText = document.createElement('div');
	viewsText.innerHTML = 'Полит. взгляды: ';
	candidateCardItem.insertBefore(viewsText, viewsCard);

	//БИОГРАФИЯ

	var bioCard = document.createElement('div');
	bioCard.innerHTML = biography.value;
	bioCard.classList.add('bio');
	candidateCardItem.appendChild(bioCard);

	var bioText = document.createElement('div');
	bioText.innerHTML = 'Биография: ';
	candidateCardItem.insertBefore(bioText, bioCard);

	//ПОКАЗ ГЛАВНОЙ СТРАНИЦЫ

	main.style.display = "block";
	custom.style.display = "none";
	for (let i = 0; i < custom.children.length;i++){
		custom.children[i].style.display = "none";
	}
});

//3 карточка СБРОС РЕЗУЛЬТАТОВ

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', function(){
	cards[1].remove();

	overlay.style.display = "none";
	popup.style.display = "none";
	main.style.display = "none";
	custom.style.display = "flex";
	for (let i = 0; i < custom.children.length;i++){
		custom.children[i].style.display = "block";
	}

	name.value = '';
	age.value = '';
	sex.children[0].checked = true;
	biography.value = '';
	select.selectedIndex = 0;

	hairStyleToShow = [];
	clothesStyleToShow = [];
	heroSex = 'male';
	currentOption = options[0];
	

	addForSex(0,hairStyle,hairStyleToShow,'hair');
	addForSex(0,clothesStyle,clothesStyleToShow,'clothes');
	character(1,1,1);
	sexType(heroSex);
});


