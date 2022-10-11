import express from "express";
const router = express.Router();

import { bBoxGeoJson } from "../controllers/osmController";

import validatorMiddleware from "../middlewares/validatorMiddleware";

import { validateBBoxGeoJson } from "../validators/bBoxValidator";

router.get("/geojson", validatorMiddleware(validateBBoxGeoJson), bBoxGeoJson);

export default router;
