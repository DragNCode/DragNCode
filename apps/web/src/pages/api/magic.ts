import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
    console.log(req.body);

    // decide wether to convert json1 to json2 here and then send it to engine or
    // directly send to engine

    res.status(200).json({
        message: 'Recieved successfully'
    })

}
