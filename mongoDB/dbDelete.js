const dbConnection = require ('./mongodbConn.js');

const deleteData= async()=>{
    const data = await dbConnection();
    const result = await data.deleteOne({name:'One plus 10'});
    if(result.acknowledged){
        console.log("data is deleted");
    }
}

deleteData();