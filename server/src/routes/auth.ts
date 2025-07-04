import { Router, Request, Response } from "express";
import { Client } from "../stream-Client";
import { UserObjectRequest } from "@stream-io/node-sdk";

const router = Router();

router.post("/createUser", async (req: Request, res: Response) =>{
    const {username, name, image} = req.body;
    // Validate input
    if (!username || !name || !image) {
        return res.status(400).json({error: "All fields are required"});
    }
    const newUser: UserObjectReuest = {
        id: username,
        role: "user",
        name,
        image,
        
    }
        const user = await Client.upsertUser({
            users: {
            [newUser.id]: newUser,
            },
        });
});

export default router;
