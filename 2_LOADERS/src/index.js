import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";
import warning from "./templates/warning.html";
import "./styles/warning.css";
import fraseTXT from "./files/frase.txt";
import jsonDescricao from "./files/descricao.json";

const title = new Title();
title.create("Primeira Página");

const image = new Image();
image.insertBlobImage();

const button = new Button();
button.create();

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4 };
let { a, b, ...teste } = obj;
console.log(a);
console.log(b);
console.log(teste);

// Import html
const body = document.querySelector("body");
body.innerHTML += warning;

// Import Arquivo TXT
const frase = fraseTXT;
console.log(frase);

// Import JSON
const descricao = jsonDescricao;
console.log(descricao);
