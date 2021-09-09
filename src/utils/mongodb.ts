  import {Db, MongoClient} from 'mongodb'

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;

  let cachedDb: Db;
  let cachedClient: MongoClient;

  if(!uri){
    throw new Error('Please define the MONGODB_URI inside your .env.')
  }

  if(!dbName){
    throw new Error('Please define the MONGODB_DB inside your .env.')
  }

  export default async function connectToDatabase(){
    if(cachedClient && cachedDb){
      return{client: cachedClient, db: cachedDb}
    }
    const client = await MongoClient.connect(uri, {
      // @ts-ignore: Unreachable code error
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const db = await client.db(dbName)
    
    cachedDb = db
    cachedClient = client
    
    return {client, db}
  }


