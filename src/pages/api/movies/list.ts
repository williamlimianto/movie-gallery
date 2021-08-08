import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const responseAPI = await fetch(
    'https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies'
  );

  const moviesListData = await responseAPI.json();

  if (moviesListData && moviesListData.length === 0) {
    res.status(404).json({ message: 'Data not Found' });
  } else {
    res.status(responseAPI.status).json(moviesListData);
  }
}
