import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.json({
    message: "API is working",
    timestamp: new Date(),
  });
});

export default router;