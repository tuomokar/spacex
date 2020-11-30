import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { id },
  } = req;

  return new Promise((resolve) => {
    try {
      const request = https.get(
        `https://api.spacexdata.com/v4/launches/${id}`,
        (response) => {
          res.json(response);

          resolve();
        },
      );

      request.end();
    } catch (error) {
      console.error(error);
      res.status(500).end();

      return resolve();
    }
  });
};
