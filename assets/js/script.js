const login = document.getElementById('login');

login.addEventListener('submit', (e) => {
	e.preventDefault();
	let email = login.email.value;
	let password = login.password.value;
	const errorEmail = document.getElementById('errorEmail');
	const errorPass = document.getElementById('errorPass');
	const inputPass = document.getElementById('password');
	const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	errorEmail.innerHTML = '';
	errorPass.innerHTML = '';

	if (!emailRegex.test(email) || password.length < 4) {
		if (email.length == 0) {
			errorEmail.innerHTML = '* El email es requerido';
		}
		if (password.length == 0) {
			errorPass.innerHTML = '* El password es requerido';
		}
		if (email.length != 0 && !emailRegex.test(email)) {
			errorEmail.innerHTML = '* Email incorrecto';
		}
		if (password.length != 0 && password.length < 4) {
			errorPass.innerHTML = '* Mínimo 4 caracteres';
		}
		inputPass.value = '';
		return;
	}

	let datos = new FormData();

	datos.append('email', email);
	datos.append('password', password);

	fetch('controllers/Controller.php', {
		method: 'POST',
		body: datos,
	})
		.then((res) => res.json())
		.then((data) => loginPass(data));
});

const loginPass = (data) => {
	const inputPass = document.getElementById('password');
	const inputEmail = document.getElementById('email');
	if (data.id == undefined) {
		if (data.errEmail) {
			errorEmail.innerHTML = data.errEmail;
		}
		if (data.errPass) {
			errorPass.innerHTML = data.errPass;
		}
		if (data.errLogin) {
			errorEmail.innerHTML = data.errLogin;
		}
		inputPass.value = '';
		return;
	} else {
		inputPass.value = '';
		inputEmail.value = '';
		location.href = 'depatro.html?name=' + data.name;
	}
};
