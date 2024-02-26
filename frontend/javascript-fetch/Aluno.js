
var operacao = ''

document.getElementById('form-aluno').addEventListener('submit', (e) => {
    e.preventDefault();

    let id = document.getElementById('id-aluno').value;

    if (id == 0)
        adicionarAluno();
    else if (operacao == 'editar')
        atualizarAluno(id);
    else if (operacao == 'excluir')
        deletarAluno(id);
    else if (operacao == 'visualizar')
        window.location.href = 'index.html';
})

window.addEventListener('load', (e) => {

    const param = new URLSearchParams(window.location.search);
    const id = parseInt(param.get('id'));

    operacao = param.get("operacao");

    console.log('operacao' + operacao);

    if (id > 0)
        obterAluno(id);
})

function deletarAluno(id) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let options = {
        method: 'DELETE',
        headers: myHeaders
    };

    fetch('https://localhost:7233/api/Alunos/' + id, options)
        .then(response => {
            console.log(response.status);
            if (response.status >= 200 && response.status < 300) {
                console.log('Excluído');
                window.location.href = 'index.html';

            } else
                alert('Falha ao tentar excluir');
        })
        .catch(error => console.log(error))
}

function adicionarAluno() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const data = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
    }

    var options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    };

    fetch('https://localhost:7233/api/Alunos/', options)
        .then(response => {
            console.log(response.status);
            if (response.status >= 200 && response.status < 300) {
                console.log('adicionado');
                window.location.href = 'index.html';

            } else
                alert('Falha ao adicionar');
        })
        .catch(error => console.log(error))
}

function atualizarAluno(id) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const data = {
        id: id,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
    }

    var options = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(data)
    };

    fetch('https://localhost:7233/api/Alunos/' + id, options)
        .then(response => {
            console.log(response.status);
            if (response.status >= 200 && response.status < 300) {
                console.log('atualizado');
                window.location.href = 'index.html';

            } else
                alert('Falha ao atualizar');
        })
        .catch(error => console.log(error))
}

window.addEventListener('load', (e) => {

    const param = new URLSearchParams(window.location.search);
    const id = parseInt(param.get('id'));

    console.log(id);

    if (id > 0)
        obterAluno(id);
})

function obterAluno(id) {

    fetch('https://localhost:7233/api/Alunos/' + id)
        .then(response => response.json())
        .then(data => mostrarAluno(data))
        .catch(error => console.log(error))
}

function mostrarAluno(data) {
    document.getElementById('id-aluno').value = data.id;
    document.getElementById('nome').value = data.nome;
    document.getElementById('email').value = data.email;
    document.getElementById('idade').value = data.idade;

    if (operacao == 'editar')
        document.getElementById('btn-submit').innerHTML = "Salvar"
    else if (operacao == 'excluir')
        document.getElementById('btn-submit').innerHTML = "Excluir"
    else if (operacao == 'visualizar')
        document.getElementById('btn-submit').innerHTML = "Voltar"

    if (operacao != 'editar') {
        document.getElementById('id-aluno').disabled = true;
        document.getElementById('nome').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('idade').disabled = true;
    }
}