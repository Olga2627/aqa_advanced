const car1 = {
    brand: "Ssang Yong",
    model: "Actyon",
    year: 2020
  };
  
  const car2 = {
    brand: "ЗАЗ",
    model: "Таврія",
    owner: 2021
  };
  
  const car3 = { ...car1, ...car2 };
  
  console.log(car3);