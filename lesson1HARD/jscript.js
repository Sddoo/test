var num = 33721;
var result = 1;
for (var i = 0; i<5; i++){
	result *= num%10;
	num = parseInt(num/10);
}
console.log(result);
alert(result **= 3);