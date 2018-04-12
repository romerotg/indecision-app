// arguments object - no longe bound with arrow functions

const add = (a, b) =>
{
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1000));

// this keyworks - no longer bound

const user =
{
    name: 'Romero',
    cities: ['Recife', 'Montevideo', 'Buenos Aires'],
    printPlacesLived()
    {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) =>
        // {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    },
};
console.log(user.printPlacesLived());

// challenge area

const multiplier =
{
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 5,
    multiply()
    {
        return this.numbers.map((number) => number * this.multiplyBy);
    },
};

console.log(multiplier.multiply());