import { Request, Response, NextFunction } from 'express';

import { getAllData, getOneData, createCommentData, getCommentData } from './services';
// import client from '../loaders/redis';
// import Comments from '../models/comments';

interface PathParams {
  id: string;
}

interface PostBody {
  postId: number;
  body: string;
  name: string;
  email: string;
}

export const getAllComment = async (_req: Request, res: Response) => {
  return res.json({ data: await getAllData() });
};

export const getOneComment = async (req: Request<PathParams>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await getOneData(id);
    if (!post) {
      throw new Error('No post found!');
    }
    return res.json({ post });
  } catch (e) {
    return next(e);
  }
};

export const getComment = async (req: Request<PathParams>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    // // get by key
    // const data: any = await client.get(id);

    // if (!data) {
    //     throw new Error("Id doesn't exist!");
    // }

    // # get from database
    const foundComment = await getCommentData(id);

    return res.status(200).json({
      status: 200,
      data: foundComment
    });
  } catch (e) {
    return next(e);
  }
};

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bodyData = req.body as PostBody;
    // # set data to redis
    const data = await createCommentData({ data: bodyData });
    // return response
    return res.status(200).json({
      status: 'success',
      data: data
    });
  } catch (e) {
    return next(e);
  }
};
