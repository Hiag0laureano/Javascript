function array1() {
  var nomes = ["Paulo", "John", "Vanessa"];
  // length pega o tamanho do array
  for (var i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
  }
  //   vamos adiconar um nome
  nomes.push("Guilhermel");
  console.log(nomes);
  //   remover o ultimo alemento array
  nomes.pop();
  console.log(nomes);
  //   remover o primeiro elemento array
  nomes.shift();
  console.log(nomes);
  //   Adicionar o priemiro elemento array
  nomes.unshift("wagner");
  nomes.push("Gabriela");
  console.log(nomes);
  //   Vamos criar uma matriz com nomes e idades
  var dados = [
    ["Nome", "Idades"],
    ["Pedro", "15"],
    ["Marcos", "21"],
    ["Deborah", "22"],
  ];
  console.log(dados);
}
