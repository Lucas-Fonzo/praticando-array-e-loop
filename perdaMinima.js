let precos = [30, 10, 54, 76, 1, 4, 35];

let perdaMinima = Number.POSITIVE_INFINITY;
for (i = 0; i < precos.length; i++) {
    for (j = 0; j < precos.length; j++) {
        if (i > j) {
            if (perdaMinima > precos[j] - precos[i] && 0 < precos[j] - precos[i]) {
                perdaMinima = precos[j] - precos[i];
            }
        }
    }
}
console.log(perdaMinima);



