sequencia = ">>>>>>>>>"

let carrossel = [0, 1, 2, 3, 4, 5, 6];
for (let simbolo of sequencia) {
    if (simbolo === ">") {
        carrossel.push(carrossel[0]);
        carrossel.shift();
    } else {
        carrossel.unshift(carrossel[6]);
        carrossel.pop();
    };
};
console.log(carrossel[0])