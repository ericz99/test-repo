import { NextFunction, Response, Request } from 'express';

export default (_req: Request, res: Response, _next: NextFunction) => {
    const err = new Error('Not Found!');

    return res.status(404).json({
        message: err.message,
    });
};
