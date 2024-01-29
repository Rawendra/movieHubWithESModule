import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://root:root@sandbox.daqr5.mongodb.net/sample_mflix?retryWrites=true&w=majority";
let database;
export const initDB = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    database = client.db('sample_mflix');
    console.log("database init done ", database);
  } catch (err) {
    console.log("error has occurred", err);
  }
};

export const getAllMovies = async (collectionName) => {
  const collection = database.collection(collectionName);
  const findResult = await collection.find({}).limit(10).toArray();
  console.log(findResult);
  return findResult;
};
