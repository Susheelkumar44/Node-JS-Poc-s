exports.factorial = function factorial (x) {
    if (x==0) return 1
    else if (x<0) return "Invalid Number"
    return x * factorial(x-1)
} 