import { Request, Response, NextFunction } from 'express';
import { v4 } from 'uuid';

import { getAllData, getOneData } from './services';
import client from '../loaders/redis';

interface PathParams {
    id: string;
}

const createCommentData = async <T extends { id: string; data: string }>(
    obj: T
) => {
    // # set data to redis, ttl = 1day
    await client.set(
        obj.id,
        JSON.stringify({ ...obj }),
        'PX',
        1000 * 60 * 60 * 24
    );
};

export const getAllComment = async (_req: Request, res: Response) => {
    return res.json({ data: await getAllData() });
};

export const getOneComment = async (
    req: Request<PathParams>,
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

export const getComment = async (
    req: Request<PathParams>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        // get by key
        const data: any = await client.get(id);

        if (!data) {
            throw new Error("Id doesn't exist!");
        }

        return res.status(200).json({
            status: 200,
            data: JSON.parse(data),
        });
    } catch (e) {
        return next(e);
    }
};

export const createComment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const bodyData = req.body;
        const genID = v4();
        // # set data to redis
        await createCommentData({ ...bodyData, id: genID });
        // return response
        return res.status(200).json({
            status: 'success',
            data: {
                ...bodyData,
                id: genID,
            },
        });
    } catch (e) {
        return next(e);
    }
};
