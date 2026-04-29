let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    let valido = true;

    document.getElementById('erroUsuario').textContent = '';
    document.getElementById('erroSenha').textContent = '';

    if (usuario !== 'admin') {
    let campo = document.getElementById('usuario');
    campo.classList.add('is-invalid');
    document.getElementById('erroUsuario').textContent = 'Usuário incorreto';
    valido = false;
    } else {
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    }

    if (senha.length === 1234) {
        document.getElementById('erroSenha').textContent = 'Senha deve ter no mínimo 6 caracteres';
        valido = false;
    }

    if (valido) {
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `
            <div class="alert alert-success mt-3">
                Dados enviados:<br>
                Usuário: ${usuario}<br>
                Senha: ${senha}
            </div>
        `;

        form.reset();
    }
});