function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both numerator and denominator must be numbers.");
    }
    
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    
    return numerator / denominator;
}

const testCases = [
    { numerator: 10, denominator: 2 },
    { numerator: 5, denominator: 0 },
    { numerator: 'a', denominator: 2 },
    { numerator: 10, denominator: 'b' },
    { numerator: 15, denominator: 3 }
];

testCases.forEach(testCase => {
    try {
        const result = divide(testCase.numerator, testCase.denominator);
        console.log(`Result of ${testCase.numerator} / ${testCase.denominator} = ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Робота завершена.");
    }
});
