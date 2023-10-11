const readlineSync = require('readline-sync');

const ncomeTaxCalculator = () => {
    const income = readlineSync.question("Введите свой доход(только честно): = ");
    const proc = 0.15;
    return  income * proc;
};

console.log("Ваш процент налога стостявляет",ncomeTaxCalculator(),", поздравляем :)");