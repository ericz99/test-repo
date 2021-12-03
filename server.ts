import express from 'express';

import PostsRouter from './posts/routes';
import CommentsRouter from './comments/routes';

import NotFound from './middlewares/notFound';
import ErrorHandler from './middlewares/errorHandler';

export const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/posts', PostsRouter);
    app.use('/comments', CommentsRouter);

    app.use(ErrorHandler);
    app.use(NotFound);

    return {
        app,
    };
};
