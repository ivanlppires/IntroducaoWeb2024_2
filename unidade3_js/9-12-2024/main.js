var alerta = document.querySelector('#alerta');
function validarEmail(){
    const email = document.querySelector('#email');
    // USANDO REGEX PARA VALIDAR O EMAIL
    // const regexEmail = /[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,}/i;
    // USANDO REGEX CHATGPT O1 que permite localhost
    const regexEmail = /^(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?))$/;

    // TESTANDO O REGEX NO VALOR DO INPUT, retorna false se errado
    if(regexEmail.test(email.value) == false){
        alerta.innerHTML = "Email inválido!";
        return false;
    }
    // retorna true se ok
    return true;
}
function validarTelefone(){
    // buscar o input do telefone
    const telefone = document.querySelector('#telefone');
    // fazer o regex
    const regex = /\([0-9]{2}\)9[0-9]{4}-[0-9]{4}/;
    // testar o regex e mostra a mensagem se erro
    if(regex.test(telefone.value) == false){
        alerta.innerHTML = "Número de telefone inválido";
        return false;
    }
    // retornar true se ok.
    return true;
}

function validar(){
    if(
        validarEmail()
        && validarTelefone()
    )
        return true;
    else
        return false;
    
}