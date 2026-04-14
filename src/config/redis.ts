import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

console.log("process.env.REDIS_HOST, process.env.REDIS_PORT");
console.log(process.env.REDIS_HOST, process.env.REDIS_PORT);
export const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
});

redis.on("connect", () => {
    console.log("Redis connected");
});

redis.on("error", (err) => {
    console.error("Redis error:", err.message);
});