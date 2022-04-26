function verificar(){
    data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.querySelector('input#ano').value
    var divResultado = document.getElementById('resultado')
    if (anoNascimento > anoAtual || anoNascimento < 0 || anoNascimento < 1900 || anoNascimento == ""){
        alert('Verifique o ano')
    }else{
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // img.setAttribute('src', 'bebe-homem.png')
        idade = anoAtual - anoNascimento
        //divResultado.innerHTML = `Sua idade é ${idade}`
        var radios = document.getElementsByName('sexo')
        for (var radio of radios){
            if (radio.checked) {
                if (radio.value == 'masculino'){
                    var genero = 'masculino'
                }else{
                    var genero = 'feminino'
                }
            }
        }
        if (idade >= 0 && idade <= 10 ){
            if (genero == 'masculino'){
                divResultado.innerHTML = `Voce é um bebezinho de ${idade} anos`
                img.setAttribute('src', 'imagens/bebe-homem.png')
            }else{
                divResultado.innerHTML = `Voce é uma bebezinha de ${idade} anos`
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            }
        }else if (idade > 10 && idade < 18){
            if (genero == 'masculino'){
                divResultado.innerHTML = `Voce é um jovem de ${idade} anos`
                img.setAttribute('src', 'imagens/jovem-homem.png')
            }else{
                divResultado.innerHTML = `Voce é uma jovem de ${idade} anos`
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            }
        }else if (idade >= 18 && idade < 60){
            if (genero == 'masculino'){
                divResultado.innerHTML = `Voce é um adulto de ${idade} anos`
                img.setAttribute('src', 'imagens/adulto-homem.png')
            }else{
                divResultado.innerHTML = `Voce é uma adulta de ${idade} anos`
                img.setAttribute('src', 'imagens/adulta-mulher.png')
            }
        }else{
            if (genero == 'masculino'){
                divResultado.innerHTML = `Voce é um idoso de ${idade} anos`
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }else{
                divResultado.innerHTML = `Voce é uma idosa de ${idade} anos`
                img.setAttribute('src', 'imagens/idosa-mulher.png')
            }
        }
        divResultado.appendChild(img)
        divResultado.style.textAlign = 'center'
    }   
        
}
