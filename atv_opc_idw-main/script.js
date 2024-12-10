document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const observacao = document.getElementById('observacao').value;

    const tabelaBody = document.getElementById('tabela-body');
    tabelaBody.innerHTML = `
        <tr>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${observacao}</td>
        </tr>
    `;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('tabela-container').style.display = 'block';
});

document.getElementById('voltar').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('tabela-container').style.display = 'none';
});

document.getElementById('limpar').addEventListener('click', function() {
    // Limpa o conteúdo da tabela
    document.getElementById('tabela-body').innerHTML = '';

    // Reseta o formulário
    document.getElementById('clienteForm').reset();

    // Opcional: Volta para o formulário
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('tabela-container').style.display = 'none';
});
