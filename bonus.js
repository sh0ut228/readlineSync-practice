const readlineSync = require('readline-sync');
function calculateAverageGrade() {
    const num1 = readlineSync.question('Введите зарплату): ')
    const num2 = readlineSync.question('Введите рейтинг производительности): ')
    let proc = 0;
    if(num2 > 8){
        proc=0.2;
    }
    if (num2 <= 8){
        proc=0.1
    }
    return num1 * proc;
};
console.log(calculateAverageGrade());