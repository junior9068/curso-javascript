function tabuada(){
    var n = Number.parseInt(document.getElementById('numero').value)
    var res = document.getElementById('resultado')
    res.innerHTML = ""
    var a = "a"
    var b = ""
    if (document.getElementById('numero').value.length == 0) {
        alert('Entre com um valor válido')
    }else{
        c = 1
        var lista = []
        while (c <= 10) {
            //console.log(`${n} x ${c} = ${n * c}`)
            //lista.push(`${n} x ${c} = ${n * c}`)
            res.innerHTML += `${n} x ${c} = ${n * c} <br>`
            c++
        }
        //res.innerHTML = lista
    }
    
}
