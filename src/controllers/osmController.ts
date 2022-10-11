import { Request, Response, NextFunction } from "express";
import { bBoxGeoJsonService } from "../services/osmService";

const bBoxGeoJson = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { left, bottom, right, top } = req.query;
    const response = await bBoxGeoJsonService(
      Number(left),
      Number(bottom),
      Number(right),
      Number(top)
    );
    res.json({
      success: true,
      response: response,
    });
  } catch (e) {
    next(e);
  }
};

export { bBoxGeoJson };
