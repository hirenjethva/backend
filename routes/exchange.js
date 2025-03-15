import express from "express";
import { createExchange, getAllExchanceDetails } from "../controllers/exchangeController.js";

const router = express.Router();

// Route for exchange form submission
router.post("/exchange/create", createExchange);
router.get("/exchange/getAllExchanceDetails", getAllExchanceDetails);

export default router;
