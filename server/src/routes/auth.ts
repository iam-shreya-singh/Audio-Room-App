import { Router, Request, Response } from "express";
import { client } from "../stream-Client";
import { UserObjectRequest } from "@stream-io/node-sdk";

const router = Router();

router.post("/createUser", async (req: Request, res: Response) => {
  try {
    const { username, name, image } = req.body;

    if (!username || !name || !image) {
      return res
        .status(400)
        .json({ message: "Username, name, and image are required" });
    }

    // Prepare user object
    const newUser: UserObjectRequest = {
      id: username,
      role: "user",
      name,
      image,
    };

    // Upsert user (create if doesn't exist)
    await client.upsertUsers([newUser]);

    // Generate token valid for 24 hours
    const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
    const token = client.createToken(username, expiry);

    return res.status(200).json({ token, username, name });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
