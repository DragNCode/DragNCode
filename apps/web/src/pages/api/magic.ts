import { ENGINE_URL } from '@/utils/Objects';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
    console.log(req.body);

    // decide wether to convert json1 to json2 here and then send it to engine or
    // directly send to engine

    const sendData = await axios.post(`${ENGINE_URL}/engine/json1`);
    const response = await sendData.data;
    console.log(response)

    res.status(200).json({
        message: 'Recieved successfully'
    })

}
