import Head from "next/head";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerData, setHeaderData] = useState<any>(null);
  const init = async () => {
    let STRAPI_URL =
      process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "header-elements?populate=deep";
    if (process.env.NEXT_PUBLIC_PREVIEW_STATE) {
      STRAPI_URL += "&publicationState=preview";
    }
    const authorization =
      "Bearer " + process.env.NEXT_PUBLIC_STRAPI_AUTHORIZATION_BEARER;
    const res = await fetch(STRAPI_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    });
    const content = await res.json();
    setHeaderData(content);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" key="favicon" />
        {headerData != null &&
          headerData.data[0].attributes &&
          headerData.data[0].attributes.Content}
      </Head>
      <header className="w-full h-[52px] p-2 flex justify-center items-center bg-[#64e5cb] space-x-4 md:space-x-8">
        <div className="text-center md:text-left text-sm md:text-lg font-normal">
          <strong>New Pay Later Option.</strong>&nbsp;&nbsp;Only pay when the
          car sells
        </div>
        <button className="bg-white hover:bg-slate-100 text-xs md:text-sm px-2 py-1 rounded cursor-pointer">
          View Pricing
        </button>
      </header>
    </div>
  );
};

export default Header;
