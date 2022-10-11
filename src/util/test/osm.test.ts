import getOsm from "../osm";

describe("Test getting osm from openStreetMap api", () => {
  test("It should get error: true and message : request too large", async () => {
    const response = await getOsm(-0.189, 51.28, 0.136, 59.295);
    expect(response.error).toBe(true);
    expect(response.message).toBe(
      "The maximum bbox size is 0.250000, and your request was too large. Either request a smaller area, or use planet.osm"
    );
  });

  test("It should get error: true and message : minima must be less than the maxima", async () => {
    const response = await getOsm(0.189, 51.28, 0.136, 59.295); //when minima is greater than the maxima
    expect(response.error).toBe(true);
    expect(response.message).toBe(
      "The latitudes must be between -90 and 90, longitudes between -180 and 180 and the minima must be less than the maxima."
    );
  });

  test("It should get error: false and correct osm response", async () => {
    const response = await getOsm(-0.189, 51.2, 0.136, 51.211); //when minima is greater than the maxima
    expect(response.error).toBe(false);
    expect(response.osm.bounds).toEqual({
      minlat: 51.2,
      minlon: -0.189,
      maxlat: 51.211,
      maxlon: 0.136,
    });
  });
});
