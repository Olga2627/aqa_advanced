const users = [
    { name: "Тарас", email: "tarik@gmail.com", age: 28 },
    { name: "Михайло", email: "misha@gmail.com", age: 25 },
    { name: "Іван", email: "ivasy@gmail.com", age: 30 }
  ];
  
  for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
  }