/*function salvar () {
    localStorage.setItem("nome", "Kesia");
    console.log("Nome salvo com sucesso!");
}

function ler() {
    let myNome = localStorage.getItem("nome");
    console.log(myNome)
}

function remover(){
    localStorage.removeItem("nome");
    console.log("Nome removido com sucesso!")
}*/

// script.js

function validateLogin() {
    document.querySelector('#myForm').addEventListener('submit', function(event) {
        event.preventDefault();
    });

    let usuario = localStorage.getItem('usuario');
    let senha = localStorage.getItem('senha');

    if(usuario && senha) {
        document.querySelector('#usuario').value = usuario;
        document.querySelector('#senha').value = senha;
    }

    document.querySelector('#submitBtn').addEventListener('click', checkLogin);
};

    function checkLogin() {
        let usuario = document.querySelector('#usuario').value;
        let senha = document.querySelector('#senha').value;
         
        if (usuario === 'kessyads' && senha === '12345') {
            localStorage.setItem('usuario', usuario);
            localStorage.setItem('senha', senha);

           window.location.href = "home.html"
        } else {
            document.querySelector('#ErrorMsg').innerHTML = "USUÁRIO OU SENHA INVÁLIDOS!";
        }
    }

document.addEventListener('DOMContentLoaded', validateLogin);
