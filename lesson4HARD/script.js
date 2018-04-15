alert("Введите размерность матрицы");
let m = prompt("Строки: ","");
let n = prompt("Столбцы: ","");
let Arr = [];
let sum = 0;
for (let i = 0; i < m; i++){
	Arr[i] = [];
	for (let j = 0; j < n; j++){
		Arr[i][j] = Math.floor(Math.random() * (6));
		sum += Arr[i][j];
	}
}
alert(sum);
console.log(Arr);