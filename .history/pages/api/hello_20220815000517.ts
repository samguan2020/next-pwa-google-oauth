// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  author: string,
  description: string,
  version: string,
  
}

const users: Data[] = [
  {
    name: 'John Doe',
    email: 'Doe@gmail.com',
    password: '123456',
  }
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(users)
}
