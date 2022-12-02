const value=require("./index")
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const uuid4 = require("uuid4");
// const { default: schema } = require("./index");
const schema = require('./index')


const todayDate = new Date().toISOString().slice(0, 10)
const url = "mongodb://productapi1:4MGJEQskoObZfetWbS8NxF8Ka0Z0mHVPXVX9AW1XWw712Fs6EzBTnNiFVGru53w5kFM26d35097MACDboHAP6Q==@productapi1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@productapi1@"
const client = new MongoClient(url)

 const create =async function (context, req) {

    
    try {
        await client.connect();
    const database = client.db("Productdb")
    const collection = database.collection("newproduct")

    const value=await schema.validateAsync(req.body)
 
        const register = [{
            _id: uuid4(),
            FirstName: value.FirstName,
            LastName: value.LastName,
            Password: value.Password,
            d : `${todayDate}`
            // DateAt:Date.now(),
            // Updated:`${DateAt}`

        }]
        const newproduct = await collection.insertMany(register)
    
         
   console.log(newproduct)
        // const response = newproduct
        context.res = {
            status: 200, /* Defaults to 200 */
            body: newproduct
        };

    } catch(err){
err
    };
    }
    const Read = async function (context, req) {
        try{
        await client.connect();
      const database=client.db("Productdb");
      const collection=database.collection("newproduct");
     
      const mylist=await collection.find({}).toArray()
      
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: mylist
        };
    }catch(err){
err

    }}
    
    const registerdelete = async function (context, req) {
            await client.connect();
        const database=client.db("Productdb")
        const collection=database.collection("newproduct")
        const person=await collection.deleteOne({_id:req.params.id})
        if(!person){
            context.res={
                status:400,
                body:"couldn't find that person"
        
            }
        }
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: person
        
            }}
module.exports={create,Read,registerdelete}
