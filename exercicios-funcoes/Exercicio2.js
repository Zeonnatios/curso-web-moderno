const triangulo =(a,b,c) => {
    if (a==b && a==c) {
        return 'Triangulo Equilátero'
    } else if(a == b || b == c || a == c){
        return 'Triangulo Isósceles'
    }
    else{
        return 'Triangulo Escaleno'
    }
}

console.log(triangulo(1,1,1))
console.log(triangulo(1,1,2))
console.log(triangulo(1,2,3))