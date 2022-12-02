const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const uuid4 = require("uuid4");
const todayDate = new Date().toISOString().slice(0, 10)
const url = "mongodb://productapi1:4MGJEQskoObZfetWbS8NxF8Ka0Z0mHVPXVX9AW1XWw712Fs6EzBTnNiFVGru53w5kFM26d35097MACDboHAP6Q==@productapi1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productapi1@"
const client = new MongoClient(url)
module.exports = async function (context, req) {
    try{
    await client.connect();
  const database=client.db("Productdb");
  const collection=database.collection("newproduct");
 
  const mylist=await collection.findOne({_id:req.params.id})
  
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: mylist
    };
}catch(err){
err

}}