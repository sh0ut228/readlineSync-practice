const readlineSync = require('readline-sync');

const calculateDiscount = () => {
    const income = readlineSync.question("Введите цену товара ");
    const F = readlineSync.question("Введите скидку ");
    return  income-((F / 100) * income);
};

console.log("Цена товара с учётом скидки",calculateDiscount(),", поздравляем :)");