import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import JumpLinkTarget from "@/components/JumpLinkTarget";
import IconBar from "@/components/IconBar";
import ContentBlock from "@/components/ContentBlock";
import Faq from "@/components/Faq";
import InlineImage from "@/components/InlineImage";
import BulletedList from "@/components/BulletedList";
import Lists from "@/components/Lists";
import JumpLinks from "@/components/JumpLinks";
import Footer from "@/components/Footer";
function Components(content: any) {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>();
  const [indexFaq, setIndexFaq] = useState<any>(0);

  useEffect(() => {
    if (slug) {
      const slugValue = "/" + slug.toString();
      getData(slugValue);
    }
  }, [slug]);

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

  if (data) {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <main className="w-full">
          <section className="w-4/6 mx-auto">
            {data &&
            data.attributes.Image != undefined &&
            data.attributes.Image.data ? (
              <div className="w-full flex justify-center mt-8">
                <Image
                  src={data.attributes.Image.data.attributes.formats.small.url}
                  width={
                    data.attributes.Image.data.attributes.formats.small.width
                  }
                  height={
                    data.attributes.Image.data.attributes.formats.small.height
                  }
                  alt={data.attributes.Image.data.attributes.formats.small.name}
                />
              </div>
            ) : (
              ""
            )}
            <div className="text-base text-center break-words">
              {data.attributes.Body}
            </div>
          </section>
          {data && data.attributes.Content.length != 0
            ? data.attributes.Content.map((item: any, index: number) => {
                return item.__component == "page-elements.jump-link-target" ? (
                  <JumpLinkTarget key={index} data={item} />
                ) : item.__component == "page-elements.icon-bar" ? (
                  <IconBar key={index} data={item} />
                ) : item.__component == "page-elements.image-text" ? (
                  <ContentBlock key={index} data={item} />
                ) : item.__component == "page-elements.inline-image" ? (
                  <InlineImage key={index} data={item} />
                ) : item.__component == "page-elements.bulleted-list" ? (
                  <BulletedList key={index} data={item} />
                ) : item.__component == "page-elements.list" ? (
                  <Lists key={index} data={item} />
                ) : item.__component == "page-elements.jump-links" ? (
                  <JumpLinks key={index} data={item} />
                ) : (
                  <Faq key={index} data={item} faq={indexFaq} index={index} />
                );
              })
            : null}
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <div className="w-[80%] md:w-[70%] mx-auto py-20">
          <div className="block md:flex items-center justify-between">
            <div className="hidden md:block text-center md:text-left space-y-8">
              <div className="text-[40px] font-bold">
                Uh no... Page not found
              </div>
              <div className="text-xl font-normal">
                We couldn't find the page you were looking for.
              </div>
              <button className="bg-[#f7f9fc] hover:bg-slate-200 text-black text-base font-medium py-1 px-4 rounded cursor-pointer">
                Go back
              </button>
            </div>
            <div className="flex md:block justify-center pb-20 md:pb-0">
              <Image
                width={286}
                height={286}
                src="/assets/notFoundCar.svg"
                alt="notFoundCar"
              />
            </div>
            <div className="block md:hidden text-center md:text-left space-y-8">
              <div className="text-2xl sm:text-3xl md:text-[40px] font-bold">
                Uh no... Page not found
              </div>
              <div className="text-base sm:text-lg md:text-xl font-normal">
                We couldn't find the page you were looking for.
              </div>
              <button className="bg-[#f7f9fc] hover:bg-slate-200 text-black text-base font-medium py-1 px-4 rounded cursor-pointer">
                Go back
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://strapi.padev.xyz/api/base-pages?populate=deep",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 86317a6db6eb2b66d1976e89fd7ae3eb63fd70771b678a3ee307c0c018b289776b6bff2ff1ab51052cff881cf766464876e87b695ccf20fc8f8cb6d1637923b5e9ac37e39fdfe48463807dac38c0997fff0d41421c513bbecaaca6aba93d26e3cdd21782d3635ad06fb3ab4892d43582945457ef4cdde438cd6a9ce07b6809c4",
      },
    }
  );
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
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch(
    "https://strapi.padev.xyz/api/base-pages?populate=deep",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 86317a6db6eb2b66d1976e89fd7ae3eb63fd70771b678a3ee307c0c018b289776b6bff2ff1ab51052cff881cf766464876e87b695ccf20fc8f8cb6d1637923b5e9ac37e39fdfe48463807dac38c0997fff0d41421c513bbecaaca6aba93d26e3cdd21782d3635ad06fb3ab4892d43582945457ef4cdde438cd6a9ce07b6809c4",
      },
    }
  );
  const content = await res.json();
  return {
    props: {
      content,
    },
  };
}

export default Components;
