//

const num = 3;
function multipleBy2(inputNumber) {
    const result = inputNumber * 2;
    return result;
}

const output = multipleBy2(num);
const newOutput = multipleBy2(10);



//dry principle

function multipleBy3(inputNumber) {
    return inputNumber * 3
}
const outputMultiplyBy3 = multipleBy3(3);
const newOutputMultiplyBy3 = multipleBy3(5);



// Here we break dry principle
function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }
    return output;
}

const myArray = [1, 2, 3];
const outputMultiplyArray = copyArrayAndMultiplyBy2(myArray);

function copyArrayAndDivideBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }
    return output;
}

const myArray2 = [1, 2, 3];
const outputDivideArray = copyArrayAndDivideBy2(myArray);