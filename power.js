
function power(base, exponent) {
    // if exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive - multiply base by power(base, exponent - 1)
    else {
        return base * power(base, exponent - 1);
    }
}


const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base}  to the power of ${exponent} is ${result}`);
