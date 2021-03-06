const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.clnt = redis.createClient();
    this.getAsc = promisify(this.clnt.get).bind(this.clnt);

    this.clnt.on('error', (err) => {
      console.log(`${err}`);
    });
  }

  isAlive() {
    return this.clnt.connected;
  }

  async get(k) {
    const v = await this.getAsc(k);
    return v;
  }

  async set(k, v, d) {
    this.clnt.set(k, v);
    this.clnt.expire(k, d);
  }

  async del(k) {
    this.clnt.del(k);
  }
}

const redisClient = new RedisClient();
export default redisClient;
