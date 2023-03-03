import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SlugMainComp from "@/components/SlugMainComp";
import Footer from "@/components/Footer";

interface Props {
  content: any;
  header: any;
}

const Home = ({ content, header }: Props) => {
  const [indexFaq, setIndexFaq] = useState<any>(0);
  let headerContent = null;
  if (header.data && header.data[0].attributes) {
    headerContent = header.data[0].attributes.Content;
  }

  useEffect(() => {
    if (content != null) {
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
        <MetaHeader
          content={content.attributes}
          headerContent={headerContent}
        />
        <Header />
        <Menu />
        <SlugMainComp
          data={content}
          vehicleListing={null}
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
        <div className="w-full flex justify-center">
          <Image
            width={640}
            height={600}
            src="/assets/loading.gif"
            alt="loading"
          />
        </div>
        <Footer />
      </div>
    );
  }
};

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<{ props: Props; revalidate: number }> => {
  //To get the page data for specific url using strapi api
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "base-pages?populate=deep";
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
    let content: any = null;

    for (let item of total_list.data) {
      if (item.attributes.slug == "/") {
        content = item; // page static data for url
      }
    }

    //To get header Meta Content
    let HEADER_STRAPI_URL =
      process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "header-elements?populate=deep";
    if (process.env.NEXT_PUBLIC_PREVIEW_STATE) {
      HEADER_STRAPI_URL += "&publicationState=preview";
    }
    const header_res = await fetch(HEADER_STRAPI_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    });
    const header = await header_res.json();

    return {
      props: {
        content,
        header,
      },
      revalidate: 30,
    };
  } catch (e: any) {
    console.log(
      `Strapi content for ${STRAPI_URL} (${authorization}) - ${e.message}`
    );
    return {
      props: {
        content: null,
        header: null,
      },
      revalidate: 30,
    };
  }
};

export default Home;
