function valorDecimal(a){
    a = `R$ ${a.toFixed(2).replace("." , ",")}`
    console.log(a)
}

valorDecimal(0.1 + 0.2)