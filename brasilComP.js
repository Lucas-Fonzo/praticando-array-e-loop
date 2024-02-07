let palavras = ["aveia", "manha", "ave"];
let primeiraLetra = "a";
let segundaLetra = "v";

let encontrada = 0;
for (i = 0; i < palavras.length; i++) {
    if ((palavras[i])[0] === primeiraLetra) {
        if ((palavras[i])[1] === segundaLetra) {
            console.log(palavras[i]);
            encontrada++;
        };
    };
};

if (encontrada === 0) {
    console.log("NENHUMA");
};