const readlineSync = require('readline-sync');
const calculateDistance = () => { 
    const x = readlineSync.question('X1 ');
    const y = readlineSync.question('Y1 '); 
    const z = readlineSync.question('X2 ');
    const w = readlineSync.question('Y2 ');
    return Math.sqrt((z - x) ** 2 + (w - y) ** 2) ;
}
console.log(calculateDistance());