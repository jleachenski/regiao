const prompt = require("prompt-sync");

const paises = [];

const lerIndicePais = () => {
  listarPaises();

  if (paises.length > 0) {
    const indice =
      prompt("Digite o indice do pais que você deseja atualizar: ") - 1;

    if (indice >= 0 && indice < paises.length) {
      return indice;
    } else {
      console.log("Indice inválido");
    }
  }
};

const validarPais = (pais) => pais.nome != "" && pais.sigla.length == 2;

const modelo = () => {
  const nome = prompt("Digite o nome do país: ");
  const sigla = prompt("Digite a sigla do país: ").toUpperCase();

  if (validarPais({ nome, sigla })) {
    return { nome, sigla };
  }

  console.log("Dados inválidos");
};

const criarPais = () => {
  const pais = modelo();

  if (pais != undefined) {
    paises.push(pais);

    console.log("Pais criado com sucesso");
  }
};

const listarPaises = () => {
  if (paises.length == 0) {
    console.log("Nenhum pais está cadastrado");
    return false
  } else {
    paises.forEach((pais, indice) => {
      console.log(indice + 1, pais);
    });
    return true
  }
};

const atualizarPais = () => {
  const indice = lerIndicePais();

  if (indice != undefined) {
    const pais = modelo();

    if (pais != undefined) {
      paises[indice] = pais;

      console.log("Pais atualizado com sucesso");
    }
  }
};

const removerPais = () => {
  const indice = lerIndicePais();
  if (indice != undefined) {
    paises.splice(indice, 1);

    console.log("Pais removido com sucesso");
  }
};

module.exports = {
    criarPais,
    listarPaises,
    atualizarPais,
    removerPais,
    lerIndicePais
}