'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
document.querySelector('body').style.background = 'red';
})

btn.addEventListener('mouseover', (event) => {
    console.log(event);
})