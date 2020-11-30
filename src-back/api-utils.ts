import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';

import { SPACEX_URL_BASE } from './url-constants';

export const createSpaceXController = (url: string) => {
  return (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const {
      query: { id },
    } = req;

    const urlToUse = `${SPACEX_URL_BASE}${url}/${id || ''}`;

    return new Promise((resolve) => {
      try {
        const request = https.get(urlToUse, (response) => {
          res.json(response);

          resolve();
        });

        request.end();
      } catch (error) {
        console.error(error);
        res.status(500).end();

        return resolve();
      }
    });
  };
};
