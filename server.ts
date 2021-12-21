import express from 'express';
import * as exegesisExpress from 'exegesis-express';
// import exegesisSwaggerUIPlugin from 'exegesis-plugin-swagger-ui-express';
import path from 'path';
// import swaggerUi from 'swagger-ui-express';
// import YAML from 'yamljs';

// import PostsRouter from './posts/routes';
// import CommentsRouter from './comments/routes';

import NotFound from './middlewares/notFound';
import ErrorHandler from './middlewares/errorHandler';

// const swaggerCommentDocument = YAML.load('./comments/swagger.yml');
// const swaggerPostDocument = YAML.load('./posts/swagger.yml');

export const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const options = {
    controllers: path.resolve(__dirname, './controllers'),
    controllersPattern: '**/*.@(ts|js)'
    // plugins: [
    //   exegesisSwaggerUIPlugin({
    //     app,
    //     path: '/api-docs',
    //     swaggerUIOptions: {
    //       explorer: true
    //     }
    //   })
    // ]
  };

  const exegesisMiddleware = await exegesisExpress.middleware(path.resolve(__dirname, 'open-api', 'api', 'openapi.yml'), options);

  app.use(exegesisMiddleware);

  //   app.use('/api-comments-docs', swaggerUi.serveFiles(swaggerCommentDocument), swaggerUi.setup(swaggerCommentDocument));
  //   app.use('/api-posts-docs', swaggerUi.serveFiles(swaggerPostDocument), swaggerUi.setup(swaggerPostDocument));

  //   app.use('/posts', PostsRouter);
  //   app.use('/comments', CommentsRouter);

  app.use(ErrorHandler);
  app.use(NotFound);

  return {
    app
  };
};

// first commit

// second commit

// third commit
