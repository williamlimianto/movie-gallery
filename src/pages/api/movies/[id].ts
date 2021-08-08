import type { NextApiRequest, NextApiResponse } from 'next';

export async function getMovieDetailData(id: string) {
  const responseAPI = await fetch(
    `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${id}`
  );
  return responseAPI;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id = '' } = req.query;

  const responseAPI = await getMovieDetailData(id as string);
  res.status(responseAPI.status).json(await responseAPI.json());
}
