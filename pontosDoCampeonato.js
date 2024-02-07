resultados = [
    "V",
    "E",
    "V",
    "E"
]

soma = 0;
for (let letra of resultados) {
    if (letra === "V") {
        soma += 3;
    } else if (letra === "E") {
        soma += 1;
    };
};

console.log(soma);