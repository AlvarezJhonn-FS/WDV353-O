const { add, subtract, multiply, divide, squareRoot, findMax } = require("./math");

describe("Math functions", () => {
    test("should equal two numbers", () => {
        expect(add(2, 3)).toEqual(5);
    })

    test("should subtract two numbers", () => {
        expect(subtract(5, 3)).toEqual(2);
    }) 

    test("should multiply two numbers", () => {
        expect(multiply(4, 5)).toEqual(20);
    }) 

    test("should divide two numbers", () => {
        expect(divide(10, 2)).toEqual(5);
    }) 

    test("should calculate the square root of a number", () => {
        expect(squareRoot(25)).toEqual(5);
    })
    
    test("should find the maximum number in an array of numbers", () => {
        expect(findMax([1, 5, 3, 9, 2])).toEqual(9);
    }) 
})