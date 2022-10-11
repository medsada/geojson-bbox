import { Response, NextFunction } from "express";

function validatorMiddleware(validator: any) {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const keys = Object.keys(validator);
      for (let i = 0; i < keys.length; i++) {
        req[keys[i]] = await validator[keys[i]].validateAsync(req[keys[i]]);
      }
      next();
    } catch (e) {
      next(e);
    }
  };
}

export default validatorMiddleware;
