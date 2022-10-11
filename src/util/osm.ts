import axios from "axios";

const apiUrl = "https://www.openstreetmap.org";

const osmClient = axios.create({
  baseURL: apiUrl,
});

const getOsm = async (
  left: number,
  bottom: number,
  right: number,
  top: number
) => {
  try {
    const response = await osmClient.get(
      "/api/0.6/map?bbox=" + left + "," + bottom + "," + right + "," + top
    );
    return {
      error: false,
      osm: response.data,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.response?.data,
    };
  }
};

export default getOsm;
