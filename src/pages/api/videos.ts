import nc from 'next-connect';
import upload from '../../utils/uploads';
import connectToDatabase from '../../utils/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'next-auth/jwt';

  const handler = nc()
    .use(upload.single('file'))
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
      const { title, authorId, videoURL, authorName, authorAvatar, views } =
        req.body;

      const secret = process.env.JWT_SECRET;

      const token = await jwt.getToken({ req, secret });

      if (token) {
        const { db } = await connectToDatabase();
        const collection = db.collection('videos');

        await collection.insertOne({
          title,
          authorAvatar,
          authorId,
          views,
          videoURL,
          authorName,
          //@ts-ignore
          thumb: req.file.location,
        });

        return res.json({ ok: true });
      }
        return res.status(401).end()
    });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
