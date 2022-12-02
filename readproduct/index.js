
// const mongo = require('mongodb');
// const { valid } = require('uuid4');
// const MongoClient = mongo.MongoClient;

// const uuid4 =require ("uuid4");

// const url="mongodb://productapi1:4MGJEQskoObZfetWbS8NxF8Ka0Z0mHVPXVX9AW1XWw712Fs6EzBTnNiFVGru53w5kFM26d35097MACDboHAP6Q==@productapi1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productapi1@"
// const client=new MongoClient(url)


// module.exports = async function (context, req) {
//     await client.connect();
//   const database=client.db("Productdb");
//   const collection=database.collection("newproduct");
//   // const {page,limit} =context.query;
//   // const page=parseInt(context.query.page)
//   // const limit=parseInt(context.query.limit)
//   // if(!page) page =1;
//   // if(!limit) limit =2;
//   // const skip =( page-1)*2;
  
//   // const {page=1,limit=2} =context.query
//   const mylist=await collection.find({}).toArray()
//   // .skip(skip).limit(limit)
//   // .limit(limit*1).skip((page-1)*limit) 
//    .skip(skip).limit(limit)
//   req.send({page:page,limit:limit,users:users});
//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: mylist
//     };
// }
const {Read}=require("../SharedCode/handler")
module.exports={
  Read
 }