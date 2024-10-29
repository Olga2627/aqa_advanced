const person = {
    firstName: "Тарас",
    lastName: "Шевченко",
    age: 47
  };
  
  person.email = "taras.shevchenko47@gmail.com"; 
  delete person.age; 
  
  console.log(person); 