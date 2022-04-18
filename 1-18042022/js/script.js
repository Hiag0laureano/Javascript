// Janela de alerta criada em javascript

function bemvindo() {
  alert("Olá. Seja bem vindo");
}
// Vamos solicitar ao usaurio que entre com seu nome utilizaremos o prompt associado a uma variavel

function nome() {
  var nome = "";
  nome = prompt("Digite o seu nome");
  alert(nome.toUpperCase()); //nome em letras maiusculas
}

// calcular as 5 operacões aritimeticas
function operacoes() {
  var numero1 = prompt("Digite um numero");
  var numero2 = prompt("Digite outro numero");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;

  document.getElementsByTagName("button")[0].innerHTML =
    "Os resultados são: <br><br>" +
    "Soma: " +
    soma +
    "<br>subtração: " +
    subtrair +
    "<br>multiplicação: " +
    multiplicar +
    "<br>divisão: " +
    dividir +
    "<br>resto: " +
    resto;
}
function operacoesComDiv() {
  var numero1 = prompt("Digite um numero");
  var numero2 = prompt("Digite outro numero");

  var soma = parseInt(numero1) + parseInt(numero2);
  var subtrair = numero1 - numero2;
  var multiplicar = numero1 * numero2;
  var dividir = numero1 / numero2;
  var resto = numero1 % numero2;

  for (var i = 0; i <= 2; i++) {
    document.getElementsByTagName("div")[i].innerHTML =
      "Os resultados são: <br><br>" +
      "Soma: " +
      soma +
      "<br>subtração: " +
      subtrair +
      "<br>multiplicação: " +
      multiplicar +
      "<br>divisão: " +
      dividir +
      "<br>resto: " +
      resto;
    document.getElementsByTagName("div")[i].style.padding = "30px";
    document.getElementsByTagName("div")[i].style.backgroundColor =
      "rgb(" + 100 * i + ",200,100)";
    document.getElementsByTagName("div")[i].style.margin = "30px";
    document.getElementsByTagName("div")[i].style.borderRadius = "30px";
  }
}

function tamanhoDiv() {
  document.getElementsByTagName("div")[0].style.width = "50%";
  document.getElementsByTagName("div")[0].style.transition = "ease 0.5s";
}
function tamanhoNormalDiv() {
  document.getElementsByTagName("div")[0].style.width = "90%";
}
