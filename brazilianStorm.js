const notas = [100, 100, 100, 50];

let maiorNota = notas[0];
let menorNota = notas[0];
let soma = 0;
for (let nota of notas) {
    soma += nota;
    if (nota > maiorNota) {
        maiorNota = nota;
    } else if (nota < menorNota) {
        menorNota = nota;
    }
}

media = (soma - menorNota - maiorNota) / (notas.length - 2);
console.log(media)