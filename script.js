let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let mult = document.getElementById("mult");
let divis = document.getElementById("divis");

sum.addEventListener('click', function() {
  document.getElementById("result").value = parseInt(valor1.value) + parseInt(valor2.value);
});

sub.addEventListener('click', function() {
  document.getElementById("result").value = parseInt(valor1.value) - parseInt(valor2.value);
});

mult.addEventListener('click', function() {
  document.getElementById("result").value = parseInt(valor1.value) * parseInt(valor2.value);
});

divis.addEventListener('click', function() {
  document.getElementById("result").value = parseInt(valor1.value) / parseInt(valor2.value);
});
