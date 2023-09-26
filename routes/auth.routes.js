import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
const router = Router();

router.get("/",  login ) 

export default router;