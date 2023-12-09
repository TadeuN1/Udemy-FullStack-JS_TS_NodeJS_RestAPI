const timer = setInterval(() => {
    console.log("Timer iniciado");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 3000);