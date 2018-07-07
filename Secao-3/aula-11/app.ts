/**
 * 
 * Arquivo: classes.ts
 * Author: Glaucia Lemos
 * Description: Arquivo para revisar alguns itens sobre Typescript
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

import { Spacecraft, Containership } from '../aula-13/base-ships'
import { MilleniumFalcon } from '../aula-13/starfighters'

import * as _ from 'lodash'


console.log(_.pad("Exemplos em Typescript", 40, "="))

//==> Uso de classes em TypeScript:
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

//==> Uso de heranças em TypeScript:
let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

// ==> Uso de Interfaces em Typescript:
let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for the job?...: ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)
