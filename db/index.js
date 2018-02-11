import redis from "redis";

const client = redis.createClient();


client.on("error", function(err) {
  console.log("Error " + err);
});

client.on("connect", () => {
  console.log("Redis database connected");
})





export default client;