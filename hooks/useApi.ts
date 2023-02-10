import { createHmac } from "crypto";

const useApi = () => {
  const makeHash = (url: string, agent: string, body: any) => {
    const secret = "EZScretJwtKey";
    const payload = {
      body: body || {},
      userAgent: agent,
      url,
    };

    const hash = createHmac("sha256", secret)
      .update(JSON.stringify(payload))
      .digest("base64");
    console.log("hash:", hash);
    return hash;
  };

  const getResponseFromAPI = async (url: string) => {
    const agent =
      typeof window !== "undefined"
        ? window.navigator.userAgent
        : "build-server";
    const body = {};
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-client": agent,
        "x-pa": makeHash(url, agent, body),
      },
    });
    return response.json();
  };

  const getPageData = async (page: number) => {
    const url = `/api/listings?_page=${page}&_limit=24&_sort%5B0%5D%5Bcolumn%5D=payment.date&_sort%5B0%5D%5Bdirection%5D=desc`;
    return await getResponseFromAPI(url);
  };

  const getInitMakeData = async () => {
    const url = "/api/listings/automobile-makes";
    return await getResponseFromAPI(url);
  };

  const getModelDataByMake = async (make: string) => {
    const url = `/api/vehicles/make/${make}`;
    return await getResponseFromAPI(url);
  };

  return { getPageData, getInitMakeData, getModelDataByMake };
};

export default useApi;
