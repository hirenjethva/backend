import express from "express";
import { createContact, getContactUsData } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", createContact);
router.get("/contact/getContactUsData", getContactUsData);

export default router;
