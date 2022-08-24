const dbConnection = require("./mongodbConn");

const update = async () => {
  const data = await dbConnection();
  const result = await data.updateOne(
    { name: "Galaxy A3" },
    { $set: { price: 18000, category: "Smartphone" } }
  );
  if (result.acknowledged) {
    console.log("Data updated");
  }
};

update();
