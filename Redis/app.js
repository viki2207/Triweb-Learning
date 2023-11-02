const redis = require("redis");
const redisURL = "redis://127.0.0.1:6379";
const client = redis.createClient(redisURL);
client.set("name", "redis");
console.log("Data is set");
client.get("name", (error, value) => {
  if (error) {
    console.log(error);
  }
  console.log(value);
});
/*
Redis is used as a database, cache and message broker
it can set datastructure such as string,hashes, sort, bitmap,index,streams
Redis is a very useful nodejs develoepr
it reduce the cache size make applicationmore efficent
*/
