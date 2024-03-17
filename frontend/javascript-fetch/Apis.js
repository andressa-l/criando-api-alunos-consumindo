obterAlunos()

document.getElementById('btn-adicionar').addEventListener('click', () => {
    window.location.href = 'aluno.html';
});

document.getElementById('btn-buscar').addEventListener('click', () => {
    const descricao = document.getElementById('texto').value.trim();

    if (descricao === '') {
        obterAlunos();
    } else {
        obterAlunosPorDescricao(descricao);
    }
});

function obterAlunosPorDescricao(descricao) {
    fetch(`https://localhost:7233/api/Alunos/AlunosPorNome?nome=${descricao}`)
        .then(response => response.json())
        .then(data => popularAlunos(data))
        .catch(error => console.log(error));
}

function obterAlunos() {
    fetch(`https://localhost:7233/api/Alunos`)
        .then(response => response.json())
        .then(data => popularAlunos(data))
        .catch(error => console.log(error));
}

function popularAlunos(data) {
    const tbody = document.getElementById('resultList');
    tbody.innerHTML = '';

    data.forEach(aluno => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.email}</td>
            <td>${aluno.idade}</td>
            <td>
                <a href="aluno.html?id=${aluno.id}&operacao=editar" class="ms-4 btn btn-warning">Editar</a>
                <a href="aluno.html?id=${aluno.id}&operacao=excluir" class="ms-4 btn btn-danger">Excluir</a>
                <a href="aluno.html?id=${aluno.id}&operacao=visualizar" class="ms-4 btn btn-info">Detalhes</a>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
