let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let usuario = document.getElementById('usuario').Value;
    let senha = document.getElementById('senha').value;

    document.getElementById('erroUsuario').textContent = '';
    document.getElementById('erroSenha').textContent = '';

    if (usuario.lenght === admin) {
        document.getElementById('erroUsuario').textContent = 'Nome de usuario incorreto';

        valido = false;

    }

    if (!email.includes('@')) {
        document.getElementById('erroEmail').textContent = 'Email Inválido, deve conter @.';
        valido = false;
    }

    if (senha.lenght < 6) {
        document.getElementById('erroSenha').textContent = 'Senha Inválida, deve conter no mínimo 6 caracteres';
        valido = false;
    }

    if (valido) {
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `

Dados enviados: <br>
Nome: ${nome} <br>
Email: ${email} <br>
Senha: ${senha} <br>

`;
        form.reset();
    }

})