//Importando arquivos
import { calcDesconto } from './scripts_calculos.js';

const formPessoa = document.querySelector("#form-pessoa");
const divLista = document.querySelector("#div-lista-pessoas");
const btnLimpar = document.querySelector("#btn-limpar");

const pessoas = [];

formPessoa.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const dadosFormPessoa = new FormData(formPessoa);

    const pessoa = {
        nome: dadosFormPessoa.get("nome"),
        idade: dadosFormPessoa.get("idade"),
        renda: dadosFormPessoa.get("renda")
    };

    addPessoa(pessoa);

    formPessoa.reset();
});

btnLimpar.addEventListener("click", () => {
    formPessoa.reset();

});

const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa);
    listPessoas();
};

const listPessoas = () => {
    divLista.innerHTML = "";

    pessoas.forEach((elem, i) => {
        divLista.innerHTML += `
            ${i + 1} - ${elem.nome}
            ${elem.idade} anos,
            R$ ${parseFloat(elem.renda).toFixed(2).replace(".", ",")}
            ${calcDesconto(elem)}<br>`;
    });
};