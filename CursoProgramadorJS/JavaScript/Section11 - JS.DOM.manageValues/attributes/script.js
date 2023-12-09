'use strict';

const div = document.querySelector("div");

div.setAttribute('id', "teste");
div.setAttribute("class", "active");
div.setAttribute("class", "backgroundBlue");
div.removeAttribute("class")
console.log(div.id, div.className);