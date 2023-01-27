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
      const slugValue = slug.toString();
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
        <main className="w-full space-y-5">
          <section className="w-4/6 mx-auto mb-20">
            <div className="text-3xl font-semibold mt-14">
              {data.attributes.PageTitle}
            </div>
            {data && data.attributes.Image.data ? (
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
            <div className="text-base text-center break-words mt-8">
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
            : ""}
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
  return {
    paths: [{ params: { slug: "test" } }, { params: { slug: "test2" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/json/components.json");
  const content = await res.json();
  return {
    props: {
      content,
    },
  };
}

export default Components;
