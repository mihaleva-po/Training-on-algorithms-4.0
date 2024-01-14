const factorial = (x) => {
    if (x <= 2) {
        return x;
    }
    return factorial(x - 1) * x;
}

console.log(factorial(3));