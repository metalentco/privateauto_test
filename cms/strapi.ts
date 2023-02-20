const path = require('path');
const axios = require('axios');

const config = {
  // method: 'get',
  // url: 'https://strapi.padev.xyz/api/base-pages?populate=deep',
  //url: 'https://strapi.padev.xyz/api/',
  headers: {
    Authorization:
      'Bearer 86317a6db6eb2b66d1976e89fd7ae3eb63fd70771b678a3ee307c0c018b289776b6bff2ff1ab51052cff881cf766464876e87b695ccf20fc8f8cb6d1637923b5e9ac37e39fdfe48463807dac38c0997fff0d41421c513bbecaaca6aba93d26e3cdd21782d3635ad06fb3ab4892d43582945457ef4cdde438cd6a9ce07b6809c4',
  },
};

const client = axios.create(config);

interface KV {
  [key: string]: string;
}

const prefixes: KV = {
  '/': 'base-pages',
  '/buy': 'buy-pages',
  '/financing': 'financings',
  '/tax': 'taxes',
  '/warranty': 'warranties',
  '/competitor': 'competitors',
  '/paperwork': 'paperworks',
  '/sell': 'sell-pages',
  '/title': 'titles',

  // 'blog',
  //'license-plate',
};

async function getStrapiContent(srcPath: string[], deep = false): Promise<any> {
  await client;
  const apiKey = prefixes[srcPath[0]];
  const apiPath = [apiKey, ...srcPath.slice(1)].join('/');
  try {
    const res = await client.get(
      `https://strapi.padev.xyz/api/${apiPath}/${deep ? '?populate=deep' : ''}`
    );
    // console.log(`Strapi content for ${apiPath} (${apiKey}) retreived`);

    return res.data.data.map((p: any) => {
      return {
        ...p,
        slug: p.attributes.slug.startsWith(`${srcPath[0]}`)
          ? p.attributes.slug
          : path.join(srcPath[0], p.attributes.slug),
      };
    });
  } catch (e: any) {
    console.log(`Strapi content for ${apiPath} (${apiKey}) - ${e.message}`);
    return [];
  }
}

export async function getStrapiPage(srcPath: string[]): Promise<any> {
  // console.log(`Retreiving ${srcPath.join('/')}`);
  return getStrapiContent(srcPath, true);
}

export async function getPages(): Promise<any> {
  return Promise.all(
    Object.keys(prefixes).map((p) => getStrapiContent([p], true))
  ).then((r) => r.flat());
}

export async function getUrls(): Promise<any> {
  return Promise.all(
    Object.keys(prefixes).map((p) => getStrapiContent([p], false))
  ).then((r) => r.flat().map((pg: any) => pg.slug));
}
