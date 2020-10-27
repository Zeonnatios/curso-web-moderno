function bissexto (year) {

    if (year <= 0)return false;
    else if (year % 400 == 0) return true;
    else if (year % 100 == 0) return false;
    else if (year % 4 == 0) return true;
    else return false;
}

console.log(bissexto(0))
console.log(bissexto(100))
console.log(bissexto(400))
console.log(bissexto(4))
console.log(bissexto(1999))
console.log(bissexto(2021))
console.log(bissexto(2020))