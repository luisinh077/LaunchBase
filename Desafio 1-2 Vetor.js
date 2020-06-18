// criar um programa que armazena dados da empresa rocketseat

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

// Imprimir em tela o nome da empresa e seu endereço

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)
