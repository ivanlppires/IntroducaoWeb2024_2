const botao = document.querySelector('#botao');
// Usando funções com listener usando ARROW FUNCTION
// arrow function
/*
   () => {};

   () aqui fica os parametros passados para a função
   => isso é uma seta (arrow)
   {} aqui fica o bloco de código que será executado
*/
// O listner adicicona um evento ao objeto
const boxResposta = document.querySelector('#resposta');
const imgResposta = document.querySelector('#imagem');
botao.addEventListener('click', async () => {
    boxResposta.innerHTML = '';
    imgResposta.src = '';
    const resultado = await fetch('https://yesno.wtf/api'); // buscar
    if(resultado.ok){ // verifica se o resultado está ok
        const dados = await resultado.json(); // converte a resposta para objeto js
        boxResposta.innerHTML = dados.answer;
        imgResposta.src = dados.image;
        imgResposta.style.display = 'block';
    }


});

