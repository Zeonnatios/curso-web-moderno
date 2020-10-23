const jurosSimples = (C, I, T) => {
    let resultado = C + ((C * I) * T);
    return resultado;
}

const jurosComposto = (C, I, T) => {
    let resultado = C * ((1+I) ** T);
    return resultado;
}


console.log("Juros Simples: " + jurosSimples(3000, 0.1, 2));
console.log("Juros Composto: " + jurosComposto(3000, 0.1, 2));