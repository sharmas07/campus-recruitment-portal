import { Router } from "express";
import { commentResume, endorseResume, getAllResumes, updateResume, uploadResume } from "../controllers/resumeController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();

router.post('/uploadresume',authMiddleware, uploadResume)
router.put('/updateresume/:id',authMiddleware, updateResume)
router.put('/endorse/:id',authMiddleware, endorseResume)
router.put('/comment/:id',authMiddleware, commentResume)
router.get('/getallresumes', getAllResumes)


export default router;