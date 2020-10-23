const bhaskara = (a, b, c) => {
    let delta = (b**2) - (4 * a * c);
    if (delta < 0) {
        return 'Delta Negativo'
    }else{
        let vetor = [];
         let x1 = (-b + Math.sqrt(delta) / 2 * a);
         let x2 = (-b - Math.sqrt(delta) / 2 * a);

         vetor.push(x1);
         vetor.push(x2);

         return vetor;
    }
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));