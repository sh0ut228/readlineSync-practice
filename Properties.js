const readlineSync = require('readline-sync');

const calculateDiscount = () => {
    const income = readlineSync.question("Введите высоту ");
    const F = readlineSync.question("Введите ширену ");
    return  [2*income+2*F, F*income]
};

console.log("Пириметр и площадь",calculateDiscount(),", поздравляем :)");