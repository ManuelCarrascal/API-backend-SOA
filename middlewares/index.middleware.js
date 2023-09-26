import { verifyToken } from "./token.middleware.js"
import { Router } from "express"; 

const router = Router();
 
router.use('/api', verifyToken );

export default router;