//first part

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

//second part
//Инфо о кандидате

//MALE-FEMALE


let heroSkin = document.querySelector('.person-skin'),
	heroClothes = document.querySelector('.person-clothes'),
	heroHair = document.querySelector('.person-hair'),
	sex = document.querySelector('.radio'),
	hairStyle = document.querySelectorAll('.hair-style'),
	clothesStyle = document.querySelectorAll('.clothes-style');


function character(Clothes,Hair,Skin,Sex){
	heroClothes.style.background = Clothes;
	heroHair.style.background = Hair;
	heroSkin.style.background = Skin;
	heroSkin.style.backgroundSize = 'cover';
	heroHair.style.backgroundSize = 'cover';
	heroClothes.style.backgroundSize = 'cover';
	if (Sex == 'female'){
		hairStyle[0].style.display = 'none';
		hairStyle[3].style.display = 'block';
		clothesStyle[0].style.display = 'none';
		clothesStyle[3].style.display = 'block';
	}
	else if (Sex == 'male'){
		hairStyle[0].style.display = 'block';
		hairStyle[3].style.display = 'none';
		clothesStyle[0].style.display = 'block';
		clothesStyle[3].style.display = 'none';
	}
}

sex.addEventListener('change', function(event){
	if (event.target.id == 'female'){
		Clothes = 'url("img/clothes/construct/clothes-4.png") center no-repeat';
		Hair = 'url("img/hair/construct/hair-4.png") center no-repeat';
		Skin = 'url("img/skin/skin-4.png") center no-repeat';
		character(Clothes,Hair,Skin,'female');
	}
	else{
		Clothes = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
		Hair = 'url("img/hair/construct/hair-1.png") center no-repeat';
		Skin = 'url("img/skin/skin-1.png") center no-repeat';
		character(Clothes,Hair,Skin,'male');
	}
});








