import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "bce2b4c194cc449a8169f094cac460c0",
        q: `${lat}+${lng}`,
        language: "en",
      },
    }
  );

  return response;
}

export default getAddressOfCoordinates;
