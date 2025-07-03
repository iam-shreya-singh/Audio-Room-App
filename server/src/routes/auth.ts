import { Router, Request, Response } from 'express'
import { Client } from "../stream-Client";


const router = Router()

router.post("/createUser", async (req: Request, res: Response) =>{
    const {username, name, image} = req.body;
    // Validate input
    if (!username || !name || !image) {
        return res.status(400).json({error: "All fields are required"});
    }

    const newUser: UserObjectReuest = {
        id: username,
        
    }
    

        const user = await Client.upsertUser({
            users: {
                [username]: newUser,
            },
        });     
    }
    // Here it typically saves the user to your database
});
export default router;
