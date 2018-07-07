/**
 * 
 * Arquivo: starfighters.ts
 * Author: Glaucia Lemos
 * Description: Arquivo para revisar alguns itens sobre Typescript
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

import { Spacecraft, Containership } from './base-ships'

export class MilleniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number
    constructor() {
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}