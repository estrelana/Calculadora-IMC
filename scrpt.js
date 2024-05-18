const form = document.querySelector("#s1"); //faz com que os campos continuem preenchidos pós submissão
form.addEventListener('submit', function (event) {
  event.preventDefault();
});

function calcularImc() {
  let idade = document.getElementById("idade").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  let imc = peso / (altura * 2);
  document.querySelector("#valorImc").innerText = imc.toFixed(2);
  if (imc <= 18.5) {
    let altIMC = document.getElementById('imc1');
    altIMC.style.cssText =
      'border: 2.8px solid #606C38;'+
      'border-radius:5px;';
  } else if (imc >= 18.6 && imc <= 24.9) {
    let altIMC = document.getElementById('imc2');
    altIMC.style.cssText =
      'border: 2.8px solid #606C38;'+
      'border-radius:5px;';
  } else if (imc >= 25 && imc <= 29.9) {
    let altIMC = document.getElementById('imc3');
    altIMC.style.cssText =
      'border: 2.8px solid #606C38;'+
      'border-radius:5px;';
  } else if (imc >= 30 && imc <= 34.9) {
    let altIMC = document.getElementById('imc4');
    altIMC.style.cssText =
      'border: 2.8px solid #606C38;'+
      'border-radius:5px;';
  } else if (imc >= 35 && imc <= 39.9) {
    let altIMC = document.getElementById('imc5');
    altIMC.style.cssText =
      'border: 2.8px solid #606C38;'+
      'border-radius:5px;';
  }
  else if (imc >= 40) {
    let altIMC = document.getElementById('imc6');
    altIMC.style.cssText =
      'border: 2.8px solid #606C38;'+
      'border-radius:5px;';
  }
}

let botaoSemOnclick = document.querySelector(".calcular"); //caso queira deixar sem onclick no index, usar esta op
botaoSemOnclick.addEventListener("click", () => {
  calcularImc();
});

document.addEventListener('DOMContentLoaded', function () {
  var qualGenero = document.getElementById('genero');// Função para lidar com a mudança de seleção
  qualGenero.addEventListener('change', function () {
    var generoSelecionado = this.value;
    if (generoSelecionado == "fem") {
      var image = document.getElementById("f1");
      if (image) {
        image.src = "./img/fem6.webp";
      }
      var image = document.getElementById("f2");
      if (image) {
        image.src = "./img/fem5.webp";
      }
      var image = document.getElementById("f3");
      if (image) {
        image.src = "./img/fem4.webp";
      }
      var image = document.getElementById("f4");
      if (image) {
        image.src = "./img/fem3.webp";
      }
      var image = document.getElementById("f5");
      if (image) {
        image.src = "./img/fem2.webp";
      }
      var image = document.getElementById("f6");
      if (image) {
        image.src = "./img/fem1.webp";
      }
    } else {
      var image = document.getElementById("f1");
      if (image) {
        image.src = "./img/ob23.webp";
      }
      var image = document.getElementById("f2");
      if (image) {
        image.src = "./img/obs2.webp";
      }
      var image = document.getElementById("f3");
      if (image) {
        image.src = "./img/obs1.webp";
      }
      var image = document.getElementById("f4");
      if (image) {
        image.src = "./img/sobrepeso.webp";
      }
      var image = document.getElementById("f5");
      if (image) {
        image.src = "./img/normal.webp";
      }
      var image = document.getElementById("f6");
      if (image) {
        image.src = "./img/desnutrido.webp";
      }
    }
  });
});