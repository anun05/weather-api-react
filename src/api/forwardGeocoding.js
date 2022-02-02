import axios from "axios";

async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "bce2b4c194cc449a8169f094cac460c0",
        q: address,
        language: "en",
      },
    }
  );

  return response;
}

export default getCoordinatesOfAddress;
