function form(){
	let message = new Object();
	message.loading = "Пока идет загрузка...";
	message.success = "Успех!";
	message.failure = "Что-то не так...";

	let form = document.getElementsByClassName('main-form')[0],
		moreForm = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		moreInput = moreForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	function loadToForm(form,inputs){
		statusMessage.innerHTML = '';
		form.appendChild(statusMessage);
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		let formData = new FormData(form);
		request.send(formData);
		request.onreadystatechange = function(){
			if (request.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4){
				if (request.status == 200 && request.status < 300){
					statusMessage.innerHTML = message.success;
				}
				else{
					statusMessage.innerHTML = message.failure;
				}
			}
		};
		for (let i = 0; i < inputs.length; i++){
			inputs[i].value = '';
		}
	}

	moreForm.addEventListener('submit', function(event){
		event.preventDefault();
		loadToForm(moreForm,moreInput);
	});

	form.addEventListener('submit', function(event){
		event.preventDefault();
		loadToForm(form,input);
	});
}

module.exports = form;