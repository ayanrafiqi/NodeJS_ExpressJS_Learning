const dbConnection = require("./mongodbConn");

const insert = async () => {
  const db = await dbConnection();
  const result = await db.insertMany([
    {
      name: "One plus 10",
      brand: "one plus",
      price: 1990,
      category: "Mobile",
    },
    {
      name: "iphone XR",
      brand: "Apple",
      price: 10090,
      category: "Mobile",
    },
    {
      name: "Galaxy A3",
      brand: "realme",
      price: 19090,
      category: "Mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("Data inserted");
  }
};

insert();
