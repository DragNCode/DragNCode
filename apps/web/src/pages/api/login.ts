import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
    code: number,
    message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
    const { username, password } = req.body;
    console.log(username, password);

    res.status(200).json({
       code: 200,
       message: 'success' 
    })

}
