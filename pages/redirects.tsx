import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "@/libs/constants";

type Props = {
  redirects: Redirect[];
};

const RedirectsPage: NextPage<Props> = ({ redirects }) => {
  const [redirectRules, setRedirectRules] = useState<any>([]);

  useEffect(() => {
    if (redirects != null) {
      const rules = redirects.map(({ attributes }) => ({
        Condition: {
          KeyPrefixEquals: attributes.RedirectFrom,
        },
        Redirect: {
          Protocol: "http",
          HostName: "localhost:3000",
          ReplaceKeyPrefixWith: attributes.RedirectTo,
          HttpRedirectCode: attributes.RedirectCode,
        },
      }));

      setRedirectRules(rules);
    }
  }, [redirects]);

  return (
    <Helmet>
      {redirects != null && (
        <script
          dangerouslySetInnerHTML={{
            __html: `{
              "Rules": ${JSON.stringify(redirectRules)}
            }`,
          }}
        />
      )}
    </Helmet>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "redirects?populate=deep";
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

    const { data } = await res.json();

    const redirects = data.map((redirect: Redirect) => redirect);

    return {
      props: {
        redirects,
      },
    };
  } catch (e: any) {
    console.log(
      `Strapi content for ${STRAPI_URL} (${authorization}) - ${e.message}`
    );
    return {
      props: {
        redirects: null,
      },
    };
  }
};

export default RedirectsPage;
