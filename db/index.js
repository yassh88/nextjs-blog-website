import { MongoClient, ServerApiVersion } from "mongodb"; // NextJS-Demo-DB
console.log("process.env", process.env);
console.log("process.env.db", process.env.db);
const uri = `mongodb+srv://${process.env.db.userName}:${process.env.db.password}@${process.env.db.cluster}.whv7v3q.mongodb.net/mangoDBName?retryWrites=true&w=majority`;

export async function connectToDB(db) {
  const client = await MongoClient.connect(uri.replace("mangoDBName", db));
  return client;
}
export async function closeDB(client) {
  client.close();
}
