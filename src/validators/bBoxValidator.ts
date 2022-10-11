import Joi from "joi";
import customError from "../util/customError";

const validateBBoxGeoJson = {
  query: Joi.object()
    .keys({
      left: Joi.number()
        .min(-180)
        .max(180)
        .description("left")
        .required()
        .error(
          new customError(
            400,
            "left is a required number between -180.0 and 180.0"
          )
        ),
      bottom: Joi.number()
        .min(-90)
        .max(90)
        .description("bottom")
        .required()
        .error(
          new customError(
            400,
            "bottom is a required number between -90.0 and 90.0"
          )
        ),
      right: Joi.number()
        .min(-180)
        .max(180)
        .description("right")
        .required()
        .error(
          new customError(
            400,
            "right is a required number between -180.0 and 180.0"
          )
        ),
      top: Joi.number()
        .min(-90)
        .max(90)
        .description("top")
        .required()
        .error(
          new customError(
            400,
            "top is a required number between -90.0 and 90.0"
          )
        ),
    })
    .error(new customError(400, "invalid data")),
};

export { validateBBoxGeoJson };
