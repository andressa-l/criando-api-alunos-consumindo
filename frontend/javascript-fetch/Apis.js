
document.getElementById('btn-adicionar').addEventListener('click', (e) => {

    window.location.href = 'aluno.html';

})

document.getElementById('btn-buscar').addEventListener('click', (e) => {

    //let idEstado = document.getElementById('texto').value;
    //obterLocalidade(idEstado);

    let descricao = document.getElementById('texto').value;

    if (descricao == '') {
        obterAlunos();
    } else {
        obterAlunosPorDescricao(descricao)
    }

    obterAlunos();
})

function obterAlunosPorDescricao(descricao) {
    fetch(`https://localhost:7233/api/Alunos/AlunosPorNome?nome=${descricao}`)
        .then(response => response.json())
        .then(data => popularAlunos(data))
        .catch(error => console.log(error))
}

function obterAlunos() {
    fetch(`https://localhost:7233/api/Alunos`)
        .then(response => response.json())
        .then(data => popularAlunos(data))
        .catch(error => console.log(error))
}

function popularAlunos(data) {
    let tbody = document.getElementById('resultList');
    tbody.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_email = tr.insertCell();
        let td_idade = tr.insertCell();

        let td_acao = tr.insertCell();

        td_id.innerHTML = data[i].id;
        td_nome.innerHTML = data[i].nome;
        td_email.innerHTML = data[i].email;
        td_idade.innerHTML = data[i].idade;

        td_acao.innerHTML =
        `<a href="aluno.html?id=` + data[i].id + `&operacao=editar" class="ms-4 btn btn-warning">Editar</a>
        <a href="aluno.html?id=` + data[i].id + `&operacao=excluir" class="ms-4 btn btn-danger">Excluir</a>
        <a href="aluno.html?id=` + data[i].id + `&operacao=visualizar" class="ms-4 btn btn-info">Detalhes</a>`

    }
}
