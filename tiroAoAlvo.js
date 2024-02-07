const disparos = [0, 10, 50, 70, 80, 30];

let contador = 0;
for (let tiro of disparos) {
    if (tiro > 70) {
        contador++;
    };
};
if (contador >= 3) {
    console.log(contador);
} else {
    console.log("ELIMINADO");
};