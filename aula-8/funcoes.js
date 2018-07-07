/**
 *
 * Arquivo: funcoes.ts
 * Author: Glaucia Lemos
 * Description: Arquivo para revisar alguns itens sobre Typescript
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */
var msg = "Help me, Obi-Wan! You're the only one can help us!";
console.log(msg);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite Droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// Exemplos de Funções com Arrow Functions:
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2D2');
//# sourceMappingURL=funcoes.js.map