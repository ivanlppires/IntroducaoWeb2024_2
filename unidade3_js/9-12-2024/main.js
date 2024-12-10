function validarEmail(){
    const email = document.querySelector('#email');
    // USANDO REGEX PARA VALIDAR O EMAIL
    // const regexEmail = /[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,}/i;
    // USANDO REGEX CHATGPT O1 que permite localhost
    const regexEmail = /^(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?))$/;

    // TESTANDO O REGEX NO VALOR DO INPUT
    if(regexEmail.test(email.value) == false){
        return "Email inválido!";
    }
    return null;
}
function validarTelefone(){
    // buscar o input do telefone
    // fazer o regex
    // testar o regex
    // retornar mensagem de erro ou null
}

function validar(){
    
    var msgErro = null;

    msgErro = validarEmail();
    // msgErro = validarTelefone();

    if(msgErro == null)
        return true;

    alerta.innerHTML = msgErro;
    return false;
}