"use strict";

const inputValorElement = document.querySelector(".js-inputValor");
const btn1Element = document.querySelector(".js-btn1");
const btn2Element = document.querySelector(".js-btn2");
const html = document.querySelector(".js-text");

const planetas = {
  tierra: 9.8,
  marte: 3.7,
  jupiter: 24.8,
};
const data = {
  planeta1: "Marte",
  planeta2: "Jupiter",
};

const add = function () {
  let valorInput = inputValorElement.value;
  return valorInput;
};

const calcMarte = function () {
  const calPesoMarte = (add() * planetas.marte) / planetas.tierra;
  const calredondeado = Math.round(calPesoMarte);
  return calredondeado;
};

const calcJupiter = function () {
  const calPesoJupiter = (add() * planetas.jupiter) / planetas.tierra;
  const calredondeado = Math.round(calPesoJupiter);
  return calredondeado;
};

//handler

function handlerClick1() {
  if (add() === "") {
    html.innerHTML = "No has ingresado ningún valor";
  } else {
    html.innerHTML = `Tu peso en ${data.planeta1} es: ${calcMarte()} kg</p>`;
  }
}

function handlerclick2() {
  if (add() === "") {
    html.innerHTML = "No has ingresado ningún valor";
  } else {
    html.innerHTML = `Tu peso en ${data.planeta2} es: ${calcJupiter()} kg</p>`;
  }
}

//listener
btn1Element.addEventListener("click", handlerClick1);
btn2Element.addEventListener("click", handlerclick2);
