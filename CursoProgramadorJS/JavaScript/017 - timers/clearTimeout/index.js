const timer = setTimeout(() => {
    console.log("Timer iniciado");
}, 1000);

console.log("Meu console.");
clearTimeout(timer);