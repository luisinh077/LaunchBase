const nome = 'Leandro'
const peso = 60
const altura = 1.82
const sexo = 'M'

// calculo do imc

imc = peso / (altura*altura)

console.log(imc)
// exibir situação da pessoa

if (imc >= 30) {
    // Mesnsagem personalizada para homem ou mulher

    if (sexo == 'M') {
        console.log(`${nome}, você está acima do peso, toma cuidado moço, se cuida!`)
    } else {
        console.log(`${nome}, você está acima do peso, se cuida mulher!`)
    }
} else {
    if (sexo == 'M') {
        console.log(`${nome}, você é um homem que não está acima do peso!`)
    } else {
        console.log(`${nome}, meu bem, com essa cintura de bailarina, cuidado para não sumir, você não está acima do peso!`)
    }
}
