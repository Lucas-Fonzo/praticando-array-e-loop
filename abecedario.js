let letra = 'm';
let palavras = ['aba', 'er', 'man', 'min'];
let erros = 0;
for (let palavra of palavras) {
    if (palavra[0] !== letra) {
        erros += 1;
    }
}
console.log(erros);

