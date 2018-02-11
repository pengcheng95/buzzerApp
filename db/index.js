import redis from "redis";

const client = redis.createClient();
 
// if you'd like to select database 3, instead of 0 (default), call 
// client.select(3, function() { /* ... */ }); 
 
client.on("error", function (err) {
    console.log("Error " + err);
});

client.on("connect", () => {
	console.log("Redis database connected");
})
 


exports.default = client;