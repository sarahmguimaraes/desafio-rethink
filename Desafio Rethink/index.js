const pessoas = [
    { id: 1, name: "Fabiana Araújo", age: 33 },
    { id: 2, name: "Gabriel Gomes", age: 25 },
    { id: 3, name: "Fernando Henrique", age: 17 },
    { id: 4, name: "Ana Luiza", age: 2 },
    { id: 5, name: "Geralda do Nascimento", age: 93 },
    { id: 6, name: "Miguel Souza", age: 70 },
    { id: 7, name: "Antonio Miguel", age: 69 }
]
var nomePessoa = "Gabriel Gomes"
var nomePessoas = []
var Adultos = []
var inputNome = document.getElementById('nome')
var inputIdade = document.getElementById('idade')
var inputProfissao = document.getElementById('profissao')
var inputEmail = document.getElementById('email')
var inputData = document.getElementById('data')
var submit = document.getElementById('btnSubmit')

//AdicionarCadastro() Atividades 2 e 5
//BuscarPessoa(nomePessoa) Atividade 3
//BuscarPessoas() Atividade 4
//VerificarIdade() Atividade 6
//MediaIdades() Atividade 7

function AdicionarCadastro() {
    var id = ++pessoas.length
    pessoas.push({ id, 'name': inputNome.value, 'age': inputIdade.value })
    console.log(pessoas)
}

function BuscarPessoa(nome) {
    var pessoa = pessoas.find(pessoa => pessoa.name = nome)
    if (!(pessoa == undefined)) {
        console.log(pessoa)
    }
    else {
        console.log("Pessoa não encontrada")
    }
}

function BuscarPessoas() {
    pessoas.forEach(pessoa => {
        var primeiroNome = pessoa.name.split(" ")
        nomePessoas.push(primeiroNome[0])

    });
    console.log(nomePessoas)
}

function VerificarIdade() {
    pessoas.forEach(pessoa => {
        if (pessoa.age >= 18) {
            Adultos.push(pessoa)
        }
    });
    console.log(Adultos)
}
function MediaIdades() {
    var soma = 0, quantidade = 0, media
    pessoas.forEach(pessoa => {
        soma += pessoa.age
        quantidade += 1
    });
    media = soma / quantidade
    console.log(media.toPrecision(4))
}