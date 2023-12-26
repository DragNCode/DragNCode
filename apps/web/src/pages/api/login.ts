import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token: string;
  msg: string;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { email, password } = req.body;

  try {
    //validate user(database)
    //validate password(database)

    res.status(200).json({ token: "", msg: "logged in successfully" });
  } catch (error) {
    res.status(501).json({
      token: "",
      msg: "an error occured",
    });
  }
}
