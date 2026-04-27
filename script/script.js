function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var mensagem = document.getElementById("mensagem");

    if(usuario === ""){
        mensagem.innerText = "Preencha este campo";
        return;
    }
    if(usuario === ""){
        mensagem.innerText = "Preencha este campo"
        return;
    }
    if(usuario === "admin" && senha === "admin"){
        location.href = "index/index.html";
    }else{
        mensagem.innerText = "Usuario ou senha invalidos"
    }

}
