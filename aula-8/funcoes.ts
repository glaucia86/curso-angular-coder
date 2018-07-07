/**
 * 
 * Arquivo: funcoes.ts
 * Author: Glaucia Lemos
 * Description: Arquivo para revisar alguns itens sobre Typescript
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

let msg: string = "Help me, Obi-Wan! You're the only one can help us!"
console.log(msg)

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode);

let favoriteDroid: string
favoriteDroid = "BB-8"
console.log("My favorite Droid is " + favoriteDroid);

let isEnoughToBeatMF = function(parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

// Exemplos de Funções com Arrow Functions:
let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2D2')

// Exemplos de uso de parâmetros em Ts
function incrementar(velocidade: number, incremento: number = 1) : number {
    return velocidade + incremento
}

console.log(`Incremente(5,1) = ${incrementar(5,1)}`)
console.log(`Incremente(5) = ${incrementar(5)}`)