import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import PostsRouter from './posts/routes';
import CommentsRouter from './comments/routes';

import NotFound from './middlewares/notFound';
import ErrorHandler from './middlewares/errorHandler';

const swaggerCommentDocument = YAML.load('./comments/swagger.yml');
const swaggerPostDocument = YAML.load('./posts/swagger.yml');

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/api-comments-docs', swaggerUi.serveFiles(swaggerCommentDocument), swaggerUi.setup(swaggerCommentDocument));
  app.use('/api-posts-docs', swaggerUi.serveFiles(swaggerPostDocument), swaggerUi.setup(swaggerPostDocument));

  app.use('/posts', PostsRouter);
  app.use('/comments', CommentsRouter);

  app.use(ErrorHandler);
  app.use(NotFound);

  return {
    app
  };
};
