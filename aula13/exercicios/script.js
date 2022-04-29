function contar(){
    var ini = document.getElementById('inicio').value
    var fi = document.getElementById('fim').value
    var pas = document.getElementById('passo').value
    var inicio = Number.parseInt(ini)
    var fim = Number.parseInt(fi)
    var passo = Number.parseInt(pas)
    var divResultado = document.getElementById('resultado')

    if (ini == "" || fi == "" || pas == "" || pas == 0){
        alert('Você não preencheu CORRETAMENTE!')
    }
    if (inicio < fim){
        for (var inicio = inicio; inicio <= fim; inicio = inicio + passo){
            divResultado.innerHTML += `${inicio} \u{1F449} `
        }
    }else{
        for (var inicio = inicio; inicio >= fim; inicio = inicio - passo){
            divResultado.innerHTML += `${inicio} \u{1F449} `
        }
    }
    divResultado.innerHTML += `\u{1F3C1} `
    //divResultado.innerHTML = res
}


