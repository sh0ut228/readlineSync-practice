const readlineSync = require('readline-sync');
function calculateAverageGrade() {
    const num1 = readlineSync.question('Введите первое число): ')
    const num2 = readlineSync.question('Введите второе число): ')
    const num3 = readlineSync.question('Введите третье число): ')
    return `${num1}x + ${num2} = ${num3}`;
};
console.log(calculateAverageGrade());