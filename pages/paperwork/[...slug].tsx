import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SlugMainComp from "@/components/SlugMainComp";
import Footer from "@/components/Footer";
import PageNotFound from "@/components/PageNotFound";

interface Props {
  content: any;
}

function Components(content: Props) {
  const [indexFaq, setIndexFaq] = useState<any>(0);

  useEffect(() => {
    if (content.content != null) {
      document.title = content.content.attributes.PageTitle;
      content.content.attributes.Content.map((item: any, index: number) => {
        if (item.__component == "page-elements.faq") {
          setIndexFaq(index);
        }
      });
    }
  }, []);

  if (content.content != null) {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <SlugMainComp data={content.content} indexFaq={indexFaq} />
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
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "paperworks?populate=deep";
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
    const paths = content.data.map((item: any, index: number) => {
      return {
        params: {
          slug: [item.attributes.slug.slice(1, item.attributes.slug.length)],
        },
      };
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
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "paperworks?populate=deep";
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

    total_list.data.map((item: any, index: number) => {
      if (item.attributes.slug == "/" + slug) {
        content = item;
      }
    });

    return {
      props: {
        content,
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
      },
      revalidate: 30,
    };
  }
};

export default Components;
