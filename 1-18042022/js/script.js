// Janela de alerta criada em javascript
// alert("Olá. Seja bem vindo");
// Vamos solicitar ao usaurio que entre com seu nome utilizaremos o prompt associado a uma variavel
// var nome = "";
// nome = prompt("Digite o seu nome")
// alert(nome.toUpperCase()); //nome em letras maiusculas

// calcular as 5 operacões aritimeticas

var numero1 = prompt("Digite um numero")
var numero2 = prompt("Digite outro numero")

var soma = parseInt(numero1) + parseInt(numero2);
var subtrair = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto = numero1 % numero2;

console.log(
    "Os resultados são: \n\n"+
    "Soma: "+soma+
    "\nsubtração: "+subtrair+
    "\nmultiplicação: "+multiplicar+
    "\ndivisão: "+dividir+
    "\nresto: "+resto
);