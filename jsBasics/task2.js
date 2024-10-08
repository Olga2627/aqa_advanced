const log = console.log;

let firstName = "Olha";
const secondName = "Yevhen";

let greeting = "Congrats! " + firstName + " and " + secondName + ", you won a billion dollars!Woo hoo!";
let greetingTemp = `Congrats! ${firstName} and ${secondName}, you won a billion dollars!Woo hoo!`;
log(greetingTemp); // Виведе: "Congrats! Olha and Yevhen, you won a billion dollars!Woo hoo!"
log(greeting); // Виведе: "Congrats! Olha and Yevhen, you won a billion dollars!Woo hoo!"
