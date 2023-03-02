import Link from "next/link";

type Props = {
  data: any;
  index: number;
};

const LinkHubSubComp = ({ data, index }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="space-y-4">
      {data.map((item: any, i: number) => {
        if (Math.floor(i / 10) == index) {
          return (
            <div className="text-xl text-[#45577d] font-bold underline" key={i}>
              {item.__component == "linkhub.external-link" ? (
                <Link href={item.URL} target="_blank" rel="noreferrer">
                  {item.Title}
                </Link>
              ) : (
                <Link
                  href={`${BASE_URL}${item.link.data.attributes.slug.slice(
                    1,
                    item.link.data.attributes.slug.length
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.Title}
                </Link>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default LinkHubSubComp;
