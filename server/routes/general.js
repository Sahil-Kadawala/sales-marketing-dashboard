import express, { Router } from "express";
import { getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);

export default Router;
