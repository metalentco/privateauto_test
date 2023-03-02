import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  try {
    if (typeof req.query.path === "string") {
      await res.revalidate(req.query.path);
    } else if (Array.isArray(req.query.path)) {
      let path: string = "";
      for (let item of req.query.path) {
        path += item + "/";
      }
      await res.revalidate(path.slice(0, path.length - 1));
    }
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
