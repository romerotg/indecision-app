'use strict';

function square(x) {
    return x * x;
}

console.log('square', square(6));

// const squareArrow = (x) => x * x;
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log('squareArrow', squareArrow(6));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log('getFirstName', getFirstName('Mike Smith'));

var getFirstName2 = function getFirstName2(fullName) {
    return fullName.split(' ')[0];
};

console.log('getFirstName2', getFirstName2('Mike Smith'));