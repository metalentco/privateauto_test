import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
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
import content from "../json/components.json";
export default function Components() {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>();
  const [indexFaq, setIndexFaq] = useState<any>(0);

  useEffect(() => {
    getData("test");
  }, []);

  const getData = (value: string) => {
    for (var i = 0; i < content.data.length; i++) {
      if (content.data[i].attributes.slug === value) {
        for (var j = 0; j < content.data[i].attributes.Content.length; j++) {
          if (
            content.data[i].attributes.Content[j].__component ==
            "page-elements.faq"
          ) {
            setIndexFaq(j);
            break;
          }
        }
        setData(content.data[i]);
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
                <img
                  src={data.attributes.Image.data.attributes.formats.small.url}
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
  }
}
