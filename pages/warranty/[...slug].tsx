import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import React from "react";
import Geocode from "react-geocode";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SlugMainComp from "@/components/SlugMainComp";
import Footer from "@/components/Footer";
import PageNotFound from "@/components/PageNotFound";
import API from "@/hooks/useApi";
import { Google_Autocomplete_Key, initFilters } from "@/libs/constants";

interface Props {
  content: any;
  vehicleListing: any;
}

function Components({ content, vehicleListing }: Props) {
  const [indexFaq, setIndexFaq] = useState<any>(0);

  useEffect(() => {
    if (content != null) {
      document.title = content.attributes.PageTitle;
      content.attributes.Content.map((item: any, index: number) => {
        if (item.__component == "page-elements.faq") {
          setIndexFaq(index);
        }
      });
    }
  }, []);

  if (content != null) {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <SlugMainComp
          data={content}
          vehicleListing={vehicleListing}
          indexFaq={indexFaq}
        />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <PageNotFound />
        <Footer />
      </div>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "warranties?populate=deep";
  const authorization =
    "Bearer " + process.env.NEXT_PUBLIC_STRAPI_AUTHORIZATION_BEARER;
  try {
    const res = await fetch(STRAPI_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    });
    const content = await res.json();
    let paths: any[] = [];
    content.data.map((item: any, index: number) => {
      if (item.attributes.slug != "/") {
        paths.push({
          params: {
            slug: [item.attributes.slug.slice(1, item.attributes.slug.length)],
          },
        });
      }
    });
    return {
      paths,
      fallback: "blocking",
    };
  } catch (e: any) {
    console.log(
      `Strapi content for ${STRAPI_URL} (${authorization}) - ${e.message}`
    );
    return {
      paths: [{ params: { slug: [] } }],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<{ props: Props; revalidate: number }> => {
  //To get the page data for specific url using strapi api
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "warranties?populate=deep";
  const authorization =
    "Bearer " + process.env.NEXT_PUBLIC_STRAPI_AUTHORIZATION_BEARER;
  try {
    const res = await fetch(STRAPI_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    });
    const total_list = await res.json();

    let slug: string | string[] | undefined;
    let content: any = null;

    if (context.params != undefined) {
      slug = context.params.slug;
    }
    for (let item of total_list.data) {
      if (item.attributes.slug == "/" + slug) {
        content = item; // page static data for url
      }
    }

    //To get the vehicle search component initial page data
    let initVehicleSearchData = null;
    if (content != null) {
      for (let item of content.attributes.Content) {
        if (item.__component == "app-forms.vehicle-search") {
          const rows = item.DisplayRows != null ? item.DisplayRows : 6;
          const limit = item.MaxListings != null ? item.MaxListings : 0;
          const initVehicleType =
            item.Filters != null &&
            item.Filters.VehicleType != null &&
            item.Filters.VehicleType != undefined
              ? item.Filters.VehicleType == "Car"
                ? "Auto"
                : item.Filters.VehicleType
              : "All Vehicles";
          const initMake =
            item.Filters != null &&
            item.Filters.Make != null &&
            item.Filters.Make != undefined
              ? item.Filters.Make
              : "";
          const initModels =
            item.Filters != null &&
            item.Filters.Model != null &&
            item.Filters.Model != undefined
              ? item.Filters.Model.split()
              : [];
          const initBodyType =
            item.Filters != null &&
            item.Filters.BodyType != null &&
            item.Filters.BodyType != undefined
              ? item.Filters.BodyType.split()
              : [];
          const initMinYear =
            item.Filters != null &&
            item.Filters.YearMin != null &&
            item.Filters.YearMin != undefined
              ? item.Filters.YearMin
              : 1910;
          const initMaxYear =
            item.Filters != null &&
            item.Filters.YearMax != null &&
            item.Filters.YearMax != undefined
              ? item.Filters.YearMax
              : 2022;
          const initMinMiles =
            item.Filters != null &&
            item.Filters.MilesMin != null &&
            item.Filters.MilesMin != undefined
              ? item.Filters.MilesMin
              : 0;
          const initMaxMiles =
            item.Filters != null &&
            item.Filters.MilesMax != null &&
            item.Filters.MilesMax != undefined
              ? item.Filters.MilesMax
              : 300000;
          const initLocation =
            item.Filters != null &&
            item.Filters.Location != null &&
            item.Filters.Location != undefined
              ? item.Filters.Location + ", USA"
              : "";
          let initLat = 0,
            initLng = 0;
          if (initLocation != "") {
            Geocode.setApiKey(Google_Autocomplete_Key);
            Geocode.setLanguage("en");
            Geocode.setRegion("us");
            const response = await Geocode.fromAddress(initLocation);
            const { lat, lng } = response.results[0].geometry.location;
            initLat = lat;
            initLng = lng;
            const { getPageData } = API();
            initVehicleSearchData = await getPageData(
              rows,
              limit,
              0,
              initVehicleType,
              "",
              initMake,
              initModels,
              initBodyType,
              initMinYear,
              initMaxYear,
              initMinMiles,
              initMaxMiles,
              initFilters,
              initLocation,
              initLat,
              initLng,
              50,
              "Newest",
              true
            );
          } else {
            const { getPageData } = API();
            initVehicleSearchData = await getPageData(
              rows,
              limit,
              0,
              initVehicleType,
              "",
              initMake,
              initModels,
              initBodyType,
              initMinYear,
              initMaxYear,
              initMinMiles,
              initMaxMiles,
              initFilters,
              "",
              0,
              0,
              50,
              "Newest",
              true
            );
          }
        }
      }
    }
    return {
      props: {
        content,
        vehicleListing: initVehicleSearchData,
      },
      revalidate: 30,
    };
  } catch (e: any) {
    console.log(
      `Strapi content for ${STRAPI_URL} (${authorization}) - ${e.message}`
    );
    return {
      props: {
        content: {},
        vehicleListing: null,
      },
      revalidate: 30,
    };
  }
};

export default Components;
