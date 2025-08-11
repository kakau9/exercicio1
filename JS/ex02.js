/*Uso de variáveis em JS 
Não é necessario declarar o tipo */
var frase 
frase="Aqui temos uma String"
alert(frase)

var nome 
nome=prompt("Digite o seu nome")
alert("Bem vindo "+nome)

var idade 
idade=prompt("Digite a sua idade:")
alert(idade+" anos")

/*Operações Aritiméticas com o JS*/
var n1,n2,r
n1=9
n2=6
r= n1+n2
alert("O resultado da soma entre "+n1+"+"+n2+"="+r)

/*Operação com valores digitadas pelo usuário*/
/*parseInt faz a conversão para inteiros*/
n1=parseInt(prompt("Digite um número"))
n2=parseInt(prompt("Digite um número"))
r=n1+n2
alert("O resultado da soma entre "+n1+"+"+n2+"="+r)

/*Realize a divisão de dois numeros digitados pelo usuários e apresente o resultado*/
n1=parseFloat(prompt("Digite um número"))
n2=parseFloat(prompt("Digite um número"))
r=n1/n2
alert("O resultado da divisão entre "+n1+"/"+n2+"="+r)
