exports.pagamentoParcela = function (valor, dias) {
    var total =0

    if (dias <= 30) {
         total = valor + (0.05*valor)
    }
    else if (dias >= 31 && dias <= 60) {
         total = valor + (0.10*valor)
        
    }
    else if (dias > 60) {
         total = valor + (0.15*valor)
    }
    return total
    
}
