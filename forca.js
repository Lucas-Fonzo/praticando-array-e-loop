let palpite = "a";
let palavra = "abelha";

let contador = 0;
for (let letra of palavra) {
    if (letra === palpite) {
        contador++;
    };
};
console.log(contador);