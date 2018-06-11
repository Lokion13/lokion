function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
};

for(var i = 0; i < 100; i++){
    if(isPrime(i)) console.log(i + " - The divider of this number is: 1 and " + i);
};
// console.log(isPrime() + "The divider of this number is: " + '1' + isPrime());



// function isPrime(num) {
//     if(num < 2) return false;
//     for (var i = 2; i < num; i++) {
//         if(num%i==0)
//             return false;
//     }
//     return true;
// };

// for(var i = 0; i < 100; i++){
//     if(isPrime(i)) console.log(i);
// };