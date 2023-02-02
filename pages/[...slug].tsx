import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import JumpLinkTarget from '@/components/JumpLinkTarget';
import IconBar from '@/components/IconBar';
import ContentBlock from '@/components/ContentBlock';
import Faq from '@/components/Faq';
import InlineImage from '@/components/InlineImage';
import BulletedList from '@/components/BulletedList';
import Lists from '@/components/Lists';
import JumpLinks from '@/components/JumpLinks';
import Footer from '@/components/Footer';
import content from '../json/components.json';

import { getUrls, getStrapiPage, getPages } from '../cms/strapi';

export async function getStaticPaths() {
  return {
    paths: await getUrls(),
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const data = await getStrapiPage(context.params.slug);
  console.log(`${context.params.slug.join('/')}: `, data);
  return {
    props: {
      data,
    },
  };
}

export default function Components(props: any) {
  // const router = useRouter();
  // const { slug } = router.query;
  // const [data, setData] = useState<any>();
  //const [indexFaq, setIndexFaq] = useState<any>(0);

  console.log('props: ', props);
  const { data } = props;

  //useEffect(() => {
  //  console.log(`slug: ${slug}`);
  //  getPage(slug);
  //}, [slug]);

  /*
  const getData = (value: string) => {
    for (var i = 0; i < content.data.length; i++) {
      if (content.data[i].attributes.slug === value) {
        for (var j = 0; j < content.data[i].attributes.Content.length; j++) {
          if (
            content.data[i].attributes.Content[j].__component ==
            'page-elements.faq'
          ) {
            setIndexFaq(j);
            break;
          }
        }
        setData(content.data[i]);
      }
    }
  };
  */

  if (data) {
    return (
      <div className="w-full">
        <Header />
        <Menu />
        <main className="w-full space-y-5">
          <section className="w-4/6 mx-auto mb-20">
            <div className="text-3xl font-semibold mt-14">
              {data.attributes?.PageTitle}
            </div>
            {data.attributes.Image.data ? (
              <div className="w-full flex justify-center mt-8">
                <Image
                  src={data.attributes.Image.data.attributes.formats.small.url}
                  alt={data.attributes.Image.data.attributes.formats.small.name}
                />
              </div>
            ) : (
              ''
            )}
            <div className="text-base text-center break-words mt-8">
              {data.attributes.Body}
            </div>
          </section>
          {data.attributes.Content.length != 0
            ? data.attributes.Content.map((item: any, index: number) => {
                return item.__component == 'page-elements.jump-link-target' ? (
                  <JumpLinkTarget key={index} data={item} />
                ) : item.__component == 'page-elements.icon-bar' ? (
                  <IconBar key={index} data={item} />
                ) : item.__component == 'page-elements.image-text' ? (
                  <ContentBlock key={index} data={item} />
                ) : item.__component == 'page-elements.inline-image' ? (
                  <InlineImage key={index} data={item} />
                ) : item.__component == 'page-elements.bulleted-list' ? (
                  <BulletedList key={index} data={item} />
                ) : item.__component == 'page-elements.list' ? (
                  <Lists key={index} data={item} />
                ) : item.__component == 'page-elements.jump-links' ? (
                  <JumpLinks key={index} data={item} />
                ) : (
                  <Faq key={index} data={item} faq={index} index={index} />
                );
              })
            : ''}
        </main>
        <Footer />
      </div>
    );
  }
}
