import { NextFunction, Response, Request } from 'express';

export default (
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
    return next();
};
