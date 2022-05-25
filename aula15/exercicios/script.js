/*
Ao todo, temos x números cadastrados
O maior valor informado foi X
O menor valor informado foi X
Somando todos os valores, temos X

*/
var n = document.getElementById("numero")
var lista = document.getElementById('lista')
var resultado = document.getElementById('resultado')
var valores = []

function isNumero(numero){
    if (Number(numero) >= 1 && Number(numero) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(numero, lista){
    if (lista.indexOf(Number(numero)) != -1){
        return true
    }else{
        return false
    }
}

function adiciona(){
    if (isNumero(n.value) && !inLista(n.value, valores)){
        valores.push(Number(n.value))
        var item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado`
        lista.appendChild(item)
    } else{
        alert(`Valor inválido`)
    }
}

function fazTudo(){
    if (valores.length == 0){
        alert("Adicione valores!")
        return
    }
    var select = document.getElementById('resultado')
    var soma = 0
    for (n in valores){
        var numero = Number(valores[n])
        soma = soma + numero
    }
    select.innerHTML = `Ao todo temos ${valores.length} números cadastrados`
    select.innerHTML = select.innerHTML + `<br>O Maior número informado foi ${Math.max(...valores)}`
    select.innerHTML = select.innerHTML + `<br>O Menor número informado foi ${Math.min(...valores)}`
    select.innerHTML = select.innerHTML + `<br>Somando todos os valores, temos ${soma}`
}