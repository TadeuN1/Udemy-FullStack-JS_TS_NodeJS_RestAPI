'use strict';

const menu = document.querySelector('#menu');


menu.addEventListener('click', (event) => {
    const {target} = event;

      switch (target.getAttribute("class")) {
        case "home":
            console.log("home");
            break;

        case "sobre":
            console.log("sobre");
            break;

        case "contato":
            console.log("contato");
            break;
    }
});