import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise((resolve) => {
    try {
      const request = https.get(
        'https://api.spacexdata.com/v4/launches',
        (response) => {
          res.json(response);

          resolve();
        },
      );

      request.end();
    } catch (error) {
      // TODO: Ideally we wouldn't use console
      console.error(error);
      res.status(500).end();

      return resolve();
    }
  });
};
