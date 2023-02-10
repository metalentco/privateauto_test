import { createHmac } from "crypto";
import { PAGE_SIZE } from "@/libs/constants";
import { MoreFilter } from "@/interfaces/MoreFilter";

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

  const text_format = (text: string) => {
    const formatted_text = text
      .replace(/ /g, "%20")
      .replace(/\[/g, "%5B")
      .replace(/\]/g, "%5D")
      .replace(/\//g, "%2B")
      .replace(/\$/g, "%24");
    return formatted_text;
  };

  const getPageData = async (
    vehicleType: string,
    searchKey: string,
    make: string,
    models: Array<string>,
    bodyType: Array<string>,
    minYear: number,
    maxYear: number,
    minMiles: number,
    maxMiles: number,
    moreFiltersArr: MoreFilter,
    location: string,
    lat: number,
    lng: number,
    radius: number,
    sort: string
  ) => {
    let url = `/api/listings?_page=0&_limit=${PAGE_SIZE}`;

    //Filter by vehicleType
    if (vehicleType != "All Vehicles") {
      url += `&vehicleType=${text_format(vehicleType)}`;
    }

    //Filter by search key
    if (searchKey != "") {
      url += `&_search=${text_format(searchKey)}`;
    }

    //Filter by CarMake
    if (make != "") {
      const filter = `&CarMake[0]=${make}`;
      url += text_format(filter);
    }

    //Filter by CarModels
    if (models.length) {
      models.map((item: string, index: number) => {
        const filter = `&CarModel[${index}]=${item}`;
        url += text_format(filter);
      });
    }

    //Filter by car bodyType
    if (bodyType.length) {
      bodyType.map((item: string, index: number) => {
        const filter = `&BodyStyle[${index}]=${item}`;
        url += text_format(filter);
      });
    }

    //Filter by RegisterationYear Range
    url += text_format(
      `&RegistrationYear[$gte]=${minYear}&RegistrationYear[$lte]=${maxYear}`
    );

    //Filter by Mileage Range
    url += text_format(`&Mileage[$gte]=${minMiles}&Mileage[$lte]=${maxMiles}`);

    //Filter by location (lat, lng) and radius
    if (location != "") {
      url += text_format(
        `&latlng[latitude]=${lat}&latlng[longitude]=${lng}&state=&radius=${radius}`
      );
    }

    //Filter by moreFilters
    if (moreFiltersArr.trim.length) {
      moreFiltersArr.trim.map((item: string, index: number) => {
        url += text_format(`&Trim[${index}]=${item}`);
      });
    }
    if (moreFiltersArr.exteriorColor.length) {
      moreFiltersArr.exteriorColor.map((item: string, index: number) => {
        url += text_format(`&ExteriorColor[${index}]=${item}`);
      });
    }
    if (moreFiltersArr.interiorColor.length) {
      moreFiltersArr.interiorColor.map((item: string, index: number) => {
        url += text_format(`&InteriorColor[${index}]=${item}`);
      });
    }
    if (moreFiltersArr.fuelType.length) {
      moreFiltersArr.fuelType.map((item: string, index: number) => {
        url += text_format(`&Fuel[${index}]=${item}`);
      });
    }
    if (moreFiltersArr.transmission.length) {
      moreFiltersArr.transmission.map((item: string, index: number) => {
        url += text_format(`&Transmission[${index}]=${item}`);
      });
    }
    if (moreFiltersArr.driveType.length) {
      moreFiltersArr.driveType.map((item: string, index: number) => {
        url += text_format(`&DriveType[${index}]=${item}`);
      });
    }
    if (moreFiltersArr.cylinders.length) {
      moreFiltersArr.cylinders.map((item: string, index: number) => {
        url += text_format(`&Cylinders[${index}]=${item}`);
      });
    }

    //Filter by sort
    if (sort == "Newest") {
      url += text_format(
        "&_sort[0][column]=payment.date&_sort[0][direction]=desc"
      );
    } else if (sort == "Highest price") {
      url += text_format("&_sort[0][column]=Price&_sort[0][direction]=desc");
    } else if (sort == "Lowest price") {
      url += text_format("&_sort[0][column]=Price&_sort[0][direction]=asc");
    } else if (sort == "Lowest mileage") {
      url += text_format("&_sort[0][column]=Mileage&_sort[0][direction]=asc");
    } else {
      url += text_format(
        "&_sort[0][column]=RegistrationYear&_sort[0][direction]=desc"
      );
    }
    return await getResponseFromAPI(url);
  };

  const getInitMakeData = async () => {
    const url = "/api/listings/automobile-makes";
    return await getResponseFromAPI(url);
  };

  const getModelDataByMake = async (make: string) => {
    let formatted = "";
    if (make.includes(" ")) {
      const arrByMake = make.split(" ");
      const len = arrByMake.length;
      arrByMake.map((item: string, index: number) => {
        if (len == index + 1) {
          formatted += item;
        } else {
          formatted += item + "%20";
        }
      });
    } else {
      formatted = make;
    }
    const url = `/api/vehicles/make/${formatted}`;
    return await getResponseFromAPI(url);
  };

  const getCarDetailsFilter = async () => {
    const url = `/api/listings/car-details-filter`;
    return await getResponseFromAPI(url);
  };

  return {
    getPageData,
    getInitMakeData,
    getModelDataByMake,
    getCarDetailsFilter,
  };
};

export default useApi;
