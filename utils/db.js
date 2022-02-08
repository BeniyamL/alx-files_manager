const { mongo } = require('mongodb');

const host = process.env.DB_HOST || localhost;
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || files_manager;
const url = `mongodb://${host}:${port}`;
class DBClient {
  constructor() {
    mongo.connect(url, (error, client) => {
      if(error) {
        this.db = false;
       } else {
         this.db = client.db(database);
       }
    });
  }

  isAlive() {
    if (this.db) {
      return true;
    } else {
      return false:
    }
  }

  async nbUsers() {
    this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
