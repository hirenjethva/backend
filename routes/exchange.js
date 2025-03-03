import express from "express";
import { createExchange } from "../controllers/exchangeController.js";

const router = express.Router();

// Route for exchange form submission
router.post("/exchange", createExchange);

export default router;
