import express from "express";
import { getProfile, addProfile } from "../controllers/profiles.js";

const router = express.Router();

router.get("/:id", getProfile);
router.post("/", addProfile);

export default router;
