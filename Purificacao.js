

const dadoCorrompido = ["*Canis %lupus )familiaris", "Felis) silvestris *catus&", "Sailuropoda@ melanoleuca!"];

let palavraNova = ``;
let dadoDescorrompidos = [];
for (let nome of dadoCorrompido) {
    palavraNova = ``;
    for (let letra of nome) {
        if (letra != '!' && letra != '@' && letra != '#' && letra != '$' && letra != '%' && letra != '&' && letra != '*' && letra != '(' && letra != ')') {
            palavraNova += letra;
        }
    }
    dadoDescorrompidos.push(palavraNova);
}
console.log(dadoCorrompido);
console.log(dadoDescorrompidos);
