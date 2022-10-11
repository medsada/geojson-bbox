import customError from "../util/customError";
import getOsm from "../util/osm";
import convertOsmToGeoJson from "../util/osmToGeoJson";

const bBoxGeoJsonService = async (
  left: number,
  bottom: number,
  right: number,
  top: number
) => {
  const osmResponse = await getOsm(left, bottom, right, top);

  if (osmResponse.error) throw new customError(400, osmResponse.message);

  const geoJson = convertOsmToGeoJson(osmResponse.osm);

  return geoJson;
};

export { bBoxGeoJsonService };
