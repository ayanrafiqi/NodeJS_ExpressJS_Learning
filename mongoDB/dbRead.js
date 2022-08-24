//connecting NODEJS to MongoDB and printing the collection records of db on Console.

const dbConnection = require("./mongodbConn");

// readinf the data bases using promises and then

// dbConnection().then((resp)=>{
//      resp.find().toArray().then((data)=>{
//             console.warn(data);
//     });

// })

// other way of doing it using async await

const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.warn(data);
};

main();
