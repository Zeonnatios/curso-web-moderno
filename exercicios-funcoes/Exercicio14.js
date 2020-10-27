function frutas(fruta) {
    switch (fruta) {
        case "maça":
            console.log("Não vendemos esta fruta aqui");
            break;
        case 'kiwi':
            console.log("Estamos com escassez de kiwis");
            break;
        case 'melancia':
            console.log("Aqui está, são 3 reais o quilo");
            break;
        default:
            console.log("não temos essa opção de fruta aqui");
            break;
    }
}

frutas('melancia')
frutas('maça')
frutas('kiwi')
frutas('laranja')