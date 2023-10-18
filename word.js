const readlineSync = require('readline-sync');
const calculateTime = () => {
const santens = readlineSync.question('Введите предложение: ');
return santens.split(' ').length;
};

console.log(calculateTime());