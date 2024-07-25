const prompt = require("prompt-sync");
const { lerIndicePais } = require("./pais");

const estados = [];

const lerIndiceEstado = () => {
  listarEstados();

  if (estados.length > 0) {
    const indice =
      prompt("Digite o indice do estado que você deseja atualizar: ") - 1;

    if (indice >= 0 && indice < estados.length) {
      return indice;
    } else {
      console.log("Indice inválido");
    }
  }
};

const validarEstado = (estado) => estado.nome != "" && estado.sigla.length == 2 && estado.pais != undefined;

const modelo = () => {
  const nome = prompt("Digite o nome do estado: ");
  const sigla = prompt("Digite a sigla do estado: ").toUpperCase();
  const pais = lerIndicePais();

  if (validarEstado({ nome, sigla, pais })) {
    return { nome, sigla, pais };
  }

  console.log("Dados inválidos");
};

const criarEstado = () => {
  const estado = modelo();

  if (estado != undefined) {
    estados.push(estado);

    console.log("Estado criado com sucesso");
  }
};

const listarEstados = () => {
  if (estados.length == 0) {
    console.log("Nenhum estado está cadastrado");
  } else {
    estados.forEach((estado, indice) => {
      console.log(indice + 1, estado);
    });
  }
};

const atualizarEstado = () => {
  const indice = lerIndiceEstado();

  if (indice != undefined) {
    const estado = modelo();

    if (estado != undefined) {
      estados[indice] = estado;

      console.log("Estado atualizado com sucesso");
    }
  }
};

const removerEstado = () => {
  const indice = lerIndiceEstado();
  if (indice != undefined) {
    estados.splice(indice, 1);

    console.log("Estado removido com sucesso");
  }
};

module.exports = {
  criarEstado,
  listarEstados,
  atualizarEstado,
  removerEstado,
};
