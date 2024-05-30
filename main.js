const form = document.getElementById('form-agenda');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');
    
    if (numero.includes(numeroContato.value)) {
        alert (`O contato ${numeroContato.value} já foi inserido`);
    } else {
        nome.push(nomeContato.value);
        numero.push(numeroContato.value);
    
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}








