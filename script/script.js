function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var mensagem = document.getElementById("mensagem");

    if(login === ""){
        mensagem.innerText = "Preencha este campo";
        return;
    }
    if(senha === ""){
        mensagem.innerText = "Preencha este campo"
        return;
    }
    if(login === "admin" && senha === "admin"){
        location.href = "index/index.html";
    }else{
        mensagem.innerText = "Usuario ou senha invalidos"
    }

}
