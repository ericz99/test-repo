import { Request, Response, NextFunction } from 'express';

import { getAllData, getOneData } from './services';

export const getAllPost = async (_req: Request, res: Response) => {
    return res.json({ data: await getAllData() });
};

export const getOnePost = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) => {
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
