import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SlugMainComp from "@/components/SlugMainComp";
import Footer from "@/components/Footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [content, setContent] = useState<any>();
  const init = async () => {
    const STRAPI_URL =
      process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "base-pages?populate=deep";
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
    setContent(content);
  };

  useEffect(() => {
    init();
  }, []);

  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>();
  const [indexFaq, setIndexFaq] = useState<any>(0);

  useEffect(() => {
    const getData = (value: string) => {
      for (var i = 0; i < content.data.length; i++) {
        if (i == content.data.length) {
          setData(null);
        } else if (content.data[i].attributes.slug === value) {
          for (var j = 0; j < content.data[i].attributes.Content.length; j++) {
            if (
              content.data[i].attributes.Content[j].__component ==
              "page-elements.faq"
            ) {
              setIndexFaq(j);
              break;
            }
          }
          document.title = content.data[i].attributes.PageTitle;
          setData(content.data[i]);
        }
      }
    };

    if (content != undefined) {
      getData("/");
    }
  }, [slug, content]);

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

export default Home;
