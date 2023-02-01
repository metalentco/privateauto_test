import { createHmac } from "crypto";

const useApi = () => {
  const getInitialData = async () => {
    const secret = "EZScretJwtKey";
    const API_BASE_URL = "https://prelogin.padev.xyz";

    const payload = {
      body: {},
      userAgent: "curl/7.84.0",
      url: "/api/config",
    };

    const hash = createHmac("sha256", secret)
      .update(JSON.stringify(payload))
      .digest("base64");

    console.log("hash:", hash);

    const response = await fetch(`${API_BASE_URL}/api/config`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-pa": hash,
      },
    });
    console.log("response:", response);
    return response;
  };

  return { getInitialData };
};

export default useApi;
