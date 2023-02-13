import type {NextApiRequest, NextApiResponse} from 'next';

export default async function handleGetData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // catch all for callback from auth

  res.redirect(`/${process.env.BASE_PATH}`);
}
