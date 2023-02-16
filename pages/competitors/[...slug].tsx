import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SlugMainComp from "@/components/SlugMainComp";
import Footer from "@/components/Footer";
import PageNotFound from "@/components/PageNotFound";

interface Props {
  content: any;
}

function Components(content: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>();
  const [indexFaq, setIndexFaq] = useState<any>(0);

  useEffect(() => {
    const getData = (value: string) => {
      const listing_content = content.content;
      for (var i = 0; i < listing_content.data.length; i++) {
        if (listing_content.data[i].attributes.slug === value) {
          for (
            var j = 0;
            j < listing_content.data[i].attributes.Content.length;
            j++
          ) {
            if (
              listing_content.data[i].attributes.Content[j].__component ==
              "page-elements.faq"
            ) {
              setIndexFaq(j);
              break;
            }
          }
          setData(listing_content.data[i]);
        }
      }
    };

    if (slug) {
      const slugValue = "/" + slug.toString();
      getData(slugValue);
    }
  }, [slug]);

  if (data) {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <SlugMainComp data={data} indexFaq={indexFaq} />
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
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "competitors?populate=deep";
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
};

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<{ props: Props; revalidate: number }> => {
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "competitors?populate=deep";
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

  return {
    props: {
      content,
    },
    revalidate: 30,
  };
};

export default Components;
