
Para declarar uma variavel usa-se:
var nome = 'Edilson'

PAra converter uma string em inteiro ou real use:
n = 1

Number.parseInt(n)
Number.parseFloat(n)

Na verso nova da linguagem eh possivel resolver de modo mais simples e enxuto: 

Number(n)

A funcao Number() ja identifica se o numero eh inteiro ou flutuante.

# Tratando Strings

No Javascript para concatenar uma string com uma variavel eh utilizado o + . Nas versoes mais novas foi adicionado o Template String que funciona da seguinte maneira:

nome = 'Edilson'

`Meu nome eh ${nome}`

Usamos a crase ao inves das aspas simples

O nome do ${} eh placeholder

IMPORTANTE: Para apenas strings utilize aspas duplas ou simples e para concatenar strings com alguma variavel utilize crases.

# Tratando numeros

Na seguinte situacao temos : n1 = 10.7

Para imprimir este valor com duas casas apos o ponto utlizamos a funcao toFixed. EX:

n1.toFixed(2)

Para adicionar o R$: 

```n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})```

