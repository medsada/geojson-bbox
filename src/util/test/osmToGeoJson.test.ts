import convertOsmToGeoJson from "../osmToGeoJson";
import mockOsm from "./mockOsm.json";

describe("Test getting osmToGeoJson conversion format", () => {
  test("It should get error: true and message : request too large", async () => {
    const geoJson = await convertOsmToGeoJson(mockOsm);
    expect(geoJson.type).toBe("FeatureCollection");
  });
});
