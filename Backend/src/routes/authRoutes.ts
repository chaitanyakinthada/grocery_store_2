import express from "express";
import { login, signup, logout } from "../controllers/authController";

const router = express.Router();

router.post('/login', login as any);
router.post("/signup", signup as any);
router.post("/logout", logout);

export default router;
