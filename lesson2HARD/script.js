var week = ["Понедельник","Вторник", "Среда", "Четверг",
 "Пятница", "Суббота", "Воскресенье"];
for (let i=0; i< 7; i++){
	if (i==1){
		document.write('<em>' + week[i] + '</em>' + '<br />');
	}
	else if (i<5 && i!=1){
		document.write(week[i] + '<br />');
	}
	else if(i>=5 && i<7){
		document.write('<strong>' + week[i] + '</strong>' + '<br />');
	}
}

if ("ёжик" < "яблоко")
	console.log("alarm");
var a = 0 || "" || 2 || undefined || true || falsе || 3;
alert(a);

var arr = ['4235','5243','4321','3685','6234','9767','7264'];
for (let i = 0; i < 7; i++){
  var num = parseInt(+arr[i]/10**(arr[i].length-1));
	if (num == 3 || num == 7)
		console.log(arr[i]);
}