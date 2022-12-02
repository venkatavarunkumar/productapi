const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const todayDate = new Date().toISOString().slice(0, 10)
const url="mongodb://productapi1:4MGJEQskoObZfetWbS8NxF8Ka0Z0mHVPXVX9AW1XWw712Fs6EzBTnNiFVGru53w5kFM26d35097MACDboHAP6Q==@productapi1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productapi1@"
const client=new MongoClient(url)

module.exports = async function (context, req) {
    await client.connect();
const database=client.db("Productdb")
const collection=database.collection("newproduct")

const date=(`${todayDate}`)
 const data={...req.body,...date}
 const query={_id:req.params.id}
 const newdata={$set:data}

      const d=`${ todayDate}`
 const update=await collection.updateOne(query,newdata)
if(!update){
    context.res={
        status:404,
        body:"could not found the person"
    }
}
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: update
    };
}