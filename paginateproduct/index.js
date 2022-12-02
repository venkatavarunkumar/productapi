
const mongo = require('mongodb');
const { valid } = require('uuid4');
const MongoClient = mongo.MongoClient;

const uuid4 =require ("uuid4");

const url="mongodb://productapi1:4MGJEQskoObZfetWbS8NxF8Ka0Z0mHVPXVX9AW1XWw712Fs6EzBTnNiFVGru53w5kFM26d35097MACDboHAP6Q==@productapi1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productapi1@"
const client=new MongoClient(url)


module.exports = async function (context, req) {
    await client.connect();
  const database=client.db("Productdb");
  const collection=database.collection("newproduct");
  

//   const {page,limit} =req.query;
//   const page=parseInt(context.query.page)
//   const limit=parseInt(context.query.limit)
  // if(!page) page =1;
  // if(!limit) limit =2;
//   const skip =( page-1)*2;
  
  // const {page=1,limit=2} =context.query
//  const mylist=await collection.find(
//      {
//        "$or":[ {FirstName:{$regex:'.*'+search+'.*',$options:'i'}}]
//              }
//             ).toArray()
//  [({FirstName:`${req.params.FirstName}`})]
  
  // .limit(limit*1).skip((page-1)*limit) 
//    .skip(skip).limit(limit)
//   req.send({page:page,limit:limit,users:users});
// const searchResult=mylist.filter(val.FirstName===req.query.FirstName)

//    context.res={
//     body:mylist, 
//     "$or ":[{
// FirstName:{$regex:req.params.key}
//     }]
//    }

const page=parseInt(req.query.page)
  const limit=parseInt(req.query.limit)
if(!page){ page =1;}
  if(!limit) {limit =3;}
  
  const startIndex=(page-1)*limit;
  const endIndex=page*limit
const mylist=await collection.find({}).toArray();

// console.log(mylist)
const product=mylist.slice(startIndex,endIndex)
// 
context.res={
    body:product
}
}