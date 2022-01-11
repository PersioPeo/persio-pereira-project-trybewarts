 
// Ao preencher o formulário e clicar no botão, será validado que:
// Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!"
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos."

let buttonLogin = document.querySelector(".btn-entrar");
 buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
 });

function login() {
    let email = document.querySelector('[name=email]');
    let senha = document.querySelector('[name=password]');
    let userEmail = email.value;
    let userPassword = senha.value;
    let validEmail = 'tryber@teste.com';
    let validPassword = 123456;
    if(userEmail === validEmail & userPassword === validPassword) {
        console.log("Olá, Tryber!");
    } else {
        console.log("Email ou senha inválidos.")
    }
}

buttonLogin.addEventListener("click", login());





