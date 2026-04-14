import express from "express";
import testRoutes from "./routes/testRoutes";
import { rateLimiter } from "./middleware/rateLimiter";

const app = express();

app.use(express.json());

// Apply rate limiter globally
app.use(rateLimiter);

app.use("/api", testRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Rate Limited API Gateway is running");
});

export default app;