"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stream_Client_1 = require("../stream-Client");
const router = (0, express_1.Router)();
router.post("/createUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, name, image } = req.body;
    // Validate input
    if (!username || !name || !image) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const newUser = {
        id: username,
        role: "user",
        name,
        image,
    };
    const user = yield stream_Client_1.Client.upsertUser({
        users: {
            [newUser.id]: newUser,
        },
    });
    const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
    const token = stream_Client_1.Client.createToken(username, expiry);
    return res.status(200).json({ token, username, name });
}));
exports.default = router;
