import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  // TODO: handle error
  https.get('https://api.spacexdata.com/v4/launches', (response) => {
    res.json(response);
  });
};
