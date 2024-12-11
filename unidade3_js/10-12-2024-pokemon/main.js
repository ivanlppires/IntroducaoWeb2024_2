// buscar o campo de texto
const input = document.querySelector("#busca");

// buscar o div que vai ficar o retorno dos dados da api
const info = document.querySelector("#info");

// adicionar o listener no evento input
input.addEventListener("keypress", async (event) => {
  if (event.key == "Enter") {
    const nome = event.target.value; // o que o usuário digitou no campo
    // buscar lá na api do pokedex pela variável nome
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome.toLowerCase());
    // verifica se talquei
    if (resultado.ok) {
      // converte os dados de retorno do fetch (doidões) para objeto javascript
      const dados = await resultado.json();
      // guardar o resultado em um objeto {}
      const pokemon = {
        nome: dados.name,
        imagem: dados.sprites.front_default,
        altura: parseInt(dados.height) / 10,
        peso: parseInt(dados.weight) / 10,
        tipo: dados.types[0].type,
      };
      info.innerHTML = "<h1>" + pokemon.nome + "</h1>";
      info.innerHTML += '<img src="' + pokemon.imagem + '">';
      info.innerHTML += "<p>Altura: " + pokemon.altura + " metros </p>";
      info.innerHTML += "<p>Peso: " + pokemon.peso + " kg </p>";
      info.style.display = 'block';
    }
  }
});
