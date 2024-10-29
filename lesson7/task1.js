function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback(); // викликаємо колбек для парного числа
    } else {
        oddCallback(); // викликаємо колбек для непарного числа
    }
}

function handleEven() {
    console.log("The number is even");
}

function handleOdd() {
    console.log("The number is odd");
}

handleNum(6, handleEven, handleOdd);
handleNum(13, handleEven, handleOdd); 