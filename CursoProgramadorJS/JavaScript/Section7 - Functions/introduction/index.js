
//Function declaration:
function isValid(){
    console.log("Olá mundo!")
    const soma = 1 + 1;

    if(soma === 2){
        return true;
    }
    return soma
    
};

isValid()
//Function expression:
const expression = function(){
    return false;
};
//Arrow function:
const isArrow = () => {
  const multi = 2 * 2;
  return multi;
};
console.log(isArrow());

