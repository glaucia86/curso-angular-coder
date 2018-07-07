"use strict";
/**
 *
 * Arquivo: classes.ts
 * Author: Glaucia Lemos
 * Description: Arquivo para revisar alguns itens sobre Typescript
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var base_ships_1 = require("../aula-13/base-ships");
var starfighters_1 = require("../aula-13/starfighters");
var _ = require("lodash");
console.log(_.pad("Exemplos em Typescript", 40, "="));
//==> Uso de classes em TypeScript:
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
//==> Uso de heranças em TypeScript:
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
// ==> Uso de Interfaces em Typescript:
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job?...: " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
//# sourceMappingURL=app.js.map