import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  description: string;
  image_url: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  res.status(200).json({
    title: "UAlbany Laundry",
    description: "",
    image_url: "",
  });
}
