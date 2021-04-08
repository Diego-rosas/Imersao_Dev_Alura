var valorEmDolarTexto = prompt("Qual o valor em dolar você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

//alert(valorEmDolarNumero)

var valorEmReal = valorEmDolarNumero * 5.50 
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)