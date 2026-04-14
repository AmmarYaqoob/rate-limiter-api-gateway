import { Request, Response, NextFunction } from "express";
import { redis } from "../config/redis";

const WINDOW = Number(process.env.RATE_LIMIT_WINDOW) || 60;
const MAX = Number(process.env.RATE_LIMIT_MAX) || 10;

export const rateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ip = req.ip;
    const key = `rate:${ip}`;

    const current = await redis.incr(key);

    if (current === 1) {
      await redis.expire(key, WINDOW);
    }

    if (current > MAX) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    res.setHeader("X-RateLimit-Limit", MAX);
    res.setHeader("X-RateLimit-Remaining", Math.max(0, MAX - current));

    next();
  } catch (error) {
    next(error);
  }
};