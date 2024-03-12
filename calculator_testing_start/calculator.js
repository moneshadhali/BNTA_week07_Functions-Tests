const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = function(a, b){
    return a % b;
};

// const even = function(a){
//     if(a % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// };

// const odd = function(a){
//     if(a % 2 !== 0){
//         return true;
//     }else{
//         return false;
//     }
// };

const isEvenOrOdd = function(a){
    if(a % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    isEvenOrOdd,
};
