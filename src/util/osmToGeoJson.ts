import osmtogeojson from "osmtogeojson";

function convertOsmToGeoJson(osmData: any) {
  return osmtogeojson(osmData);
}

export default convertOsmToGeoJson;
