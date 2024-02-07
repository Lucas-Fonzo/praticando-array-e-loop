precos = [100, 500, 100, 200, 50];
let soma = 0;
let menorNumero = precos[0];
//let menorNumero = Number.POSITIVE_INFINITY;

for (let valor of precos) {
    soma += valor;
};

for (let numero of precos) {
    if (numero < menorNumero) {
        menorNumero = numero;
    };
};


if (precos.length >= 5) {
    console.log(soma - menorNumero);
} else {
    console.log(soma);
};