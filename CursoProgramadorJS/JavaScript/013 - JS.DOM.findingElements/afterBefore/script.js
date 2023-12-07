'use strict';

const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Olá, Naira.";



container.after(newP);
container.before("Oi, olá")
