import { Router } from "express";
import { Request, Response } from "express";
import { client } from "./stream-client";

type UserObjectRequest = {
  id: string;
  name: string;
  role: string;
  image: string;
};

// Type for the body of the request
interface CreateUserBody {
  username: string;
  name: string;
  image: string;
}

const router = Router();

router.post(
  "/createUser",
  async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
    try {
      const { username, name, image } = req.body;

      // Validate input
      if (!username || !name || !image) {
        res
          .status(400)
          .json({ message: "Username, name, and image are required" });
        return;
      }

      // Prepare user object
      const newUser: UserObjectRequest = {
        id: username,
        role: "user",
        name,
        image,
      };

      // Upsert user (create if doesn't exist)
      await Client.upsertUsers({
        users: {
          [newUser.id]: newUser,
        },
      });

      // Generate token valid for 24 hours
      const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
      const token = Client.createUserToken(username, expiry);

      res.status(200).json({ token, username, name });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;
