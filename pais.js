const prompt = require("prompt-sync")

const paises = []


const validarPais = pais => pais.nome != "" && pais.sigla.length == 2

const criarPais = () => {

    const nome = prompt("Digite o nome do país: ")
    const sigla = prompt("Digite a sigla do país: ").toUpperCase()

    if(validarPais({nome, sigla})) {
        paises.push({nome, sigla})
        console.log("Pais criado com sucesso")
    } else {
        console.log("Pais inválido")
    }

}



