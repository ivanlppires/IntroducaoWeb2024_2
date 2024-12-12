const form = document.querySelector("#formulario");

/* Métodos de uma API RESTFUL

POST = cadastrar novo dado (create)
GET = obter dados (read)
PUT/PATCH = atualizar (update) | PUT atualiza, PATCH atualiza mas se não existir ele cadastra
DELETE = remove
*/

// CREATE
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const usuario = {
    nome: form.nome.value,
    email: form.email.value,
  };

  const resultado = await fetch(
    "https://idw2024-default-rtdb.firebaseio.com/usuarios.json",
    {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (resultado.ok) {
    formulario.reset();
    lerDados();
  }
});

const corpoTabela = document.querySelector("#corpoTabela");
const lerDados = async () => {
  const resultado = await fetch(
    "https://idw2024-default-rtdb.firebaseio.com/usuarios.json",
    {
      method: "GET",
    }
  );
  if (resultado.ok) {
    corpoTabela.innerHTML = ""; // limpa o corpo da tabela

    // converter os dados de json para objeto js
    const dados = await resultado.json();
    for (let id in dados) {
      const tr = document.createElement("tr");
      const usuario = dados[id];
      tr.innerHTML = `<td>${id}</td><td>${usuario.nome}</td><td>${usuario.email}</td>`;
      tr.innerHTML += `<td><button onclick="editar('${id}')">Editar</button>
      <button onclick="remover('${id}')">Excluir</button></td>`;
      corpoTabela.appendChild(tr);
    }
  }
};
lerDados();

const editar = async (id) => {
  const usuario = {};
  usuario.nome = prompt("Novo nome");
  usuario.email = prompt("Novo email");
  const resultado = await fetch(`https://idw2024-default-rtdb.firebaseio.com/usuarios/${id}.json`, {
    method: 'PUT',
    body: JSON.stringify(usuario),
    headers: {
        "Content-Type": "application/json",
    }
  });
  if(resultado.ok){
    lerDados();
  }
};

const remover = async (id) => {
  const resultado = await fetch(`https://idw2024-default-rtdb.firebaseio.com/usuarios/${id}.json`, {
    method: "DELETE",
  });
  if(resultado.ok){
    lerDados();
  }
};
