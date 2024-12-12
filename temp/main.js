const databaseURL = "https://YOUR_PROJECT_ID.firebaseio.com"; // Substitua com a URL do seu Firebase Database
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userTableBody = document.getElementById("userTableBody");

// Função para criar um usuário
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;

  try {
    const response = await fetch(`${databaseURL}/users.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      userForm.reset();
      fetchUsers(); // Atualizar a tabela após criar o usuário
    } else {
      console.error("Erro ao criar usuário.");
    }
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
});

// Função para buscar usuários
async function fetchUsers() {
  try {
    const response = await fetch(`${databaseURL}/users.json`);
    const data = await response.json();

    userTableBody.innerHTML = ""; // Limpar a tabela antes de atualizá-la

    if (data) {
      for (const id in data) {
        const user = data[id];

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="edit" onclick="editUser('${id}', '${user.name}', '${user.email}')">Edit</button>
            <button class="delete" onclick="deleteUser('${id}')">Delete</button>
          </td>
        `;
        userTableBody.appendChild(row);
      }
    }
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
}

// Função para editar um usuário
window.editUser = async (id, name, email) => {
  const newName = prompt("Edit Name:", name);
  const newEmail = prompt("Edit Email:", email);

  if (newName && newEmail) {
    try {
      const response = await fetch(`${databaseURL}/users/${id}.json`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName, email: newEmail }),
      });

      if (response.ok) {
        fetchUsers(); // Atualizar a tabela após editar o usuário
      } else {
        console.error("Erro ao editar usuário.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }
};

// Função para excluir um usuário
window.deleteUser = async (id) => {
  if (confirm("Are you sure you want to delete this user?")) {
    try {
      const response = await fetch(`${databaseURL}/users/${id}.json`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchUsers(); // Atualizar a tabela após excluir o usuário
      } else {
        console.error("Erro ao excluir usuário.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }
};

// Inicializar a tabela ao carregar a página
fetchUsers();
