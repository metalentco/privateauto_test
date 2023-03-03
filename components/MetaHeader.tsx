import Head from "next/head";
import Script from "next/script";
type Props = {
  content: any;
  headerContent: string;
};

const MetaHeader = ({ content, headerContent }: Props) => {
  const baseDomain = process.env.NEXT_PUBLIC_BASE_URL;
  const imageDomain = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

  const abbr = (Description: string) => {
    const max = Math.min(Description.length, 200);
    let pos1 = Description.lastIndexOf(".", max);
    pos1 = pos1 == -1 ? max : pos1;
    const pos2 = Description.lastIndexOf(" ", pos1);
    return Description.slice(0, pos2 == -1 ? pos1 : pos2);
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <base href="/" />
      <title>{content.PageTitle} | PrivateAuto</title>
      {headerContent != null && headerContent}

      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <link rel="manifest" href="manifest.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={`https://${baseDomain}/${content.slug}`} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1976d2" />
      <meta
        name="facebook-domain-verification"
        content="hgou7oprqmpme9utlc7oixtkaov3yl"
      />
      <meta name="p:domain_verify" content="dec5347638a7faf766214d6ced69be3a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="translucent"
      />

      {content.MetaDescription && (
        <meta
          property="description"
          content={`${content.MetaDescription} | PrivateAuto`}
        />
      )}

      <meta property="og:type" content="article" />
      {content.MetaDescription && (
        <meta
          property="og:description"
          content={`${abbr(content.MetaDescription)}`}
        />
      )}
      {content.Image && content.Image.data && (
        <meta
          property="og:image"
          content={`https://${imageDomain}/${content.Image.data.attributes.url}`}
        />
      )}
      <meta
        property="og:image:width"
        content="${ImageData.data.attributes.width}"
      />
      <meta
        property="og:image:height"
        content="${ImageData.data.attributes.height}"
      />
      <meta
        property="og:title"
        content={`${content.PageTitle} | PrivateAuto`}
      />
      <meta
        property="og:url"
        content={`https://${baseDomain}/${content.slug}`}
      />
      <meta property="og:type" content="website" />
      <meta name="og:site_name" property="og:site_name" content="PrivateAuto" />

      <meta
        property="article:published_time"
        content={`${content.publishedAt}`}
      />
      <meta property="article:modified_time" content={`${content.updatedAt}`} />

      {content.MetaDescription && (
        <meta
          property="twitter:description"
          content={`${abbr(content.MetaDescription)}`}
        />
      )}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="_privateauto" />
      <meta name="twitter:site" content="_privateauto" />
      <meta
        name="twitter:url"
        content={`https://${baseDomain}/${content.slug}`}
      />
      <meta
        name="twitter:title"
        content={`${content.PageTitle} | PrivateAuto`}
      />
      {content.Image && content.Image.data && (
        <meta
          property="twitter:image"
          content={`https://${imageDomain}/${content.Image.data.attributes.url}`}
        />
      )}
      <meta
        name="twitter:image:alt"
        content={`${content.PageTitle} | PrivateAuto`}
      />

      <meta
        httpEquiv="origin-trial"
        content="A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
        
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Organization",
            "name": "PrivateAuto",
            "url": "https://privateauto.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://${imageDomain}/${
            content.Image && content.Image.data
              ? content.Image.data.attributes.url
              : ""
          }"
          }
        },
        "headline": ${content.PageTitle},
        "url": https://${baseDomain}/${content.slug}",
        "datePublished": "${content.publishedAt}",
        "dateModified": "${content.updatedAt}",
        "image": {
          "@type": "ImageObject",
          "url": "https://${imageDomain}/${
            content.Image && content.Image.data
              ? content.Image.data.attributes.url
              : ""
          }",
          "width": ${
            content.Image && content.Image.data
              ? content.Image.data.attributes.url
              : 0
          },
          "height": ${
            content.Image && content.Image.data
              ? content.Image.data.attributes.url
              : 0
          }
      },
        "keywords": "Car Title",
        "description": "${
          content.MetaDescription != null ? abbr(content.MetaDescription) : ""
        }",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://privateauto.com"
        }
      }`,
        }}
      ></script>
    </Head>
  );
};

export default MetaHeader;
