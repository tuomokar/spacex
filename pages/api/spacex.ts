import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({ test: 'testData' });
};
