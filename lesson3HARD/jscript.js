var str = "урок-3-был слишком легким";
str = str [0].toUpperCase() + str.substring(1); // Заглавная буква
str = str.replace(/-/g,' '); // Замена "-" на " "
console.log(str);
var strADD = str.substring(str.length-6); // Взятие "легким"
strADD = strADD.replace(strADD.slice(-2), 'o');
alert(strADD); // Вывод "легко"
str = str.replace(/легким/g,'');// Удаление "легким"
if (str.charAt(str.length-1) == ' ') // Удаление пробела (если есть)
	str[str.length-1] = '';			 //
str = str.replace(str.slice(-3), 'oo');
alert(str);

var arr = [20, 33, "Человек", 1, 2, 3];
var res = 0;
for (let i = 0; i < 6; i++){
	if (typeof(arr[i]) != "string"){
		res += Math.pow(arr[i], 3);
	}
}
console.log(Math.sqrt(res));