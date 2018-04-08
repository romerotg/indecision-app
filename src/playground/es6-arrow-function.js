function square(x)
{
    return x * x;
}

console.log('square', square(6));

// const squareArrow = (x) => x * x;
const squareArrow = (x) =>
{
    return x * x;
};

console.log('squareArrow', squareArrow(6));

const getFirstName = (fullName) =>
{
    return fullName.split(' ')[0];
};

console.log('getFirstName', getFirstName('Mike Smith'));

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log('getFirstName2', getFirstName2('Mike Smith'));