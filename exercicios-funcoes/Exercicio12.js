const fatorial = (numero) => {

    var result = 1;
    for (let i = 1; i <= numero; i++) {
        result = result * i;
    }
    return result;
}

console.log(fatorial(5))
console.log(fatorial(10))