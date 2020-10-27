function arredondamento (nota){
    if (nota < 38) {
        return "Não é possível fazer o arredondamento";
    }

    if (nota % 5 >= 3) {
        return nota + (5 - (nota%5))
    }
}

console.log(arredondamento(84))