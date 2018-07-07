/**
 * 
 * Arquivo: base-ships.ts
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

interface Containership {
    cargoContainers: number
}

export { Spacecraft, Containership }
