//Pegando elementos do dom
const formPessoa = document.querySelector("#form-pessoa")
const divlista = document.querySelector("#div-lista-pessoas")

// Criando array pessoas
const pessoas = []


//Capturar o evento submit
formPessoa.addEventListener ('submit', (evt) => {
//Interroper o efeito padrao submeter dos dados do formulario
  evt.preventDefault()

  //Criar um objeto formulario
  const dadosFormPessoas = new FormData(formPessoa)

//Criar um objeto literal
const pessoa = {
nome: dadosFormPessoas.get ('nome'),
idade: dadosFormPessoas.get ('idade'),
renda: dadosFormPessoas.get ('renda')
}

})