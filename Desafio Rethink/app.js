
//Atividade 2
const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

//BuscarPessoa(nomePessoa) Atividade 3
function BuscarPessoa(nomePessoa) {
  for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].name === nomePessoa) {
      return pessoas[i];
    } else if (
      i === (pessoas.length - 1)
    ) {
      return "Pessoa não encontrada!"
    }
  }
}
//teste Atividade 3
var nome = prompt("Procure por um nome: ");
console.log(BuscarPessoa(nome))

//BuscarPessoas() Atividade 4
function BuscarPrimeiroNome() {
  var nomePessoas = [];
  pessoas.forEach((pessoa) => {
    var primeiroNome = pessoa.name.split(" ");
    nomePessoas.push(primeiroNome[0]);
  });
  return nomePessoas;
}
//teste Atividade 4
console.log(BuscarPrimeiroNome());

//AdicionarCadastro() Atividade 5
function AdicionarId() {
  for (var i = 0; i < pessoas.length; i++) {
    pessoas[i].id = i + 1;
  }
  return pessoas;
}

//teste atividade 5
console.log(AdicionarId());


//VerificarIdade() Atividade 6
function VerificarIdade() {
  var Adultos = [];
  pessoas.forEach((pessoa) => {
    if (pessoa.age >= 18) {
      Adultos.push(pessoa);
    }
  });
  return Adultos;
}
//teste
console.log(VerificarIdade())

//MediaIdades() Atividade 7
function MediaIdades() {
  var soma = 0,
    quantidade = 0,
    media;
  pessoas.forEach((pessoa) => {
    soma += pessoa.age;
    quantidade += 1;
  });
  media = soma / quantidade;
  return media.toPrecision(4);
}
//teste
console.log(MediaIdades());
