const { assert } = require('chai');
const { getFibonacci } = require('../src/fibonacci');

test('Test fibonacci. Input 1. Expect [0]', () => {
    // Arrange
    const input = 1;
    const expectedResult = [1];

    // Act
    const actualResult = getFibonacci(input);

    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test fibonacci. Input 2. Expected [0,1]', () => {
    // Arrange
    const input = 2;
    const expectedResult = [0,1];

    // Act
    const actualResult = getFibonacci(input);

    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test fibonacci. Input 3. Expected [0,1,1]', () => {
    // Arrange
    const input = 3;
    const expectedResult = [0,1,1];

    // Act
    const actualResult = getFibonacci(input);

    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test fibonacci. Input 4. Expected [0,1,1,2]', () => {
    // Arrange
    const input = 4;
    const expectedResult = [0,1,1,2];

    // Act
    const actualResult = getFibonacci(input);

    // Assert
    assert.deepEqual(actualResult, expectedResult);
});

test('Test fibonacci. Input -4. Expected RangeError', () => {
    const input = -1;

    assert.throw(() => {
        getFibonacci(input);
    }, 'Please enter a number more than or equal to 0.');
});