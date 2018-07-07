/**
 * 
 * Arquivo: classes.ts
 * Author: Glaucia Lemos
 * Description: Arquivo para revisar alguns itens sobre Typescript
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

class Spacecraft {
    constructor(public propulsor: string) {}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

//==> Uso de heranças em TypeScript:
class MilleniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number
    constructor() {
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace() {
        if(Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

// ==> Uso de Interfaces em Typescript:
interface Containership {
    cargoContainers: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job?...: ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)